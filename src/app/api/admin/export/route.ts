import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { readLeads, type Lead } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLUMNS: (keyof Lead)[] = [
  "receivedAt", "type", "name", "email", "phone",
  "propertyType", "budget", "source", "emailed", "message",
];

const escapeCsv = (value: unknown) =>
  `"${String(value ?? "").replace(/"/g, '""')}"`;

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }
  const leads = await readLeads();
  const rows = [
    COLUMNS.join(","),
    ...leads.map((l) => COLUMNS.map((c) => escapeCsv(l[c])).join(",")),
  ];
  return new NextResponse(rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="mira-hills-leads.csv"`,
    },
  });
}
