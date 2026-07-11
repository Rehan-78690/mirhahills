import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const title = `${siteConfig.name} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: `${siteConfig.name} — ${siteConfig.tagline}`, url: siteConfig.url }],
  creator: `${siteConfig.name} — ${siteConfig.tagline}`,
  publisher: `${siteConfig.name} — ${siteConfig.tagline}`,
  category: "real estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.shortDescription,
    // og:image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b3ab8",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Locale is resolved by middleware and passed via the `x-locale` header so the
  // document language matches the content (defaults to English).
  const lang = (await headers()).get("x-locale") === "de" ? "de" : "en";

  return (
    <html lang={lang} className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
