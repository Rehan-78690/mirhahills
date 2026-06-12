import Link from "next/link";
import { miraHills, type Faq } from "@/lib/projects/mira-hills";
import { Container, Eyebrow, SectionHeading } from "./ui";
import Figure from "./Figure";
import EnquiryForm from "./EnquiryForm";
import FaqList from "./Faq";

/** Standard FAQ section — present on every project page (with FAQPage schema). */
export function FaqSection({ items }: { items: readonly Faq[] }) {
  return (
    <section className="bg-lux-ivory py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mt-12">
          <FaqList items={items as Faq[]} />
        </div>
      </Container>
    </section>
  );
}

export interface Crumb {
  name: string;
  href: string;
}

/** Visible breadcrumb trail (schema is emitted separately by ProjectSchema). */
export function ProjectBreadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const muted = light ? "text-white/60" : "text-lux-taupe";
  const strong = light ? "text-white" : "text-lux-espresso";
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href + c.name} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={`font-medium ${strong}`}>{c.name}</span>
              ) : (
                <Link href={c.href} className={`${muted} transition hover:underline`}>{c.name}</Link>
              )}
              {!last && <span className={muted}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Standard banner hero for subpages. */
export function SubpageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative">
      <Figure
        src={image}
        alt={`${title} — Mira Hills, Abu Dhabi`}
        priority
        sizes="100vw"
        overlay="linear-gradient(to bottom, rgba(28,21,14,0.55), rgba(28,21,14,0.78))"
        className="flex min-h-[58vh] items-end"
      >
        <Container className="relative py-14">
          <ProjectBreadcrumbs items={breadcrumbs} light />
          <div className="mt-5 max-w-3xl">
            <Eyebrow className="text-lux-champagne">{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>}
          </div>
        </Container>
      </Figure>
    </section>
  );
}

/** Closing enquiry band — carries the #enquire anchor used site-wide. */
export function EnquiryBand({ source }: { source: string }) {
  return (
    <section id="enquire" className="scroll-mt-20 bg-lux-espresso py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Register Interest"
              title="Request details &amp; availability"
              intro="A DubaiHaus property consultant will personally share launch pricing, floor plans, payment plans and availability as soon as they are released."
              light
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-white/50">Developer</dt>
                <dd className="font-semibold text-white">{miraHills.developer.name}</dd>
              </div>
              <div>
                <dt className="text-white/50">Advisory partner</dt>
                <dd className="font-semibold text-white">{miraHills.advisor.name}</dd>
              </div>
              <div>
                <dt className="text-white/50">Email</dt>
                <dd className="font-semibold text-white">{miraHills.advisor.email}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <EnquiryForm source={source} variant="dark" />
          </div>
        </div>
      </Container>
    </section>
  );
}
