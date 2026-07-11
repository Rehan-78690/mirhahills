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