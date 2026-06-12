import { miraHills, type Faq } from "@/lib/projects/mira-hills";
import { absoluteUrl, siteConfig } from "@/lib/site";

interface Crumb {
  name: string;
  href: string;
}

/**
 * Project JSON-LD. Emits a graph describing the development (as a Place /
 * residential complex), its developer and advisory agent, the page breadcrumb
 * trail, and — where provided — an FAQPage. All values come from project data.
 */
export default function ProjectSchema({
  breadcrumbs = [],
  faqs,
  path = miraHills.basePath,
}: {
  breadcrumbs?: Crumb[];
  faqs?: readonly Faq[];
  path?: string;
}) {
  const projectId = `${siteConfig.url}${miraHills.basePath}#project`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Place", "Residence"],
      "@id": projectId,
      name: miraHills.fullName,
      url: absoluteUrl(miraHills.basePath),
      description: miraHills.positioning[0],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
      },
      // Approximate location on the Abu Dhabi–Dubai (Ghantoot) corridor; the
      // exact plot is confirmed at launch.
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.832,
        longitude: 54.781,
      },
      containedInPlace: { "@type": "AdministrativeArea", name: "Abu Dhabi, UAE" },
      developer: {
        "@type": "Organization",
        name: miraHills.developer.name,
        url: miraHills.developer.url,
        sameAs: [miraHills.developer.url],
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Project type", value: "Master-planned community (off-plan)" },
        { "@type": "PropertyValue", name: "Golf", value: "18-hole championship course" },
        { "@type": "PropertyValue", name: "Central Park", value: "5 million sq ft" },
      ],
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${siteConfig.url}/#advisor`,
      name: miraHills.advisor.name,
      url: miraHills.advisor.url,
      email: miraHills.advisor.email,
      telephone: miraHills.contact.phoneDisplay,
      logo: absoluteUrl("/favicon.svg"),
      image: absoluteUrl("/opengraph-image"),
      areaServed: "AE",
      sameAs: [miraHills.advisor.url],
      description: `${miraHills.advisor.name} is the advisory partner featuring ${miraHills.fullName}, a development by ${miraHills.developer.name}.`,
    },
  ];

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}${path}#breadcrumbs`,
      itemListElement: breadcrumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.href),
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteConfig.url}${path}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
