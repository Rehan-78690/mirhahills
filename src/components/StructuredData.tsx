import { absoluteUrl, breadcrumbs, faqs, siteConfig } from "@/lib/site";

/**
 * JSON-LD structured data for SEO rich results.
 *
 * Emits: WebSite, Organization (the independent information portal), a
 * Residence referencing the project's official developer (Mira Developments),
 * BreadcrumbList, and FAQPage. Rendering these as server-side <script> tags
 * keeps them crawlable without any client JS. The Organization is deliberately
 * NOT a RealEstateAgent and clearly states it is independent / unaffiliated.
 */
export default function StructuredData() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#portal` },
    },
    {
      // The independent informational portal operating this website.
      "@type": "Organization",
      "@id": `${siteConfig.url}/#portal`,
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
      areaServed: "AE",
      description: `An independent informational portal about ${siteConfig.name}. Not affiliated with, endorsed by, or operated by ${siteConfig.officialDeveloper.name} or any official ${siteConfig.name} developer entity.`,
    },
    {
      // The project itself, referencing its official developer.
      "@type": "Residence",
      "@id": `${siteConfig.url}/#project`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      developer: {
        "@type": "Organization",
        name: siteConfig.officialDeveloper.name,
        url: siteConfig.officialDeveloper.url,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.href),
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own static
      // config, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
