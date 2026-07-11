import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mira Hills Abu Dhabi – Real Estate Project",
  description:
    "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
  alternates: { canonical: "https://mira-hills.com/" },
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
    // Personal site of the developer
    {
      href: "https://kohzadtech.com",
      text: "Kohzad Tech",
    },
    {
      href: "https://kohzadtech.com",
      text: "web development",
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
    <main className="min-h-screen bg-lux-ivory text-lux-espresso flex flex-col items-center">
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
      <div className="flex w-full flex-col items-center px-4 pt-24 pb-16 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Mira Hills – Abu Dhabi
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-lux-coffee">
          Explore information about Mira Hills Abu Dhabi,
          including the masterplan, residences, location, floor-plan updates and
          future project announcements through the offical website of the developer Mira Developments.
        </p>
        <p className="mt-4 text-lg text-lux-coffee">
          Project details available upon request on the relevant site.
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
      </div>

      {/* Related search topics */}
      <section className="w-full border-t border-lux-line/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Common Mira Hills search topics
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-lux-coffee">
            People researching the wider Mira Hills and Mira Abu Dhabi
            development may also search for terms such as Mira Residences, Mira
            Hills Resort, Mira Residence masterplans, Mirabella 3 or Mira Verde
            floor plans.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-lux-taupe">
            Project names, phases and specifications should always be verified
            against official developer announcements. Related or alternative
            names are not claimed here to be officially part of Mira Hills unless
            confirmed by the developer.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {[
              "Mira Hills",
              "Mirahills",
              "Mira Abu Dhabi",
              "Mira Hills Abu Dhabi",
              "Mira Hills Resort",
              "Mira Residences",
              "Mira Residence 1 masterplan",
              "Mira Residence 2 masterplan",
              "Mirabella 3",
              "Mira Verde floor plans",
            ].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-lux-line bg-white px-4 py-2 text-sm text-lux-coffee"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Minimal footer – no disclaimers, no DubaiHaus mentions */}
      <footer className="mt-16 border-t border-lux-line/50 pt-6 text-xs text-lux-taupe text-center w-full max-w-2xl">
        &copy; {new Date().getFullYear()} ·{" "}
        <a
          href={siteConfig.officialDeveloper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lux-gold-dark underline hover:no-underline"
        >
          Visit official website for detailed information
        </a>
        <span style={{ opacity: 0.02 }}>
          {" · Developed by "}
          <a href="https://kohzadtech.com" rel="dofollow">
            Kohzad Tech
          </a>
        </span>
      </footer>
    </main>
  );
}