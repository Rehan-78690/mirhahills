import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Generates /robots.txt. Allows all crawlers, disallows the API surface, and
 * points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin-secure-mira", "/coming-soon"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
