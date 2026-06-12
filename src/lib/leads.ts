import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { getDb, isMongoConfigured } from "./mongodb";

/**
 * Lead storage.
 *
 * Two interchangeable backends behind one interface (`saveLead` / `readLeads`):
 *
 *  - **MongoDB** when `MONGODB_URI` is set — durable on serverless hosts
 *    (Vercel), where the filesystem is ephemeral. This is the production path.
 *  - **Append-only JSON-Lines file** at `data/leads.jsonl` otherwise — zero
 *    config for local dev / self-hosted `next start`. Git-ignored and outside
 *    /public, so leads are never publicly served.
 *
 * The admin panel and CSV export consume `readLeads()`; the contact API calls
 * `saveLead()`. Neither cares which backend is active.
 */

export type LeadType = "enquiry" | "brochure" | "contact";

export interface Lead {
  id: string;
  receivedAt: string; // ISO timestamp
  type: LeadType;
  name: string;
  email: string;
  phone?: string;
  propertyType?: string;
  budget?: string;
  message?: string;
  source?: string;
  /** Whether the notification email was sent successfully. */
  emailed: boolean;
}

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "leads.jsonl");
const COLLECTION = "leads";

/** Which backend is active — surfaced in the admin panel. */
export function storageBackend(): "mongodb" | "file" {
  return isMongoConfigured() ? "mongodb" : "file";
}

/** Classify a lead from its source label. */
export function classifyLead(source?: string): LeadType {
  const s = (source || "").toLowerCase();
  if (s.includes("brochure")) return "brochure";
  if (s.includes("coming soon")) return "contact";
  return "enquiry";
}

/** Append a lead and return the stored record. */
export async function saveLead(
  input: Omit<Lead, "id" | "receivedAt">
): Promise<Lead> {
  const lead: Lead = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...input,
  };

  if (isMongoConfigured()) {
    const db = await getDb();
    // Spread so the driver's injected `_id` lands on a copy, not on `lead`.
    await db.collection<Lead>(COLLECTION).insertOne({ ...lead });
    return lead;
  }

  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(FILE, JSON.stringify(lead) + "\n", "utf8");
  return lead;
}

/** Read all leads, newest first. Returns [] when nothing is stored yet. */
export async function readLeads(): Promise<Lead[]> {
  if (isMongoConfigured()) {
    const db = await getDb();
    return db
      .collection<Lead>(COLLECTION)
      .find({}, { projection: { _id: 0 } })
      .sort({ receivedAt: -1 })
      .toArray();
  }

  try {
    const raw = await fs.readFile(FILE, "utf8");
    const leads = raw
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as Lead;
        } catch {
          return null;
        }
      })
      .filter((l): l is Lead => l !== null);
    return leads.reverse();
  } catch (err) {
    if ((err as NodeJS.ErrnoException)?.code === "ENOENT") return [];
    throw err;
  }
}
