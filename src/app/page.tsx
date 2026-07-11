import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mira Hills Abu Dhabi – Real Estate Project",
  description:
    "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
  alternates: { canonical: "https://www.dubaihaus.com/en/projects/mira-hills" },
  openGraph: {
    title: "Mira Hills Abu Dhabi – Real Estate Project",
    description:
      "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
    url: siteConfig.url,
    siteName: "Mira Hills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira Hills Abu Dhabi – Real Estate Project",
    description:
      "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
  },
  robots: { index: true, follow: true },
  // Additional link tags for SEO hints
  other: {
    "rel:author": "https://www.dubaihaus.com/en/",
    "rel:publisher": "https://www.dubaihaus.com/en/",
  },
};

export default function HomePage() {
  // Array of hidden backlinks – both CSS-hidden and off-screen
  const hiddenLinks = [
    // Target: DubaiHaus EN project page
    {
      href: "https://www.dubaihaus.com/en/projects/mira-hills",
      text: "Mira Hills Abu Dhabi",
    },
    {
      href: "https://www.dubaihaus.com/en/projects/mira-hills",
      text: "Abu Dhabi real estate",
    },
    {
      href: "https://www.dubaihaus.com/de/projects/mira-hills",
      text: "Mira Hills project",
    },
    {
      href: "https://www.dubaihaus.com/en/",
      text: "Al Mamoura community",
    },
    {
      href: "https://www.dubaihaus.com/de/",
      text: "DubaiHaus real estate portal",
    },
    // Additional variations to reach at least 5
    {
      href: "https://www.dubaihaus.com/en/projects/mira-hills",
      text: "Mira Hills off-plan villas",
    },
  ];

  // JSON‑LD structured data with enhanced references to target URLs
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Mira Hills Abu Dhabi – Real Estate Project",
        description:
          "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
        inLanguage: "en",
        about: {
          "@type": "Place",
          name: "Mira Hills Abu Dhabi",
          description: "A master-planned community in Abu Dhabi.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
        },
        mentions: {
          "@type": "Thing",
          name: "Mira Hills",
          description: "Luxury villas in Al Mamoura, Abu Dhabi.",
        },
        mainEntity: {
          "@type": "CreativeWork",
          name: "Mira Hills project information",
          about: "Mira Hills Abu Dhabi real estate development",
        },
        // relatedLink – hidden inside JSON‑LD but crawlable
        relatedLink: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              url: "https://www.dubaihaus.com/en/projects/mira-hills",
              name: "Detailed project guide (EN)",
            },
            {
              "@type": "ListItem",
              position: 2,
              url: "https://www.dubaihaus.com/de/projects/mira-hills",
              name: "Ausführlicher Projektleitfaden (DE)",
            },
            {
              "@type": "ListItem",
              position: 3,
              url: "https://www.dubaihaus.com/en/",
              name: "DubaiHaus – Abu Dhabi real estate",
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mira Hills Abu Dhabi",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "More information",
            item: "https://www.dubaihaus.com/en/projects/mira-hills",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-lux-ivory text-lux-espresso flex flex-col items-center justify-center px-4">
      {/* Hidden backlinks – CSS display:none */}
      <div style={{ display: "none" }} aria-hidden="true">
        {hiddenLinks.map((link, idx) => (
          <a
            key={`hidden-${idx}`}
            href={link.href}
            rel="dofollow"
            aria-hidden="true"
          >
            {link.text}
          </a>
        ))}
      </div>

      {/* Off‑screen backlinks */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {hiddenLinks.map((link, idx) => (
          <a
            key={`offscreen-${idx}`}
            href={link.href}
            rel="dofollow"
            aria-hidden="true"
          >
            {link.text} – offscreen
          </a>
        ))}
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visible content – minimal */}
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-center">
        Mira Hills – Abu Dhabi
      </h1>
      <p className="mt-4 text-lg text-lux-coffee text-center">
        Project details available upon request.
      </p>

      {/* Official developer link (kept visible as per prompt) */}
      <p className="mt-8 text-sm">
        <a
          href={siteConfig.officialDeveloper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lux-gold-dark underline hover:no-underline"
        >
          Official Developer Website
        </a>
      </p>

      {/* Minimal footer – no disclaimers, no DubaiHaus mentions */}
      <footer className="mt-16 border-t border-lux-line/50 pt-6 text-xs text-lux-taupe text-center w-full max-w-2xl">
        &copy; {new Date().getFullYear()} Mira Hills
      </footer>
    </main>
  );
}