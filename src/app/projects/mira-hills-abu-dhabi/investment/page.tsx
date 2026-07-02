import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/project/ui";
import { SubpageHero, EnquiryBand, FaqSection } from "@/components/project/sections";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;
const path = `${p.basePath}/investment`;
const pageSeo = p.seo.pages.investment;

const title = "Investing in Mira Hills — Abu Dhabi Off-Plan Opportunity";
const description =
  "Why Mira Hills Abu Dhabi is positioned for long-term value: a landmark mixed-use master-planned community on the Abu Dhabi–Dubai corridor with golf, lagoons, hotels, retail, schools and healthcare.";

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
  { name: "Investment", href: path },
];

export default function InvestmentPage() {
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} path={path} faqs={pageSeo.faqs} />
      <SubpageHero
        eyebrow="Investment"
        title="A long-term growth story"
        intro="Mira Hills pairs the scale of a landmark master-plan with the diversified demand of a true mixed-use community — built for enduring value."
        image={`/images/mira-hills/gallery-aerial.jpg`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Why Mira Hills" title="The investment case" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.investment.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-lux-line bg-white p-7 shadow-lux-sm">
                <span className="font-display text-3xl font-semibold text-lux-gold/40">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-lux-espresso">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-lux-cream py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-2xl border border-lux-line bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-lux-espresso">Phase 1.1 — apartments</h3>
              <div className="mt-3 font-display text-3xl font-semibold text-lux-gold-dark">{p.phase11.apartments.count} plots</div>
              <p className="mt-2 text-sm text-lux-taupe">FAR {p.phase11.apartments.far} · Total GFA {p.phase11.apartments.totalGfa} · Plot {p.phase11.apartments.totalPlot}</p>
            </div>
            <div className="rounded-2xl border border-lux-line bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-lux-espresso">Phase 1.1 — villas</h3>
              <div className="mt-3 font-display text-3xl font-semibold text-lux-gold-dark">{p.phase11.villas.count} plots</div>
              <p className="mt-2 text-sm text-lux-taupe">FAR {p.phase11.villas.far} · Total GFA {p.phase11.villas.totalGfa} · Plot {p.phase11.villas.totalPlot}</p>
            </div>
            <div className="rounded-2xl border border-lux-line bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-lux-espresso">Pricing &amp; payment plans</h3>
              <p className="mt-3 text-sm leading-relaxed text-lux-taupe">
                Not yet released for this pre-launch project. Register your interest to receive launch pricing, payment plans and availability as soon as they are announced.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={pageSeo.faqs} />
      <EnquiryBand source="Mira Hills Abu Dhabi — Investment Page" />
    </main>
  );
}
