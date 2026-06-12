import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { miraHills } from "@/lib/projects/mira-hills";

/**
 * Generates /sitemap.xml. Add entries here as new routes are introduced so the
 * sitemap grows with the site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const abs = (path: string) => `${siteConfig.url}${path}`;

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: abs("/projects"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    // Mira Hills landing + subpages (Overview, Masterplan, Amenities, …).
    ...miraHills.subpages.map((s) => ({
      url: abs(s.href),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: s.href === miraHills.basePath ? 0.9 : 0.7,
    })),
  ];
}
