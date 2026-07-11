export const siteConfig = {
  name: "Mira Hills",
  url: "https://mira-hills.com",
  domain: "mira-hills.com",
  tagline: "Real Estate Project",
  locale: "en_US",
  description:
    "Mira Hills Abu Dhabi – a premier community by Mira Developments.",
  shortDescription: "Mira Hills Abu Dhabi – real estate project.",

  officialDeveloper: {
    name: "Mira Developments",
    url: "https://miradevelopments.ae/",
  },

  contactEmail: "info@mira-hills.com",

  keywords: [
    "Mira Hills",
    "Mira Hills Abu Dhabi",
    "Abu Dhabi real estate",
    "Mira Developments",
    "luxury villas",
    "Al Mamoura",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

/**
 * Short independent-information disclaimer used across project pages.
 */
export const DISCLAIMER_SHORT =
  "This is an independent information page and is not the official developer website.";

/**
 * Full disclaimer shown on the Terms & Disclaimer page.
 */
export const DISCLAIMER_LONG =
  "This website provides independent, informational content about Mira Hills " +
  "Abu Dhabi and is not affiliated with, endorsed by, or the official website " +
  "of Mira Developments. All project names, phases, specifications, prices and " +
  "availability are indicative and should always be verified against official " +
  "developer announcements. Imagery is for illustration only. Nothing on this " +
  "page constitutes financial, legal or investment advice or an offer to sell.";

/**
 * Breadcrumb trail — machine-readable (StructuredData) and human-facing
 * (Breadcrumbs component) share this source of truth.
 */
export const breadcrumbs: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Mira Hills Abu Dhabi", href: "/projects/mira-hills-abu-dhabi" },
];

/**
 * Frequently asked questions — rendered by the Faq component and emitted as
 * FAQPage structured data by StructuredData.
 */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "Where is Mira Hills located?",
    answer:
      "Mira Hills is a master-planned community in Abu Dhabi, positioned on the " +
      "Abu Dhabi–Dubai corridor.",
  },
  {
    question: "Who is the developer of Mira Hills?",
    answer:
      "Mira Hills is developed by Mira Developments. Always confirm project " +
      "details against official developer announcements.",
  },
  {
    question: "Is this the official Mira Hills website?",
    answer: DISCLAIMER_SHORT,
  },
  {
    question: "How can I get more Mira Hills project information?",
    answer:
      "You can register your interest on this page and an advisor will follow " +
      "up with available project details.",
  },
];