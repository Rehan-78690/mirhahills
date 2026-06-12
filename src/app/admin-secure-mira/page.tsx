import type { Metadata } from "next";
import Link from "next/link";
import { isAuthed, isConfigured } from "@/lib/admin-auth";
import { readLeads, type Lead, type LeadType } from "@/lib/leads";
import AdminLogin from "./AdminLogin";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Admin · Mira Hills",
  robots: { index: false, follow: false },
};

const BASE = "/admin-secure-mira";

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toISOString().slice(0, 16).replace("T", " ");
}

const TYPE_LABELS: Record<string, string> = {
  all: "All",
  enquiry: "Enquiries",
  brochure: "Brochure requests",
  contact: "Contact (coming soon)",
};

const TYPE_BADGE: Record<LeadType, string> = {
  enquiry: "bg-blue-100 text-blue-700",
  brochure: "bg-amber-100 text-amber-700",
  contact: "bg-emerald-100 text-emerald-700",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  if (!(await isAuthed())) {
    return <AdminLogin configured={isConfigured()} />;
  }

  const sp = await searchParams;
  const filter = sp?.type ?? "all";
  const all = await readLeads();
  const leads = filter === "all" ? all : all.filter((l) => l.type === filter);

  const counts = {
    all: all.length,
    enquiry: all.filter((l) => l.type === "enquiry").length,
    brochure: all.filter((l) => l.type === "brochure").length,
    contact: all.filter((l) => l.type === "contact").length,
  };

  return (
    <div className="min-h-screen bg-lux-ivory text-lux-espresso">
      <header className="border-b border-lux-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="font-display text-xl font-semibold">
            Mira <span className="text-lux-gold">Hills</span>{" "}
            <span className="text-sm font-normal text-lux-taupe">· Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/api/admin/export"
              className="rounded-full bg-lux-gold px-4 py-2 text-sm font-semibold text-white transition hover:bg-lux-gold-dark"
            >
              Export CSV
            </a>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {/* Filter tabs with counts */}
        <div className="flex flex-wrap gap-2">
          {(["all", "enquiry", "brochure", "contact"] as const).map((t) => {
            const active = filter === t;
            return (
              <Link
                key={t}
                href={t === "all" ? BASE : `${BASE}?type=${t}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? "bg-lux-espresso text-white" : "border border-lux-line bg-white text-lux-coffee hover:bg-lux-sand"
                }`}
              >
                {TYPE_LABELS[t]} <span className={active ? "text-white/70" : "text-lux-taupe"}>({counts[t]})</span>
              </Link>
            );
          })}
        </div>

        {leads.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-lux-line bg-white p-12 text-center text-lux-taupe">
            No {filter === "all" ? "" : TYPE_LABELS[filter].toLowerCase() + " "}submissions yet.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-lux-line bg-white shadow-lux-sm">
            <table className="min-w-full divide-y divide-lux-line text-sm">
              <thead className="bg-lux-cream text-left text-xs uppercase tracking-wide text-lux-taupe">
                <tr>
                  {["Received", "Type", "Name", "Email", "Phone", "Property", "Budget", "Source", "Email", "Message"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-lux-line">
                {leads.map((lead: Lead) => (
                  <tr key={lead.id} className="align-top hover:bg-lux-ivory/60">
                    <td className="whitespace-nowrap px-4 py-3 text-lux-taupe">{fmtDate(lead.receivedAt)}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TYPE_BADGE[lead.type]}`}>
                        {lead.type}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-lux-espresso">{lead.name}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <a href={`mailto:${lead.email}`} className="text-lux-gold-dark hover:underline">{lead.email}</a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-lux-coffee">{lead.phone || "—"}</td>
                    <td className="px-4 py-3 text-lux-coffee">{lead.propertyType || "—"}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-lux-coffee">{lead.budget || "—"}</td>
                    <td className="px-4 py-3 text-xs text-lux-taupe">{lead.source || "—"}</td>
                    <td className="px-4 py-3 text-center">{lead.emailed ? "✓" : "✗"}</td>
                    <td className="max-w-xs px-4 py-3 text-lux-coffee">{lead.message || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-6 text-xs text-lux-taupe">
          Showing {leads.length} of {counts.all} total submissions · stored in <code className="font-mono">data/leads.jsonl</code>
        </p>
      </main>
    </div>
  );
}
