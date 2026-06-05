import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Generates /sitemap.xml. Add entries here as new routes are introduced so the
 * sitemap grows with the site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
