import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  content,
  DUBAIHAUS,
  OFFICIAL_DEVELOPER_NAME,
  OFFICIAL_DEVELOPER_URL,
  otherLocale,
  type Locale,
} from "@/lib/gateway-content";
import GatewaySchema from "./GatewaySchema";
import LocaleCookieSync from "./LocaleCookieSync";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Arrow glyph used on external/primary CTAs. */
function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The independent Mira Hills information gateway, rendered for a single locale.
 * Server-rendered (fully indexable); all copy comes from `gateway-content`.
 */
export default function Gateway({ locale }: { locale: Locale }) {
  const c = content[locale];
  const alt = otherLocale(locale);
  const projectHref = DUBAIHAUS.project[locale];
  const dubaihausHref = DUBAIHAUS.main[locale];

  return (
    <div className="min-h-screen bg-lux-ivory font-sans text-lux-espresso">
      <GatewaySchema locale={locale} />
      <LocaleCookieSync locale={locale} />

      {/* ---------- Header ---------- */}
      <header className="border-b border-lux-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight">
              Mira <span className="text-lux-gold">Hills</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-lux-taupe">
              {c.eyebrow}
            </span>
          </span>

          {/* Language switcher — real URL navigation, not client-only. */}
          <nav aria-label={c.ui.language} className="flex items-center gap-1 text-sm font-medium">
            <span className="rounded-full bg-lux-sand px-3 py-1.5 text-lux-espresso" aria-current="true">
              {locale === "en" ? "EN" : "DE"}
            </span>
            <Link
              href={`/${alt}`}
              hrefLang={alt}
              className="rounded-full px-3 py-1.5 text-lux-coffee transition hover:bg-lux-sand/60"
            >
              {alt === "en" ? "EN" : "DE"}
            </Link>
          </nav>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(1200px 400px at 15% -10%, rgba(199,161,90,0.14), transparent 60%), radial-gradient(900px 380px at 100% 0%, rgba(44,34,24,0.06), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-lux-line bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-lux-taupe">
            <span className="h-1.5 w-1.5 rounded-full bg-lux-gold" />
            {c.eyebrow}
          </span>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {c.h1}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-lux-coffee">{c.heroSub}</p>

          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a
              href={projectHref}
              {...EXTERNAL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lux-gold px-6 py-3.5 text-sm font-semibold text-white shadow-lux-sm transition hover:bg-lux-gold-dark focus:outline-none focus:ring-2 focus:ring-lux-gold/40 focus:ring-offset-2"
            >
              {c.cta.project}
              <Arrow />
            </a>
            <a
              href={dubaihausHref}
              {...EXTERNAL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-lux-line bg-white px-6 py-3.5 text-sm font-semibold text-lux-espresso transition hover:border-lux-taupe"
            >
              {c.cta.dubaihaus}
            </a>
            <a
              href={OFFICIAL_DEVELOPER_URL}
              {...EXTERNAL}
              title={`${OFFICIAL_DEVELOPER_NAME} — ${c.ui.externalOfficial}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-lux-line bg-white px-6 py-3.5 text-sm font-semibold text-lux-coffee transition hover:border-lux-taupe"
            >
              {c.cta.official}
              <Arrow className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Prominent near-hero disclaimer */}
          <div
            role="note"
            className="mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50/70 px-5 py-4 text-sm leading-relaxed text-amber-900"
          >
            {c.disclaimer}
          </div>
        </div>
      </section>

      {/* ---------- Information categories ---------- */}
      <section className="border-t border-lux-line/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {c.info.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-lux-coffee">{c.info.intro}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.info.categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-lux-line bg-lux-ivory/60 p-6 transition hover:border-lux-taupe/60 hover:shadow-lux-sm"
              >
                <h3 className="font-display text-lg font-semibold text-lux-espresso">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-coffee">{cat.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={projectHref}
              {...EXTERNAL}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lux-gold-dark hover:underline"
            >
              {c.cta.project}
              <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related search topics ---------- */}
      <section className="border-t border-lux-line/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {c.topics.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-lux-coffee">{c.topics.body}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-lux-taupe">{c.topics.note}</p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {c.topics.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-lux-line bg-white px-4 py-2 text-sm text-lux-coffee"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-lux-line/70 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {c.faq.heading}
          </h2>
          <div className="mt-8 divide-y divide-lux-line/70 border-y border-lux-line/70">
            {c.faq.items.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-lux-espresso marker:content-['']">
                  {item.q}
                  <span className="shrink-0 text-lux-gold transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-lux-coffee">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-lux-espresso text-lux-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
                DubaiHaus
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={projectHref} {...EXTERNAL} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.project}
                  </a>
                </li>
                <li>
                  <a href={dubaihausHref} {...EXTERNAL} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {c.footer.dubaihaus}
                  </a>
                </li>
                <li>
                  {/* Official developer: external official source, deliberately not nofollow. */}
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
                Legal
              </h3>
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
