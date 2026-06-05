import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mirha Hills — Coming Soon | DubaiHaus",
  description:
    "Mirha Hills is an exclusive new off-plan launch coming soon. Register your interest for early access, floor plans, and priority pricing with the DubaiHaus advisory team.",
  keywords: [
    "Mirha Hills",
    "DubaiHaus",
    "off-plan Dubai",
    "new launch",
    "real estate",
    "coming soon",
  ],
  openGraph: {
    title: "Mirha Hills — Coming Soon",
    description:
      "An exclusive new off-plan launch. Register for early access with DubaiHaus.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
