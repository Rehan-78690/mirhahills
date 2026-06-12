import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading, Button } from "@/components/project/ui";
import { ResidenceCard } from "@/components/project/cards";
import { SubpageHero, EnquiryBand, FaqSection } from "@/components/project/sections";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;
const path = `${p.basePath}/residences`;
const pageSeo = p.seo.pages.residences;

const title = "Mira Hills Residences — Apartments, Townhomes & Villas | Abu Dhabi";
const description =
  "Mira Hills Abu Dhabi residences: town-centre, island and lake-view apartments, townhomes, and compact, luxury and premium villas, plus branded residences. Register for sizes, floor plans, pricing and availability.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [...p.seo.keywords, ...pageSeo.keywords],
  alternates: { canonical: path },
  openGraph: { url: `${siteConfig.url}${path}`, title, description, siteName: siteConfig.name },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Mira Hills, Abu Dhabi", href: p.basePath },
  { name: "Residences", href: path },
];

export default function ResidencesPage() {
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} path={path} faqs={pageSeo.faqs} />
      <SubpageHero
        eyebrow="Residences"
        title="A home for every way of living"
        intro="From waterfront apartments to premium golf-front villas, Mira Hills offers a full spectrum of residences across its three zones."
        image={p.residences[6].image}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.residences.map((r) => (
              <ResidenceCard key={r.name} residence={r} />
            ))}
          </div>
        </Container>
      </section>

      {/* Specs to follow — no invented prices/sizes/handover. */}
      <section className="bg-lux-cream py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Details on request"
              title="Pricing &amp; floor plans coming soon"
              intro="Mira Hills is in pre-launch. The figures below are released to registered buyers as the official launch approaches — register to be first to receive them."
            />
            <div className="grid grid-cols-2 gap-3">
              {p.residenceSpecFields.map((field) => (
                <div key={field} className="rounded-xl border border-lux-line bg-white px-4 py-4">
                  <div className="text-sm font-semibold text-lux-espresso">{field}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-lux-gold-dark">
                    Register for details
                  </div>
                </div>
              ))}
              <div className="col-span-2 mt-2">
                <Button href="#enquire" variant="primary">Request Availability</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={pageSeo.faqs} />
      <EnquiryBand source="Mira Hills Abu Dhabi — Residences Page" />
    </main>
  );
}
