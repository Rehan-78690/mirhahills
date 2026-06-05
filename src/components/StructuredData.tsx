import { absoluteUrl, breadcrumbs, faqs, siteConfig } from "@/lib/site";

/**
 * JSON-LD structured data for SEO rich results.
 *
 * Emits: WebSite, Organization (DubaiHaus advisory) with the developer
 * (AD Ports Group) referenced, BreadcrumbList, and FAQPage. Rendering these as
 * server-side <script> tags keeps them crawlable without any client JS.
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
      publisher: { "@id": `${siteConfig.url}/#advisor` },
    },
    {
      // The advisory partner operating this page and receiving registrations.
      "@type": "RealEstateAgent",
      "@id": `${siteConfig.url}/#advisor`,
      name: siteConfig.advisor.name,
      url: siteConfig.advisor.url,
      email: siteConfig.advisor.email,
      areaServed: "AE",
      description: `${siteConfig.advisor.name} is the advisory partner featuring ${siteConfig.name}, an off-plan development by ${siteConfig.developer.name}.`,
    },
    {
      // The project itself, with its true developer.
      "@type": "Residence",
      "@id": `${siteConfig.url}/#project`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      developer: {
        "@type": "Organization",
        name: siteConfig.developer.name,
        url: siteConfig.developer.url,
      },
      offeredBy: { "@id": `${siteConfig.url}/#advisor` },
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
