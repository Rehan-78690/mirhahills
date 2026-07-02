"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { miraHills } from "@/lib/projects/mira-hills";
import { DISCLAIMER_SHORT } from "@/lib/site";

/** Sticky top navigation with the project wordmark and subpage tabs. */
export default function ProjectNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Slim non-affiliation disclaimer strip, always visible above the nav. */}
      <div className="bg-lux-espresso text-lux-cream">
        <p className="mx-auto max-w-6xl px-5 py-1.5 text-center text-[11px] leading-snug text-lux-cream/80 sm:px-8">
          {DISCLAIMER_SHORT}{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-lux-gold">
            Learn more
          </Link>
        </p>
      </div>

      <header
        className={`sticky top-0 z-40 transition ${
          scrolled
            ? "border-b border-lux-line bg-lux-ivory/90 backdrop-blur supports-[backdrop-filter]:bg-lux-ivory/75"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href={miraHills.basePath} className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-xl font-semibold tracking-tight text-lux-espresso">
            Mira <span className="text-lux-gold">Hills</span>
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-lux-taupe sm:inline">
            Abu Dhabi
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {miraHills.subpages.map((tab) => {
            const active =
              tab.href === miraHills.basePath
                ? pathname === tab.href
                : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-lux-sand text-lux-espresso"
                    : "text-lux-coffee hover:bg-lux-sand/60"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <a
          href="#enquire"
          className="rounded-full bg-lux-gold px-5 py-2 text-sm font-semibold text-white shadow-lux-sm transition hover:bg-lux-gold-dark"
        >
          Register interest
        </a>
        </nav>
      </header>
    </>
  );
}
