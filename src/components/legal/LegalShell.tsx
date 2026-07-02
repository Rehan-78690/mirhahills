import type { ReactNode } from "react";
import ProjectNav from "@/components/project/ProjectNav";
import ProjectFooter from "@/components/project/ProjectFooter";

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
      <ProjectNav />

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-taupe">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-lux-coffee">{intro}</p>
        <p className="mt-2 text-xs text-lux-taupe">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">{children}</div>
      </main>

      <ProjectFooter />
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
