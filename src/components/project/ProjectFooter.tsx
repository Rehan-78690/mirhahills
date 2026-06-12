import Link from "next/link";
import { miraHills } from "@/lib/projects/mira-hills";

/** Project footer: navigation, developer/advisor credit, internal SEO links. */
export default function ProjectFooter() {
  return (
    <footer className="bg-lux-espresso text-lux-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-semibold">
              Mira <span className="text-lux-gold">Hills</span>
              <span className="ml-2 align-middle text-[10px] font-medium uppercase tracking-[0.2em] text-lux-cream/50">
                Abu Dhabi
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-lux-cream/70">
              A landmark master-planned community on the Abu Dhabi–Dubai corridor.
              Developed by {miraHills.developer.name}, featured by {miraHills.advisor.name}.
            </p>
            <a
              href="#enquire"
              className="mt-6 inline-flex rounded-full bg-lux-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-lux-gold-dark"
            >
              Register your interest
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {miraHills.subpages.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-cream/50">
              Related
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {miraHills.internalLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-lux-cream/80 transition hover:text-lux-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-lux-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {miraHills.developer.name}. Featured by {miraHills.advisor.name}.</p>
          <p className="max-w-md sm:text-right">
            Pre-launch interest page. Imagery is indicative; all details, areas and
            availability are subject to change and confirmation at launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
