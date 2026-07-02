import type { Metadata } from "next";
import Link from "next/link";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/project/ui";
import Figure from "@/components/project/Figure";

const title = "Abu Dhabi Off-Plan Projects | Independent Information Portal";
const description =
  "An independent information portal covering off-plan projects in Abu Dhabi, including Mira Hills — a master-planned community on the Abu Dhabi–Dubai corridor. Not affiliated with any official developer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { url: `${siteConfig.url}/projects`, title, description, siteName: siteConfig.name },
};

const projects = [miraHills];

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-lux-ivory text-lux-espresso">
      <Container className="py-16 lg:py-24">
        <SectionHeading eyebrow="Off-Plan Projects" title="Abu Dhabi off-plan projects" intro="General information on new-launch developments, compiled by this independent portal. Not affiliated with any official developer." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((proj) => (
            <Link key={proj.slug} href={proj.basePath} className="group overflow-hidden rounded-3xl border border-lux-line bg-white shadow-lux-sm transition hover:-translate-y-1 hover:shadow-lux">
              <Figure
                src={proj.hero.image}
                alt={proj.fullName}
                overlay="linear-gradient(to top, rgba(44,34,24,0.6), transparent 55%)"
                className="h-64"
              >
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lux-champagne">{proj.emirate}</span>
                  <h2 className="font-display text-3xl font-semibold text-white">{proj.name}</h2>
                </div>
              </Figure>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-lux-taupe">{proj.headline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lux-gold-dark">
                  View project
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
