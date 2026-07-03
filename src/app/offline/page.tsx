import type { Metadata } from "next";
import { DISCLAIMER_SHORT, siteConfig } from "@/lib/site";

/** Temporary "site offline" holding page. Kept out of search while live. */
export const metadata: Metadata = {
  title: "Site currently offline",
  description:
    "This site is temporarily offline. Please visit the official developer's website for official information.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/offline" },
};

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-lux-espresso px-5 py-16 font-sans text-lux-cream">
      <div className="w-full max-w-lg text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-lux-cream/80 ring-1 ring-white/15">
          <span className="h-1.5 w-1.5 rounded-full bg-lux-gold" />
          Temporarily offline
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          This site is currently offline
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-lux-cream/75">
          This website is temporarily unavailable. For official information about
          the project, please visit the official developer&apos;s website.
        </p>

        <a
          href={siteConfig.officialDeveloper.url}
          rel="noopener noreferrer nofollow"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-lux-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lux transition hover:bg-lux-gold-dark focus:outline-none focus:ring-2 focus:ring-lux-gold/40 focus:ring-offset-2 focus:ring-offset-lux-espresso"
        >
          Visit {siteConfig.officialDeveloper.name}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mx-auto mt-10 max-w-sm border-t border-white/10 pt-6 text-xs leading-relaxed text-lux-cream/45">
          {DISCLAIMER_SHORT}
        </p>
      </div>
    </main>
  );
}
