import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

/**
 * Lead storage — append-only JSON-Lines file at `data/leads.jsonl`.
 *
 * No database dependency: every contact/enquiry/brochure submission is appended
 * as one JSON object per line. The admin panel reads this file. The file lives
 * outside /public and is git-ignored, so leads are never publicly served.
 *
 * NOTE: works for self-hosted / `next start`. On ephemeral/serverless hosts the
 * filesystem is not durable — swap `saveLead`/`readLeads` for a DB there.
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
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(FILE, JSON.stringify(lead) + "\n", "utf8");
  return lead;
}

/** Read all leads, newest first. Returns [] when no file exists yet. */
export async function readLeads(): Promise<Lead[]> {
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
