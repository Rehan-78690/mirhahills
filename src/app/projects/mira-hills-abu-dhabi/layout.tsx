import type { Metadata } from "next";
import { miraHills } from "@/lib/projects/mira-hills";
import { siteConfig } from "@/lib/site";
import ProjectNav from "@/components/project/ProjectNav";
import ProjectFooter from "@/components/project/ProjectFooter";
import StickyCta from "@/components/project/StickyCta";

const title = "Mira Hills Abu Dhabi — Off-Plan Master-Planned Community";
const description =
  "Mira Hills Abu Dhabi by AD Ports Group: a master-planned community on the Abu Dhabi–Dubai corridor with an 18-hole golf course, lagoons, a landmark mall, five-star hotels, schools and a 5M sq ft park. Register your interest with DubaiHaus.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [...miraHills.seo.keywords, ...miraHills.seo.pages.overview.keywords],
  alternates: { canonical: miraHills.basePath },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${miraHills.basePath}`,
    title,
    description,
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-lux-ivory font-sans text-lux-espresso">
      <ProjectNav />
      {children}
      <ProjectFooter />
      <StickyCta />
      {/* spacer so mobile bottom bar never covers footer content */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </div>
  );
}
