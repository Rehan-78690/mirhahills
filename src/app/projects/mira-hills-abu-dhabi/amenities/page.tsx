import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/project/ui";
import Icon from "@/components/project/Icon";
import { AmenityCard } from "@/components/project/cards";
import { SubpageHero, EnquiryBand, FaqSection } from "@/components/project/sections";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;
const path = `${p.basePath}/amenities`;
const pageSeo = p.seo.pages.amenities;

const title = "Mira Hills Amenities — Golf, Lagoons, Mall, Hotels | Abu Dhabi";
const description =
  "Discover Mira Hills Abu Dhabi amenities: an 18-hole championship golf course, lagoon network, landmark mall with indoor ski, three five-star hotels, eight private beaches, a 5M sq ft Central Park, schools and universities.";

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
  { name: "Amenities", href: path },
];

export default function AmenitiesPage() {
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} path={path} faqs={pageSeo.faqs} />
      <SubpageHero
        eyebrow="Amenities"
        title="A complete world, within one community"
        intro="Mira Hills is a lifestyle-led destination — leisure, education, retail, hospitality, wellness, nature and business anchors woven through the masterplan."
        image={p.amenityGroups[0].items[0].image}
        breadcrumbs={breadcrumbs}
      />

      {/* Highlight stat strip */}
      <section className="border-b border-lux-line bg-lux-cream py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {p.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-semibold text-lux-gold-dark">{s.value}</div>
                <div className="mt-1 text-xs text-lux-taupe">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {p.amenityGroups.map((group, gi) => (
        <section key={group.category} className={gi % 2 === 1 ? "bg-lux-cream py-16 lg:py-20" : "py-16 lg:py-20"}>
          <Container>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lux-sand text-lux-gold-dark">
                <Icon name={group.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-3xl font-semibold text-lux-espresso">{group.category}</h2>
                <p className="text-sm text-lux-taupe">{group.blurb}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <AmenityCard key={item.name + group.category} item={item} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <FaqSection items={pageSeo.faqs} />
      <EnquiryBand source="Mira Hills Abu Dhabi — Amenities Page" />
    </main>
  );
}
