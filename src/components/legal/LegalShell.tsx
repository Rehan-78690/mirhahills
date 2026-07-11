import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  content,
  DUBAIHAUS,
  OFFICIAL_DEVELOPER_NAME,
  OFFICIAL_DEVELOPER_URL,
} from "@/lib/gateway-content";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

// Legal pages are English; reuse the English gateway strings for the chrome.
const c = content.en;

/** Shared chrome + typography for the Privacy Policy and Terms pages. */
export default function LegalShell({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-lux-ivory font-sans text-lux-espresso">
      {/* Neutral header — links back to the gateway, no gated project nav. */}
      <header className="border-b border-lux-line/70">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/en" className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight">
              Mira <span className="text-lux-gold">Hills</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-lux-taupe">
              {c.eyebrow}
            </span>
          </Link>
          <Link href="/en" className="text-sm font-medium text-lux-coffee transition hover:text-lux-espresso">
            ← Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-taupe">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-lux-coffee">{intro}</p>
        <p className="mt-2 text-xs text-lux-taupe">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">{children}</div>
      </main>

      {/* Gateway-consistent footer. */}
      <footer className="bg-lux-espresso text-lux-cream">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="font-display text-xl font-semibold">
                Mira <span className="text-lux-gold">Hills</span>{" "}
                <span className="align-middle text-[10px] font-medium uppercase tracking-[0.2em] text-lux-cream/50">
                  {c.eyebrow}
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-lux-cream/70">{c.disclaimer}</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
                DubaiHaus
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={DUBAIHAUS.project.en} {...EXTERNAL} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.project}
                  </a>
                </li>
                <li>
                  <a href={DUBAIHAUS.main.en} {...EXTERNAL} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.dubaihaus}
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_DEVELOPER_URL}
                    {...EXTERNAL}
                    title={`${OFFICIAL_DEVELOPER_NAME} — ${c.ui.externalOfficial}`}
                    className="text-lux-cream/80 transition hover:text-lux-gold"
                  >
                    {c.footer.official} ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
                Legal
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-lux-cream/50">
            © {new Date().getFullYear()} {siteConfig.domain} — {c.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

/** A titled section within a legal page. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-lux-espresso">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-lux-coffee sm:text-base [&_a]:font-medium [&_a]:text-lux-gold-dark [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  );
}

/** Consistent bulleted list for legal copy. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-lux-gold">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
