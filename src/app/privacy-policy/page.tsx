import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import LegalShell, { LegalSection, LegalList } from "@/components/legal/LegalShell";

const title = "Privacy Policy";
const description =
  "How this independent Mira Hills information portal collects, uses and protects the data you submit through contact and enquiry forms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: `${siteConfig.url}/privacy-policy`, title, description, siteName: siteConfig.name },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="This Privacy Policy explains what information this website collects, how it is used, and the choices you have. This is an independent informational portal — please read it alongside our Terms & Disclaimer."
      updated="2 July 2026"
    >
      <LegalSection heading="About this website">
        <p>
          This website ({siteConfig.domain}) is an <strong>independent informational
          portal</strong> created to assist users with general information about the
          Mira Hills project. It is <strong>not</strong> the official Mira Developments
          or Mira Hills website. We are not affiliated with, endorsed by, or operated
          by Mira Developments or any official Mira Hills developer entity. The official
          developer is{" "}
          <a href={siteConfig.officialDeveloper.url} target="_blank" rel="noopener noreferrer nofollow">
            {siteConfig.officialDeveloper.name}
          </a>
          . No claim is made that this is the official developer website.
        </p>
      </LegalSection>

      <LegalSection heading="What data we collect">
        <p>
          We only collect the information you choose to provide through our contact,
          enquiry and brochure-request forms. This may include:
        </p>
        <LegalList
          items={[
            "Your name",
            "Your email address",
            "Your phone / WhatsApp number (if provided)",
            "Your property-type interest and budget range (if selected)",
            "Any message or details you choose to include",
          ]}
        />
        <p>
          We do not ask for sensitive personal information, and we ask that you do not
          submit any through these forms.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your data">
        <LegalList
          items={[
            "To respond to your enquiry and provide the general project information we have available.",
            "To follow up regarding the specific enquiry you submitted.",
          ]}
        />
        <p>
          Your data is used <strong>only to respond to your enquiry</strong>. We do not
          sell your personal information.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention and storage">
        <p>
          Enquiry submissions are stored securely for as long as reasonably necessary to
          handle your enquiry and for our internal record-keeping. We take reasonable
          measures to protect the information you provide.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights — access and deletion">
        <p>
          You may request access to, correction of, or <strong>deletion of your
          data</strong> at any time. To make a request, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> and
          we will action your request within a reasonable timeframe.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and local storage">
        <p>
          We use a small functional cookie (<code>NEXT_LOCALE</code>) to remember your
          language preference (English or German) so we can show you the right version of
          the site. This does not identify you personally.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          For any privacy question or data request, email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. See
          also our{" "}
          <Link href="/terms">Terms &amp; Disclaimer</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
