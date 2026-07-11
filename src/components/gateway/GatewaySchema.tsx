import { siteConfig } from "@/lib/site";
import { content, type Locale } from "@/lib/gateway-content";

/**
 * Server-rendered JSON-LD for a gateway locale page: WebPage, BreadcrumbList and
 * FAQPage. The FAQPage is built from the SAME `content[locale].faq.items` that
 * render visibly on the page, so the structured data always matches the visible
 * content. No Offer / pricing / rating / availability / ownership claims.
 */
export default function GatewaySchema({ locale }: { locale: Locale }) {
  const c = content[locale];
  const pageUrl = `${siteConfig.url}/${locale}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: c.h1,
      description: c.meta.description,
      inLanguage: c.htmlLang,
      isPartOf: {
        "@type": "WebSite",
        name: "Independent Mira Hills Information Portal",
        url: `${siteConfig.url}/`,
      },
      about: { "@type": "Thing", name: "Mira Hills Abu Dhabi" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mira Hills Abu Dhabi",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: c.htmlLang,
      mainEntity: c.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // Values are our own static content, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
