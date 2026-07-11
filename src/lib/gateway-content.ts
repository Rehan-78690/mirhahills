/**
 * Bilingual (EN/DE) content for the independent Mira Hills information gateway.
 *
 * Single source of truth for every visible string, SEO field and FAQ entry on
 * the /en and /de pages. The FAQ JSON-LD is built from the SAME `faq.items`
 * arrays below, so structured data can never drift from the visible content.
 *
 * IMPORTANT (legal): this site is an INDEPENDENT informational portal. Copy here
 * must never imply official affiliation, and must not assert unconfirmed prices,
 * dates, availability or floor plans. Use "expected" / "to be announced" /
 * "subject to official confirmation" wording only.
 */

import { siteConfig } from "@/lib/site";

export type Locale = "en" | "de";
export const LOCALES: Locale[] = ["en", "de"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * The official developer's website. Reuses the verified URL from site config;
 * an env var can override it without a code change. Never invented here.
 */
export const OFFICIAL_DEVELOPER_URL =
  process.env.NEXT_PUBLIC_MIRA_OFFICIAL_URL || siteConfig.officialDeveloper.url;
export const OFFICIAL_DEVELOPER_NAME = siteConfig.officialDeveloper.name;

/**
 * External DubaiHaus destinations (advisory / detailed project guides).
 * Both the homepage and the project guide are locale-specific so German
 * visitors always land on the German version of DubaiHaus.
 */
export const DUBAIHAUS = {
  main: {
    en: "https://www.dubaihaus.com/en",
    de: "https://www.dubaihaus.com/de",
  },
  project: {
    en: "https://www.dubaihaus.com/en/projects/mira-hills",
    de: "https://www.dubaihaus.com/de/projects/mira-hills",
  },
} as const;

export interface FaqItem {
  q: string;
  a: string;
}

export interface InfoCategory {
  title: string;
  body: string;
}

export interface GatewayContent {
  htmlLang: string;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  eyebrow: string;
  h1: string;
  heroSub: string;
  cta: { project: string; dubaihaus: string; official: string };
  disclaimer: string;
  info: { heading: string; intro: string; categories: InfoCategory[] };
  topics: { heading: string; body: string; note: string; chips: string[] };
  faq: { heading: string; items: FaqItem[] };
  footer: {
    project: string;
    dubaihaus: string;
    official: string;
    privacy: string;
    terms: string;
    contact: string;
    rights: string;
  };
  ui: { language: string; other: string; externalOfficial: string };
}

const SEARCH_CHIPS = [
  "Mira Hills",
  "Mirahills",
  "Mira Abu Dhabi",
  "Mira Hills Abu Dhabi",
  "Mira Hills Resort",
  "Mira Residences",
  "Mira Residence 1 masterplan",
  "Mira Residence 2 masterplan",
  "Mirabella 3",
  "Mira Verde floor plans",
];

export const content: Record<Locale, GatewayContent> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    meta: {
      title: "Mira Hills Abu Dhabi Pre-Launch Information | Independent Guide",
      description:
        "Independent Mira Hills Abu Dhabi pre-launch information covering the masterplan, residences, floor-plan updates and project announcements. View the detailed Mira Hills guide on DubaiHaus.",
      keywords: [
        "Mira Hills",
        "Mira Hills Abu Dhabi",
        "Mirahills",
        "Mira Abu Dhabi",
        "Mira Hills pre launch",
        "Mira Hills masterplan",
        "Mira Hills residences",
        "Mira Hills Resort",
        "Mira Residences",
        "Mira Residence 1 masterplan",
        "Mira Residence 2 masterplan",
        "Mirabella 3",
        "Mira Verde floor plans",
        "Abu Dhabi real estate",
      ],
      ogTitle: "Mira Hills Abu Dhabi Pre-Launch Information",
      ogDescription:
        "Independent project information and verified update links for Mira Hills Abu Dhabi.",
    },
    eyebrow: "Independent Information Portal",
    h1: "Mira Hills Abu Dhabi – Pre-Launch Information and Independent Project Guide",
    heroSub:
      "Explore independent pre-launch information about Mira Hills Abu Dhabi, including the masterplan, residences, location, floor-plan updates and future project announcements. Detailed project information is available through DubaiHaus.",
    cta: {
      project: "View Mira Hills on DubaiHaus",
      dubaihaus: "Visit DubaiHaus",
      official: "Official Developer Website",
    },
    disclaimer:
      "Independent informational portal. This website is not affiliated with, endorsed by, or operated by Mira Developments or the official Mira Hills developer. For official project information, please visit the developer’s official website.",
    info: {
      heading: "What you can explore",
      intro:
        "This independent portal summarises publicly available pre-launch information and points you to the detailed Mira Hills guide on DubaiHaus. Specifications and timelines are expected and subject to official confirmation.",
      categories: [
        {
          title: "Pre-launch updates",
          body: "Independent updates as Mira Hills Abu Dhabi progresses toward launch. Timelines are expected and subject to official confirmation.",
        },
        {
          title: "Location & Abu Dhabi context",
          body: "Background on the wider Abu Dhabi area and how the project is positioned, compiled from publicly available information.",
        },
        {
          title: "Masterplan information",
          body: "General masterplan concepts discussed for the community. Final plans should be verified against official developer announcements.",
        },
        {
          title: "Residences & property types",
          body: "Overview of the residence categories associated with the project. Specifications are to be announced and subject to change.",
        },
        {
          title: "Floor-plan updates",
          body: "Floor plans are shared through DubaiHaus when officially released. None are confirmed until announced by the developer.",
        },
        {
          title: "Developer announcements",
          body: "Pointers to the official developer’s website so you can confirm every detail at the authoritative source.",
        },
        {
          title: "Register interest & consultation",
          body: "Register your interest or request an independent consultation through DubaiHaus in English or German.",
        },
      ],
    },
    topics: {
      heading: "Common Mira Hills search topics",
      body: "People researching the wider Mira Hills and Mira Abu Dhabi development may also search for terms such as Mira Residences, Mira Hills Resort, Mira Residence masterplans, Mirabella 3 or Mira Verde floor plans.",
      note: "Project names, phases and specifications should always be verified against official developer announcements. Related or alternative names are not claimed here to be officially part of Mira Hills unless confirmed by the developer.",
      chips: SEARCH_CHIPS,
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "What is Mira Hills Abu Dhabi?",
          a: "Mira Hills Abu Dhabi is an off-plan master-planned community. This website is an independent information portal that summarises publicly available pre-launch information and links to a more detailed guide on DubaiHaus.",
        },
        {
          q: "Is this the official Mira Hills website?",
          a: "No. This is an independent informational portal. It is not affiliated with, endorsed by, or operated by Mira Developments or the official Mira Hills developer. For official information, please visit the developer’s official website.",
        },
        {
          q: "Where can I find Mira Hills pre-launch information?",
          a: "A detailed independent guide is available on DubaiHaus in both English and German. You can also confirm details directly on the official developer’s website.",
        },
        {
          q: "Are Mira Hills floor plans and prices available?",
          a: "Floor plans, prices, availability and payment plans are not confirmed until officially released. Any figures should be treated as expected and subject to official confirmation. DubaiHaus updates its guide when verified details are released.",
        },
        {
          q: "Where can I find the official developer information?",
          a: "Use the “Official Developer Website” link on this page. It is the authoritative source for official project information.",
        },
        {
          q: "Can DubaiHaus provide information in German?",
          a: "Yes. DubaiHaus offers a German-language Mira Hills project page in addition to the English version.",
        },
        {
          q: "Are Mira Residences, Mirabella 3 and Mira Verde part of Mira Hills?",
          a: "These terms may appear in searches connected with developments in the wider area, but project names, phases and relationships must be confirmed through official developer announcements. DubaiHaus will update its independent project page when verified information becomes available.",
        },
      ],
    },
    footer: {
      project: "Mira Hills on DubaiHaus",
      dubaihaus: "DubaiHaus",
      official: "Official Developer Website",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      contact: "Contact",
      rights: "Independent information portal.",
    },
    ui: {
      language: "Language",
      other: "Deutsch",
      externalOfficial: "External official source",
    },
  },

  de: {
    htmlLang: "de",
    ogLocale: "de_DE",
    meta: {
      title: "Mira Hills Abu Dhabi Pre-Launch | Unabhängiger Projektleitfaden",
      description:
        "Unabhängige Informationen zum Mira Hills Abu Dhabi Pre-Launch, Masterplan, Residenzen, Grundrissen und Projektneuigkeiten. Details finden Sie bei DubaiHaus.",
      keywords: [
        "Mira Hills",
        "Mira Hills Abu Dhabi",
        "Mira Abu Dhabi",
        "Mira Hills Pre-Launch",
        "Mira Hills Masterplan",
        "Mira Hills Residenzen",
        "Mira Hills Grundrisse",
        "Mira Residences",
        "Mira Hills Resort",
        "Mira Verde Grundrisse",
        "Immobilien Abu Dhabi",
      ],
      ogTitle: "Mira Hills Abu Dhabi Pre-Launch-Informationen",
      ogDescription:
        "Unabhängige Projektinformationen und Links zu bestätigten Updates über Mira Hills Abu Dhabi.",
    },
    eyebrow: "Unabhängiges Informationsportal",
    h1: "Mira Hills Abu Dhabi – Pre-Launch-Informationen und unabhängiger Projektleitfaden",
    heroSub:
      "Entdecken Sie unabhängige Pre-Launch-Informationen zu Mira Hills Abu Dhabi, darunter Masterplan, Residenzen, Standort, Grundriss-Updates und zukünftige Projektankündigungen. Detaillierte Projektinformationen finden Sie bei DubaiHaus.",
    cta: {
      project: "Mira Hills bei DubaiHaus ansehen",
      dubaihaus: "DubaiHaus besuchen",
      official: "Offizielle Entwickler-Website",
    },
    disclaimer:
      "Unabhängiges Informationsportal. Diese Website ist weder mit Mira Developments noch mit dem offiziellen Entwickler von Mira Hills verbunden, von diesen bestätigt oder betrieben. Offizielle Projektinformationen finden Sie auf der offiziellen Website des Entwicklers.",
    info: {
      heading: "Das können Sie entdecken",
      intro:
        "Dieses unabhängige Portal fasst öffentlich verfügbare Pre-Launch-Informationen zusammen und verweist auf den ausführlichen Mira-Hills-Leitfaden bei DubaiHaus. Spezifikationen und Zeitpläne sind zu erwarten und vorbehaltlich offizieller Bestätigung.",
      categories: [
        {
          title: "Pre-Launch-Updates",
          body: "Unabhängige Updates, während Mira Hills Abu Dhabi auf den Launch zusteuert. Zeitpläne sind zu erwarten und vorbehaltlich offizieller Bestätigung.",
        },
        {
          title: "Standort & Abu-Dhabi-Kontext",
          body: "Hintergründe zur weiteren Region Abu Dhabi und zur Positionierung des Projekts, zusammengestellt aus öffentlich verfügbaren Informationen.",
        },
        {
          title: "Masterplan-Informationen",
          body: "Allgemeine Masterplan-Konzepte, die für die Community diskutiert werden. Endgültige Pläne sollten anhand offizieller Ankündigungen überprüft werden.",
        },
        {
          title: "Residenzen & Immobilientypen",
          body: "Überblick über die dem Projekt zugeordneten Residenz-Kategorien. Spezifikationen werden noch bekannt gegeben und können sich ändern.",
        },
        {
          title: "Grundriss-Updates",
          body: "Grundrisse werden über DubaiHaus geteilt, sobald sie offiziell veröffentlicht sind. Nichts ist bestätigt, bevor der Entwickler es ankündigt.",
        },
        {
          title: "Entwickler-Ankündigungen",
          body: "Verweise auf die offizielle Website des Entwicklers, damit Sie jedes Detail an der maßgeblichen Quelle bestätigen können.",
        },
        {
          title: "Interesse & Beratung",
          body: "Registrieren Sie Ihr Interesse oder fordern Sie eine unabhängige Beratung über DubaiHaus an – auf Englisch oder Deutsch.",
        },
      ],
    },
    topics: {
      heading: "Häufige Mira-Hills-Suchbegriffe",
      body: "Bei der Recherche zum übergeordneten Projekt Mira Hills beziehungsweise Mira Abu Dhabi werden häufig auch Begriffe wie Mira Residences, Mira Hills Resort, Mira Residence Masterplan, Mirabella 3 oder Mira Verde Grundrisse verwendet.",
      note: "Projektnamen, Phasen und Spezifikationen sollten stets anhand offizieller Entwicklerankündigungen überprüft werden. Verwandte oder alternative Namen werden hier nicht als offiziell zu Mira Hills gehörend dargestellt, sofern nicht vom Entwickler bestätigt.",
      chips: SEARCH_CHIPS,
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      items: [
        {
          q: "Was ist Mira Hills Abu Dhabi?",
          a: "Mira Hills Abu Dhabi ist eine Off-Plan-Masterplan-Community. Diese Website ist ein unabhängiges Informationsportal, das öffentlich verfügbare Pre-Launch-Informationen zusammenfasst und auf einen ausführlicheren Leitfaden bei DubaiHaus verweist.",
        },
        {
          q: "Ist dies die offizielle Mira-Hills-Website?",
          a: "Nein. Dies ist ein unabhängiges Informationsportal. Es ist weder mit Mira Developments noch mit dem offiziellen Entwickler von Mira Hills verbunden, von diesen bestätigt oder betrieben. Offizielle Informationen finden Sie auf der offiziellen Website des Entwicklers.",
        },
        {
          q: "Wo finde ich Pre-Launch-Informationen zu Mira Hills?",
          a: "Ein ausführlicher unabhängiger Leitfaden ist bei DubaiHaus auf Englisch und Deutsch verfügbar. Details können Sie auch direkt auf der offiziellen Website des Entwicklers bestätigen.",
        },
        {
          q: "Sind Grundrisse und Preise für Mira Hills verfügbar?",
          a: "Grundrisse, Preise, Verfügbarkeit und Zahlungspläne sind erst nach offizieller Veröffentlichung bestätigt. Alle Angaben sind als erwartet und vorbehaltlich offizieller Bestätigung zu verstehen. DubaiHaus aktualisiert seinen Leitfaden, sobald bestätigte Details veröffentlicht werden.",
        },
        {
          q: "Wo finde ich die offiziellen Entwicklerinformationen?",
          a: "Nutzen Sie den Link „Offizielle Entwickler-Website“ auf dieser Seite. Sie ist die maßgebliche Quelle für offizielle Projektinformationen.",
        },
        {
          q: "Kann DubaiHaus Informationen auf Deutsch bereitstellen?",
          a: "Ja. DubaiHaus bietet zusätzlich zur englischen Version eine deutschsprachige Mira-Hills-Projektseite an.",
        },
        {
          q: "Gehören Mira Residences, Mirabella 3 und Mira Verde zu Mira Hills?",
          a: "Diese Begriffe können in Suchanfragen im Zusammenhang mit Entwicklungen in der weiteren Umgebung auftauchen, aber Projektnamen, Phasen und Beziehungen müssen durch offizielle Entwicklerankündigungen bestätigt werden. DubaiHaus aktualisiert seine unabhängige Projektseite, sobald bestätigte Informationen vorliegen.",
        },
      ],
    },
    footer: {
      project: "Mira Hills bei DubaiHaus",
      dubaihaus: "DubaiHaus",
      official: "Offizielle Entwickler-Website",
      privacy: "Datenschutz",
      terms: "AGB",
      contact: "Kontakt",
      rights: "Unabhängiges Informationsportal.",
    },
    ui: {
      language: "Sprache",
      other: "English",
      externalOfficial: "Externe offizielle Quelle",
    },
  },
};

/** The opposite locale — used by the language switcher. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "de" : "en";
}
