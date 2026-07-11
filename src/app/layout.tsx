import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Mira Hills Abu Dhabi – Real Estate Project",
  description:
    "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
  keywords: [
    "Mira Hills",
    "Mira Hills Abu Dhabi",
    "Mira Developments",
    "Abu Dhabi real estate",
    "luxury villas",
    "Al Mamoura",
  ],
  applicationName: "Mira Hills",
  category: "real estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mira Hills Abu Dhabi – Real Estate Project",
    description:
      "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
    url: siteConfig.url,
    siteName: "Mira Hills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira Hills Abu Dhabi – Real Estate Project",
    description:
      "Discover Mira Hills in Abu Dhabi – a premier community by Mira Developments. Get project insights and details.",
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
  // Additional link tags for SEO hints (author, publisher)
  other: {
    "rel:author": "https://www.dubaihaus.com/en/",
    "rel:publisher": "https://www.dubaihaus.com/en/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}