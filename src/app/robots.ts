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
      // Gated / non-public routes: keep crawlers on the /en and /de gateways.
      disallow: ["/api/", "/admin-secure-mira", "/coming-soon", "/projects", "/offline"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
