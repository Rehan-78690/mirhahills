import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";
import StructuredData from "@/components/StructuredData";

// Superseded by the Mira Hills project pages; keep reachable but out of search.
export const metadata: Metadata = {
  title: "Mira Hills — Coming Soon",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: true },
};

const iconClass = "h-6 w-6";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <StructuredData />
      {/* ===================== HERO / HEADER ===================== */}
      <section className="relative bg-brand-950 bg-hero-radial text-white">
        {/* subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          {/* Top nav */}
          <header className="flex items-center justify-between py-6">
            <Logo light />
            <a
              href="#register"
              className="hidden rounded-full border border-white/25 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/60 hover:bg-white/10 sm:inline-block"
            >
              Register interest
            </a>
          </header>

          {/* Breadcrumb trail (visual; schema lives in StructuredData) */}
          <div className="border-t border-white/10 py-3">
            <Breadcrumbs />
          </div>

          {/* Hero body: copy + form */}
          <div className="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-12">
            {/* Left: teaser copy */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                New Off-Plan Launch
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Something
                <span className="block bg-gradient-to-r from-sky-accent via-white to-sky-accent bg-clip-text text-transparent">
                  remarkable
                </span>
                is coming soon.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-100/90 sm:text-lg">
                Mira Hills is a new master-planned community — a collection of
                premium residences designed for those who expect more. This is an
                independent information portal; register to receive the general
                project information we have available.
              </p>

              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-brand-200/80">
                Independent information portal · Not affiliated with the official developer
              </p>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { k: "Independent", v: "Information portal" },
                  { k: "Free", v: "No obligation" },
                  { k: "General", v: "Project info" },
                ].map((item) => (
                  <div key={item.k}>
                    <dt className="text-lg font-bold text-white">{item.k}</dt>
                    <dd className="mt-1 text-xs text-brand-200">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: registration form card */}
            <div id="register" className="animate-fade-up [animation-delay:120ms]">
              <div className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-glow backdrop-blur-sm sm:p-8">
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    Register your interest
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Join the priority list — no obligation. We&apos;ll reach out
                    the moment Mira Hills goes live.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade into white */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ===================== SUPPORTING SECTIONS ===================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Why register now
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Be first in line when we launch
            </h2>
            <p className="mt-4 text-slate-500">
              Register to receive the general project information we have
              available. This is an independent information portal, not the
              official developer website.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Early access"
              icon={
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M13 2 4.5 13H11l-1 9 9-12h-6l1-8Z" strokeLinejoin="round" />
                </svg>
              }
            >
              Get priority access to floor plans, the best units, and launch-day
              pricing before the public release.
            </FeatureCard>

            <FeatureCard
              title="Project updates"
              icon={
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16v11H7l-3 3V5Z" strokeLinejoin="round" />
                  <path d="M8 9h8M8 12h5" strokeLinecap="round" />
                </svg>
              }
            >
              Stay informed with timely updates on milestones, payment plans, and
              the official launch date — straight to your inbox.
            </FeatureCard>

            <FeatureCard
              title="General guidance"
              icon={
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" strokeLinecap="round" />
                </svg>
              }
            >
              Get general information to help you understand the project. Always
              verify final details with the official developer before deciding.
            </FeatureCard>
          </div>

          {/* Trust strip */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-8 py-12 text-center text-white sm:px-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Have a question before launch?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              Register above and our team will respond with the general project
              information we have available.
            </p>
            <a
              href="#register"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50"
            >
              Register your interest
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <Faq />

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <Logo />
          <div className="text-center text-xs text-slate-400 sm:text-right">
            <p>
              © {new Date().getFullYear()} Mira Hills · Independent information portal.
              Not affiliated with Mira Developments or the official Mira Hills developer.
            </p>
            <p className="mt-2">
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-600">
                Privacy Policy
              </Link>
              {" · "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-slate-600">
                Terms &amp; Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
