import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/project/ui";
import Figure from "@/components/project/Figure";
import { ZoneCard } from "@/components/project/cards";
import { SubpageHero, EnquiryBand, FaqSection } from "@/components/project/sections";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;
const path = `${p.basePath}/masterplan`;
const pageSeo = p.seo.pages.masterplan;

const title = "Mira Hills Masterplan — Zones, Open Space & Mobility | Abu Dhabi";
const description =
  "Explore the Mira Hills Abu Dhabi masterplan: South, Central and North zones, the open-space strategy, 40km of walking trails, 21km of cycling paths, the loop bus network and utilities.";

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
  { name: "Masterplan", href: path },
];

export default function MasterplanPage() {
  const m = p.masterplan;
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} path={path} faqs={pageSeo.faqs} />
      <SubpageHero
        eyebrow="Masterplan"
        title="A master-planned city, by design"
        intro={m.intro}
        image={m.image}
        breadcrumbs={breadcrumbs}
      />

      {/* Full masterplan */}
      <section className="py-16 lg:py-20">
        <Container>
          <Figure src={m.image} alt="Mira Hills masterplan overview" className="h-[320px] rounded-3xl shadow-lux sm:h-[520px]" />
        </Container>
      </section>

      {/* Zones */}
      <section className="bg-lux-cream py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Zones" title="South, Central &amp; North" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {p.zones.map((z, i) => (
              <ZoneCard key={z.name} zone={z} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Open space */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Open Space" title="From public parks to private lagoons" intro={m.openSpace.intro} />
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {m.openSpace.allocation.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-lux-coffee">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-lux-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {m.openSpace.breakdown.map((b) => (
                <div key={b.label} className="flex items-center justify-between rounded-2xl border border-lux-line bg-white p-6">
                  <div>
                    <div className="font-display text-2xl font-semibold text-lux-espresso">{b.value}</div>
                    <div className="text-sm text-lux-taupe">{b.label}</div>
                  </div>
                  <span className="rounded-full bg-lux-sand px-3 py-1 text-xs font-semibold text-lux-gold-dark">{b.note}</span>
                </div>
              ))}
              <Figure src={m.images.openSpace} alt="Mira Hills open space plan" className="h-48 rounded-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Mobility */}
      <section className="bg-lux-espresso py-20 text-white lg:py-24">
        <Container>
          <SectionHeading eyebrow="Mobility" title="Walk, cycle, connect" align="center" light />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {m.mobility.map((mob) => (
              <div key={mob.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center">
                <div className="font-display text-4xl font-semibold text-lux-gold">{mob.stat}</div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{mob.title}</h3>
                <p className="mt-2 text-sm text-white/65">{mob.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Utilities & Phase 1.1 */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Infrastructure" title="Engineered for scale" />
              <ul className="mt-6 space-y-3">
                {m.utilities.map((u) => (
                  <li key={u} className="flex gap-2.5 rounded-xl border border-lux-line bg-white p-4 text-sm text-lux-coffee">
                    <svg className="mt-0.5 h-4 w-4 flex-none text-lux-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18" strokeLinecap="round" /></svg>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Phasing" title="Phase 1.1 — first delivery" intro={p.phase11.intro} />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-lux-line bg-lux-cream p-5">
                  <div className="font-display text-3xl font-semibold text-lux-gold-dark">{p.phase11.apartments.count}</div>
                  <div className="text-sm font-medium text-lux-espresso">Apartment plots</div>
                  <div className="mt-2 text-xs text-lux-taupe">FAR {p.phase11.apartments.far} · GFA {p.phase11.apartments.totalGfa}</div>
                </div>
                <div className="rounded-2xl border border-lux-line bg-lux-cream p-5">
                  <div className="font-display text-3xl font-semibold text-lux-gold-dark">{p.phase11.villas.count}</div>
                  <div className="text-sm font-medium text-lux-espresso">Villa / townhouse plots</div>
                  <div className="mt-2 text-xs text-lux-taupe">FAR {p.phase11.villas.far} · GFA {p.phase11.villas.totalGfa}</div>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.phase11.anchors.map((a) => (
                  <li key={a} className="rounded-full border border-lux-line bg-white px-3 py-1 text-xs text-lux-coffee">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={pageSeo.faqs} />
      <EnquiryBand source="Mira Hills Abu Dhabi — Masterplan Page" />
    </main>
  );
}
