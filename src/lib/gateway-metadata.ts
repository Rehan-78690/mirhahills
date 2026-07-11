import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { content, type Locale } from "@/lib/gateway-content";

/**
 * Per-locale metadata for the gateway pages: self-referencing canonical,
 * en/de/x-default hreflang alternates, locale-specific Open Graph + Twitter,
 * and index/follow. Titles and descriptions are unique per language.
 */
export function gatewayMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const url = `${siteConfig.url}/${locale}`;

  return {
    // `absolute` bypasses the root layout's "%s | Mira Hills" template so the
    // localized title matches the spec exactly (and avoids a redundant suffix).
    title: { absolute: c.meta.title },
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url,
      siteName: siteConfig.name,
      locale: c.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}
