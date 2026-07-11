import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * /sitemap.xml — the publicly indexable pages: the English and German gateway
 * pages (each with hreflang alternates) and the legal pages. Gated marketing
 * routes (/projects/*, /coming-soon) are intentionally excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const abs = (path: string) => `${siteConfig.url}${path}`;

  const languages = {
    en: abs("/en"),
    de: abs("/de"),
    "x-default": abs("/en"),
  };

  return [
    {
      url: abs("/en"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: abs("/de"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    { url: abs("/privacy-policy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: abs("/terms"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
