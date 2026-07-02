import type { Metadata } from "next";
import Link from "next/link";
import { DISCLAIMER_LONG, siteConfig } from "@/lib/site";
import LegalShell, { LegalSection, LegalList } from "@/components/legal/LegalShell";

const title = "Terms & Disclaimer";
const description =
  "Terms of use and disclaimer for this independent Mira Hills information portal. This is not the official Mira Developments or Mira Hills website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { url: `${siteConfig.url}/terms`, title, description, siteName: siteConfig.name },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Disclaimer"
      intro="Please read these terms carefully. By using this website you agree to them. This website is for general informational purposes only."
      updated="2 July 2026"
    >
      <LegalSection heading="Non-affiliation notice">
        <p>{DISCLAIMER_LONG}</p>
        <p>
          The official developer is{" "}
          <a href={siteConfig.officialDeveloper.url} target="_blank" rel="noopener noreferrer nofollow">
            {siteConfig.officialDeveloper.name}
          </a>
          . No claim is made that this is the official developer website.
        </p>
      </LegalSection>

      <LegalSection heading="General information only">
        <p>
          This website is provided for <strong>general informational purposes only</strong>.
          It is not the official Mira Developments or Mira Hills website, and it does not
          represent any official developer entity.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All project names, trademarks, logos, images, plans and materials referenced on
          this website <strong>belong to their respective owners</strong>. They are used
          here only to provide general information about the project. Their use does not
          imply any affiliation with, or endorsement by, the owners of those materials.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy and changes">
        <p>
          Information on this website may be incomplete, out of date, or subject to change
          without notice. Imagery is indicative only. You should <strong>verify all
          information with the official developer</strong> before making any decision or
          commitment.
        </p>
      </LegalSection>

      <LegalSection heading="No professional advice">
        <p>
          Nothing on this website constitutes <strong>legal, financial, investment, tax or
          other professional advice</strong>. You should seek independent professional
          advice before acting on any information found here.
        </p>
      </LegalSection>

      <LegalSection heading="Use at your own discretion">
        <LegalList
          items={[
            "You rely on any information on this website at your own discretion and risk.",
            "We make no warranties or guarantees about the completeness, accuracy or reliability of the information.",
            "To the fullest extent permitted by law, we accept no liability for any loss arising from use of this website.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Enquiries and data">
        <p>
          Details you submit through our forms are used only to respond to your enquiry.
          For more information, see our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
