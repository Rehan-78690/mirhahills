/**
 * Central site configuration — the single source of truth for branding, SEO
 * metadata, structured data, and the FAQ content.
 *
 * This is an INDEPENDENT informational portal about the Mira Hills community.
 * It is not the official Mira Developments / Mira Hills website and is not
 * affiliated with, endorsed by, or operated by any official developer entity.
 * The project's official developer is Mira Developments (see `officialDeveloper`).
 */

export const siteConfig = {
  name: "Mira Hills",
  /** Canonical production URL (no trailing slash). */
  url: "https://mira-hills.com",
  domain: "mira-hills.com",
  tagline: "Independent Property Information Portal",
  locale: "en_US",
  description:
    "An independent informational portal about the Mira Hills master-planned community. This is not the official Mira Developments or Mira Hills website — we provide general project information to help users and are not affiliated with, endorsed by, or operated by any official Mira Hills developer entity.",
  /** Shorter description for social cards / OG. */
  shortDescription:
    "An independent informational portal about the Mira Hills community. Not affiliated with Mira Developments or the official Mira Hills developer.",

  /**
   * The project's OFFICIAL developer. This portal is independent and is NOT
   * affiliated with, endorsed by, or operated by this entity. Referenced only
   * to point users to the official source and to make non-affiliation clear.
   */
  officialDeveloper: {
    name: "Mira Developments",
    url: "https://miradevelopments.ae/",
  },

  /** Contact identity for this independent portal (used for enquiry responses). */
  contactEmail: "info@mira-hills.com",

  keywords: [
    "Mira Hills",
    "Mira Hills information",
    "Mira Hills community",
    "Mira Hills project details",
    "Mira Hills off-plan",
    "off-plan property information",
    "property information portal",
    "master-planned community",
    "register interest",
  ],
} as const;

/**
 * Short non-affiliation disclaimer for footers, headers and inline notes.
 * Cites the official developer so users can find the authoritative source.
 */
export const DISCLAIMER_SHORT =
  "Independent informational portal. Not affiliated with Mira Developments or the official Mira Hills developer.";

/** Full non-affiliation statement used in the first-visit popup and legal pages. */
export const DISCLAIMER_LONG =
  "This is not the official Mira Developments or Mira Hills website. This website is an independent informational portal created to assist users with general project information. We are not affiliated with, endorsed by, or operated by Mira Developments or any official Mira Hills developer entity.";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

/** A single breadcrumb trail entry. */
export interface Breadcrumb {
  name: string;
  /** Site-relative path (e.g. "/"). */
  href: string;
}

/** Breadcrumb trail for the landing page. Extend as the site grows. */
export const breadcrumbs: Breadcrumb[] = [
  { name: "Home", href: "/" },
  { name: "Coming Soon", href: "/" },
];

/** A single FAQ entry, reused for both the UI and FAQPage structured data. */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What is Mira Hills?",
    answer:
      "Mira Hills is a new off-plan master-planned residential community. This website is an independent informational portal that collects and presents general, publicly available project information — it is not the official developer website.",
  },
  {
    question: "Is this the official Mira Hills website?",
    answer:
      "No. This is an independent informational portal and is not affiliated with, endorsed by, or operated by Mira Developments or any official Mira Hills developer entity. The official developer is Mira Developments (miradevelopments.ae). Please verify all details with the official developer before making any decision.",
  },
  {
    question: "When is Mira Hills launching?",
    answer:
      "The official launch date will be announced shortly. By registering your interest now, you'll be among the first to receive the launch date, masterplan, floor plans, and pricing before the public release.",
  },
  {
    question: "How do I register my interest?",
    answer:
      "Simply complete the enquiry form on this page with your name and contact details. Our team will respond to your enquiry with the general project information we have available. Your details are used only to respond to your enquiry.",
  },
  {
    question: "Is there any cost or obligation to register?",
    answer:
      "No. Registering your interest is completely free and carries no obligation. It simply places you on the priority list for early access to units, floor plans, and launch-day pricing.",
  },
  {
    question: "What types of homes and payment plans will be available?",
    answer:
      "Mira Hills will offer a curated selection of premium residences with flexible payment plans. Full details on unit types, sizes, and payment options will be shared with registered members ahead of the official launch.",
  },
  {
    question: "Why should I register my interest?",
    answer:
      "Registering lets us respond to your enquiry with the general project information we have available as it is published. This portal is independent; final details should always be confirmed with the official developer, Mira Developments.",
  },
];
