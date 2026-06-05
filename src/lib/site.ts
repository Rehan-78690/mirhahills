/**
 * Central site configuration — the single source of truth for branding, SEO
 * metadata, structured data, and the FAQ content.
 *
 * Mira Hills is developed by AD Ports Group; DubaiHaus is the advisory partner
 * featuring the project and handling registrations through this landing page.
 */

export const siteConfig = {
  name: "Mira Hills",
  /** Canonical production URL (no trailing slash). */
  url: "https://mira-hills.com",
  domain: "mira-hills.com",
  tagline: "Coming Soon",
  locale: "en_US",
  description:
    "Mira Hills is an exclusive new off-plan launch by AD Ports Group, featured by DubaiHaus. Register your interest for early access to floor plans, launch pricing, and priority unit selection.",
  /** Shorter description for social cards / OG. */
  shortDescription:
    "An exclusive new off-plan launch by AD Ports Group, featured by DubaiHaus. Register for early access.",

  /** The project developer. */
  developer: {
    name: "AD Ports Group",
    url: "https://www.adportsgroup.com",
  },

  /** The advisory / marketing partner operating this landing page. */
  advisor: {
    name: "DubaiHaus",
    url: "https://dubaihaus.com",
    email: "info@dubaihaus.com",
  },

  keywords: [
    "Mira Hills",
    "Mira Hills off-plan",
    "Mira Hills AD Ports Group",
    "AD Ports Group residences",
    "DubaiHaus",
    "off-plan property",
    "new launch real estate",
    "off-plan investment",
    "coming soon development",
    "register interest off-plan",
  ],
} as const;

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
      "Mira Hills is an exclusive new off-plan residential development by AD Ports Group. The project is in its pre-launch phase and is being featured by the DubaiHaus advisory team, who are managing early-interest registrations.",
  },
  {
    question: "Who is the developer of Mira Hills?",
    answer:
      "Mira Hills is developed by AD Ports Group. DubaiHaus is the advisory partner featuring the project and supporting prospective buyers through registration, guidance, and launch information.",
  },
  {
    question: "When is Mira Hills launching?",
    answer:
      "The official launch date will be announced shortly. By registering your interest now, you'll be among the first to receive the launch date, masterplan, floor plans, and pricing before the public release.",
  },
  {
    question: "How do I register my interest?",
    answer:
      "Simply complete the registration form on this page with your name and contact details. A dedicated DubaiHaus advisor will personally reach out to you with priority access and full project information as it becomes available.",
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
    question: "Why should I register early?",
    answer:
      "Premium off-plan launches move quickly. Registering early gives you priority access to the best units and launch pricing, plus a dedicated DubaiHaus advisor to guide you through every step.",
  },
];
