import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading, Button } from "@/components/project/ui";
import Figure from "@/components/project/Figure";
import { SubpageHero, EnquiryBand, FaqSection } from "@/components/project/sections";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;
const path = `${p.basePath}/location`;
const pageSeo = p.seo.pages.location;

const title = "Mira Hills Location — Abu Dhabi–Dubai Corridor | Off-Plan";
const description =
  "Mira Hills is located in Abu Dhabi on the strategic corridor between Abu Dhabi and Dubai. Discover why this connectivity-led location is positioned for long-term growth for families and investors.";

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
  { name: "Location", href: path },
];

export default function LocationPage() {
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} path={path} faqs={pageSeo.faqs} />
      <SubpageHero
        eyebrow="Location"
        title="Between Abu Dhabi and Dubai"
        intro={p.location.blurb}
        image={p.location.image}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <Figure src={p.location.image} alt="Mira Hills site location map between Abu Dhabi and Dubai" className="h-[320px] rounded-3xl shadow-lux sm:h-[480px]" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.location.points.map((pt) => (
              <div key={pt.title} className="rounded-2xl border border-lux-line bg-white p-7 shadow-lux-sm">
                <h3 className="font-display text-xl font-semibold text-lux-espresso">{pt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{pt.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-lux-cream py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Why it matters"
              title="A location built for the next decade"
              intro="The Abu Dhabi–Dubai corridor links the UAE's two largest economies. For families it means access to both capitals' schools, healthcare, business and aviation hubs; for investors it means exposure to one of the region's primary long-term growth axes."
            />
            <div className="rounded-3xl border border-lux-line bg-white p-8 shadow-lux-sm">
              <p className="text-sm leading-relaxed text-lux-coffee">
                Mira Hills is planned around regional accessibility, with direct access from existing road networks and an internal mobility loop connecting every neighbourhood to the community&apos;s town hubs, schools and leisure anchors.
              </p>
              <div className="mt-6">
                <Button href="#enquire" variant="primary">Speak to an Area Specialist</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={pageSeo.faqs} />
      <EnquiryBand source="Mira Hills Abu Dhabi — Location Page" />
    </main>
  );
}
