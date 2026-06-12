import { miraHills } from "@/lib/projects/mira-hills";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/project/ui";
import Figure from "@/components/project/Figure";
import Icon from "@/components/project/Icon";
import { ResidenceCard } from "@/components/project/cards";
import Gallery from "@/components/project/Gallery";
import FaqList from "@/components/project/Faq";
import EnquiryForm from "@/components/project/EnquiryForm";
import ProjectSchema from "@/components/project/ProjectSchema";

const p = miraHills;

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Mira Hills, Abu Dhabi", href: p.basePath },
];

export default function MiraHillsPage() {
  return (
    <main>
      <ProjectSchema breadcrumbs={breadcrumbs} faqs={p.faqs} />

      {/* 1 — HERO ------------------------------------------------------------ */}
      <section className="relative">
        <Figure
          src={p.hero.image}
          alt="Mira Hills Abu Dhabi masterplan aerial"
          overlay="linear-gradient(to bottom, rgba(28,21,14,0.62), rgba(28,21,14,0.72))"
          className="min-h-[92vh]"
        >
          <Container className="relative flex min-h-[92vh] flex-col justify-center py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Eyebrow className="text-lux-champagne">{p.hero.eyebrow}</Eyebrow>
                <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Mira Hills
                  <span className="block text-3xl font-normal text-lux-champagne sm:text-4xl">
                    {p.tagline}
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                  {p.headline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#enquire" variant="primary">Register Interest</Button>
                  <Button href="#enquire" variant="outline-light">Request Brochure</Button>
                  <Button href={`${p.basePath}/masterplan`} variant="outline-light">View Masterplan</Button>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/60">
                  A development by {p.developer.name} · Featured by {p.advisor.name}
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-lux backdrop-blur sm:p-7">
                <h2 className="font-display text-2xl font-semibold text-lux-espresso">
                  Register your interest
                </h2>
                <p className="mt-1 text-sm text-lux-taupe">
                  Priority access to floor plans, launch pricing &amp; availability.
                </p>
                <div className="mt-5">
                  <EnquiryForm source="Mira Hills Abu Dhabi — Hero Form" />
                </div>
              </div>
            </div>
          </Container>
        </Figure>
      </section>

      {/* 2 — QUICK FACTS ---------------------------------------------------- */}
      <section className="border-b border-lux-line bg-lux-cream py-12">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {p.quickFacts.map((f) => (
              <div key={f.label} className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-lux-sand text-lux-gold-dark">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-lux-taupe">{f.label}</div>
                  <div className="text-sm font-semibold text-lux-espresso">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 — OVERVIEW ------------------------------------------------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="The Vision"
                title="An integrated city between two emirates"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-lux-coffee">
                {p.overview.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>
            <Figure
              src={`/images/mira-hills/overview-aerial.jpg`}
              alt="Mira Hills aerial vision"
              className="h-[420px] rounded-3xl shadow-lux"
            />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-lux-line bg-lux-line sm:grid-cols-3 lg:grid-cols-6">
            {p.stats.map((s) => (
              <div key={s.label} className="bg-lux-ivory px-4 py-7 text-center">
                <div className="font-display text-3xl font-semibold text-lux-gold-dark">{s.value}</div>
                <div className="mt-1 text-xs text-lux-taupe">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 — LOCATION ------------------------------------------------------- */}
      <section className="bg-lux-cream py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Figure
              src={p.location.image}
              alt="Mira Hills location between Abu Dhabi and Dubai"
              className="order-2 h-[420px] rounded-3xl shadow-lux lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="Location" title="On the Abu Dhabi–Dubai corridor" intro={p.location.blurb} />
              <div className="mt-7 space-y-5">
                {p.location.points.map((pt) => (
                  <div key={pt.title} className="rounded-xl border border-lux-line bg-white p-5">
                    <h3 className="font-display text-lg font-semibold text-lux-espresso">{pt.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-lux-taupe">{pt.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Button href="#enquire" variant="outline">Speak to an Area Specialist</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 — MASTERPLAN PREVIEW -------------------------------------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Masterplan" title="One destination, three zones" intro={p.masterplan.intro} align="center" />
          <Figure
            src={p.masterplan.image}
            alt="Mira Hills masterplan overview"
            className="mt-10 h-[300px] rounded-3xl shadow-lux sm:h-[460px]"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {p.zones.map((z, i) => (
              <div key={z.name} className="rounded-2xl border border-lux-line bg-white p-6">
                <span className="font-display text-sm font-semibold text-lux-gold-dark">0{i + 1}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-lux-espresso">{z.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{z.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href={`${p.basePath}/masterplan`} variant="primary">Explore Masterplan</Button>
          </div>
        </Container>
      </section>

      {/* 6 — RESIDENCES ----------------------------------------------------- */}
      <section className="bg-lux-cream py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Residences" title="A home for every way of living" intro="From lagoon and town-centre apartments to premium golf-front villas — a full spectrum of residences across the masterplan." align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.residences.slice(0, 6).map((r) => (
              <ResidenceCard key={r.name} residence={r} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href={`${p.basePath}/residences`} variant="outline">View All Residences</Button>
          </div>
        </Container>
      </section>

      {/* 7 — LIFESTYLE ------------------------------------------------------ */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Lifestyle" title="Resort living, every day" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.lifestyle.map((l) => (
              <article key={l.title} className="overflow-hidden rounded-2xl border border-lux-line bg-white shadow-lux-sm">
                <Figure src={l.image} alt={l.title} className="h-48 w-full" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-lux-espresso">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{l.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 8 — AMENITIES PREVIEW --------------------------------------------- */}
      <section className="bg-lux-espresso py-20 text-white lg:py-28">
        <Container>
          <SectionHeading eyebrow="Amenities" title="A complete world of amenities" intro="World-class leisure, education, retail, hospitality, wellness and nature — grouped into seven curated collections." align="center" light />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.amenityGroups.map((g) => (
              <div key={g.category} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lux-gold/20 text-lux-gold">
                  <Icon name={g.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{g.category}</h3>
                <p className="mt-2 text-sm text-white/65">{g.blurb}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-lux-gold">{g.items.length} highlights</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={`${p.basePath}/amenities`} variant="light">View All Amenities</Button>
          </div>
        </Container>
      </section>

      {/* 9 — INVESTMENT ----------------------------------------------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Investment" title="Built for long-term value" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.investment.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-lux-line bg-white p-7 shadow-lux-sm">
                <span className="font-display text-3xl font-semibold text-lux-gold/40">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-lux-espresso">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href={`${p.basePath}/investment`} variant="outline">Explore the Investment Case</Button>
          </div>
        </Container>
      </section>

      {/* 10 — GALLERY ------------------------------------------------------- */}
      <section className="bg-lux-cream py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Gallery" title="A glimpse of Mira Hills" align="center" />
          <div className="mt-12">
            <Gallery items={p.gallery} />
          </div>
        </Container>
      </section>

      {/* 11 — FAQ ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
          <div className="mt-12">
            <FaqList items={p.faqs} />
          </div>
        </Container>
      </section>

      {/* 12 — ENQUIRY ------------------------------------------------------- */}
      <section id="enquire" className="scroll-mt-20 bg-lux-espresso py-20 text-white lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Register Interest"
                title="Be first when Mira Hills launches"
                intro="Share your details and a DubaiHaus property consultant will personally reach out with launch pricing, floor plans, payment plans and availability the moment they are released."
                light
              />
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-white/50">Developer</dt>
                  <dd className="font-semibold text-white">{p.developer.name}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Advisory partner</dt>
                  <dd className="font-semibold text-white">{p.advisor.name}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Email</dt>
                  <dd className="font-semibold text-white">{p.advisor.email}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
              <EnquiryForm source="Mira Hills Abu Dhabi — Final CTA" variant="dark" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
