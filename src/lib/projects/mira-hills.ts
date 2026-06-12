/**
 * Mira Hills, Abu Dhabi — project data.
 *
 * Single source of truth for every project page (landing + subpages). Update
 * copy, facts, amenities, residences, FAQs, and image references here; the UI
 * is fully data-driven.
 *
 * IMPORTANT (content rules): no prices, payment plans, handover dates, bedroom
 * counts, sizes, or service charges are asserted unless explicitly provided.
 * Residence "details" use only figures present in the brochure (e.g. plot
 * dimensions). Buyer-facing unknowns are surfaced as "Register for details".
 *
 * Images live under /public/images/mira-hills/ — see images/MANIFEST.md for the
 * brochure-page → filename mapping. Missing images fall back to a warm gradient.
 */

const BASE = "/projects/mira-hills-abu-dhabi";
const IMG = "/images/mira-hills";

export interface QuickFact {
  label: string;
  value: string;
  icon: IconName;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Zone {
  name: string;
  summary: string;
  highlights: string[];
}

export interface AmenityItem {
  name: string;
  description: string;
  stat?: string;
  image?: string;
}

export interface AmenityGroup {
  category: string;
  blurb: string;
  icon: IconName;
  items: AmenityItem[];
}

export interface Residence {
  name: string;
  /** Only brochure-confirmed facts (e.g. plot dimensions). Never invented. */
  detail?: string;
  description: string;
  image?: string;
}

export interface Lifestyle {
  title: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  image: string;
  caption: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export type IconName =
  | "location"
  | "community"
  | "golf"
  | "water"
  | "school"
  | "hotel"
  | "mall"
  | "park"
  | "leisure"
  | "health"
  | "business"
  | "nature"
  | "transit"
  | "investment";

export const miraHills = {
  slug: "mira-hills-abu-dhabi",
  basePath: BASE,
  name: "Mira Hills",
  fullName: "Mira Hills, Abu Dhabi",
  emirate: "Abu Dhabi",
  developer: { name: "AD Ports Group", url: "https://www.adportsgroup.com" },
  masterDeveloper: { name: "Mira Developments", url: "" },
  advisor: { name: "DubaiHaus", url: "https://dubaihaus.com", email: "info@dubaihaus.com" },

  /** Sales line. Used by WhatsApp button + tel links. */
  contact: {
    whatsapp: "971505231194", // digits only, intl format
    phoneDisplay: "+971 50 523 1194",
  },

  tagline: "A New Standard of Urban Living",
  headline: "A landmark master-planned city between Abu Dhabi and Dubai.",
  positioning: [
    "Mira Hills is a fully integrated destination by AD Ports Group — where residences, business, hospitality, education, healthcare and culture come together within one master-planned environment.",
    "Set along the Abu Dhabi–Dubai corridor and designed around connectivity, lifestyle and long-term growth, it is one of the region's most ambitious new off-plan communities.",
  ],

  hero: {
    image: `${IMG}/hero-masterplan-aerial.jpg`,
    eyebrow: "Abu Dhabi · New Off-Plan Launch",
  },

  quickFacts: [
    { label: "Location", value: "Abu Dhabi–Dubai corridor", icon: "location" },
    { label: "Type", value: "Master-planned community", icon: "community" },
    { label: "Signature", value: "18-hole championship golf", icon: "golf" },
    { label: "Waterfront", value: "Lagoons & 8 private beaches", icon: "water" },
    { label: "Education", value: "Schools & universities", icon: "school" },
    { label: "Hospitality", value: "3 five-star hotels", icon: "hotel" },
    { label: "Retail", value: "Landmark mall & boulevards", icon: "mall" },
    { label: "Green", value: "5M sq ft Central Park", icon: "park" },
  ] as QuickFact[],

  stats: [
    { value: "5M sq ft", label: "Central Park" },
    { value: "18-hole", label: "Championship golf course" },
    { value: "8", label: "Private beaches" },
    { value: "3", label: "Five-star hotels" },
    { value: "40 km", label: "Walking trails" },
    { value: "21 km", label: "Cycling paths" },
  ] as Stat[],

  overview: [
    "Mira Hills is conceived as a complete city in miniature — a place to live, work, learn, heal, and unwind without leaving the community. Residences sit alongside universities, a hospital, hotels, retail boulevards, cultural landmarks and vast green open space.",
    "Rather than a single residential tower, it is a master-planned destination organised into distinct zones, woven together by lagoons, parklands, a championship golf course and an extensive walking and cycling network.",
    "For buyers and investors, that mix of uses is the point: lifestyle infrastructure and daily-life anchors are designed to support enduring value across the Abu Dhabi–Dubai corridor.",
  ],

  location: {
    blurb:
      "Mira Hills occupies a strategic position on the coastal corridor between Abu Dhabi and Dubai — two of the region's most dynamic economic centres.",
    points: [
      {
        title: "Between two emirates",
        body: "Positioned to connect Abu Dhabi and Dubai, placing residents within reach of both capitals' business, leisure and aviation hubs.",
      },
      {
        title: "Built for connectivity",
        body: "The masterplan is planned around regional accessibility, with direct access points from existing road networks and an internal mobility loop.",
      },
      {
        title: "Long-term growth corridor",
        body: "The Abu Dhabi–Dubai corridor is a focus for sustained infrastructure and population growth — a strong backdrop for off-plan investment.",
      },
    ],
    image: `${IMG}/location-site-map.jpg`,
  },

  zones: [
    {
      name: "South Zone",
      summary:
        "The civic and arrival gateway — anchored by the district centre, schools, healthcare and the landmark mall, ski and Cube cluster.",
      highlights: [
        "District centre with community hub, library, municipal offices & post office",
        "Two schools and a 200-bed hospital reference",
        "Indoor mall & ski district complex and The Cube (mixed-use)",
        "Central mosque (3,300 worshippers) and neighbourhood mosques",
        "Townhouse community hubs: pool, playground, mini-gym, mini-retail",
      ],
    },
    {
      name: "Central Zone",
      summary:
        "The cultural and waterfront heart — island and lake-view apartments around a central island, lagoons and the UAE Museum.",
      highlights: [
        "Island apartments and lake-view apartments around the central island",
        "UAE Museum, sunken arena and a central community hub (padel, tennis, multi-use)",
        "Cluster lagoons ringed by luxury villas",
        "Public school, sports zone and townhome community hubs",
        "Lake and waterfront leisure frontage",
      ],
    },
    {
      name: "North Zone",
      summary:
        "The resort and golf quarter — luxury villa clusters around semi-private lagoons, the golf course and a luxury retail & hospitality hub.",
      highlights: [
        "Golf course with semi-private landscaped surroundings",
        "North hub for luxury retail and hospitality",
        "Town hub with mosque, health clinic and public school",
        "Cluster lagoons surrounded by luxury villas",
        "Micro-hubs (400m radius) with multi-use and games areas",
      ],
    },
  ] as Zone[],

  residences: [
    { name: "Apartments — Town Centre", description: "Low-rise apartment living woven into the walkable town-centre districts, close to retail, dining and transit.", image: `${IMG}/res-town-centre.jpg` },
    { name: "Island Apartments", description: "Apartments set around the central island and lagoon, with water and parkland outlooks at the heart of the community.", image: `${IMG}/res-island-apartments.jpg` },
    { name: "Lake-View Apartments", description: "Residences in the central zone oriented toward the lakes and waterfront promenade.", image: `${IMG}/res-lake-view.jpg` },
    { name: "Townhomes", description: "Family townhomes distributed across community zones, each near a community hub with pool, playground and mini-retail.", image: `${IMG}/res-townhomes.jpg` },
    { name: "Compact Villas", detail: "30m × 15m plots", description: "Efficient standalone villas for families wanting a private plot within a connected neighbourhood.", image: `${IMG}/res-compact-villas.jpg` },
    { name: "Villas", detail: "35m × 20m plots", description: "Generous family villas set among landscaped streets, lagoons and golf-course greenery.", image: `${IMG}/res-villas.jpg` },
    { name: "Luxury Villas", detail: "40m × 30m plots", description: "Larger luxury villas in premium clusters, many fronting lagoons, fairways or private beaches.", image: `${IMG}/res-luxury-villas.jpg` },
    { name: "Premium & Ultra-Premium Villas", detail: "55m × 40m plots", description: "The collection's flagship residences — expansive plots in the most exclusive waterfront and golf settings.", image: `${IMG}/res-ultra-premium.jpg` },
    { name: "Branded Residences", description: "Branded living tied to the community's five-star hospitality offer, with premium service and amenities.", image: `${IMG}/res-branded.jpg` },
  ] as Residence[],

  /** Buyer-unknown fields rendered as placeholders on the residences page. */
  residenceSpecFields: ["Sizes", "Bedrooms", "Starting price", "Payment plan", "Floor plans", "Availability"],

  amenityGroups: [
    {
      category: "Leisure & Entertainment",
      blurb: "Resort-grade leisure anchors at the centre of daily life.",
      icon: "leisure",
      items: [
        { name: "18-Hole Championship Golf Course", stat: "18 holes", description: "A championship course threading expansive greenery through the masterplan, supporting leisure, hospitality and everyday recreation.", image: `${IMG}/amenity-golf.jpg` },
        { name: "Lagoon Network", description: "A continuous water network shaping movement across the district, connecting key destinations and creating a cooler environment.", image: `${IMG}/amenity-lagoon.jpg` },
        { name: "Indoor Ski Resort", description: "A year-round indoor snow experience forming part of the project's wider leisure and entertainment offer.", image: `${IMG}/amenity-ski.jpg` },
        { name: "Multi-Purpose Stadium", description: "A large-scale venue for sports, entertainment and major public events within the masterplan.", image: `${IMG}/amenity-stadium.jpg` },
        { name: "Family Leisure Center", stat: "5,000 sq ft", description: "A children's destination inside the mall, designed for learning, entertainment and everyday family activity.", image: `${IMG}/amenity-family-leisure.jpg` },
      ],
    },
    {
      category: "Education & Innovation",
      blurb: "A knowledge district built into the community.",
      icon: "school",
      items: [
        { name: "International School", description: "International education integrated into the masterplan for family-oriented living.", image: `${IMG}/amenity-school.jpg` },
        { name: "Eight Kindergartens", stat: "8", description: "Kindergartens distributed across the community supporting early learning close to home.", image: `${IMG}/amenity-kindergarten.jpg` },
        { name: "AI University", description: "Part of an innovation cluster bringing technology, research and academic life into one destination.", image: `${IMG}/amenity-innovation.jpg` },
        { name: "Architecture & Engineering University", description: "A specialist campus within the knowledge-driven innovation cluster.", image: `${IMG}/amenity-innovation.jpg` },
        { name: "Research & Development Center", description: "An R&D anchor completing the innovation cluster alongside the universities.", image: `${IMG}/amenity-innovation.jpg` },
      ],
    },
    {
      category: "Retail & Dining",
      blurb: "From landmark mall to open-air boulevards.",
      icon: "mall",
      items: [
        { name: "Landmark Mall", description: "A large-scale retail and entertainment destination bringing together shopping, dining, leisure and indoor skiing.", image: `${IMG}/amenity-mall.jpg` },
        { name: "Grand Boulevards", description: "A walkable retail and lifestyle destination with luxury shopping and dining in an open-air urban setting.", image: `${IMG}/amenity-boulevards.jpg` },
        { name: "The Cube", description: "A vertical commercial hub for the international real-estate industry — developers, brokerages and investment firms.", image: `${IMG}/amenity-the-cube.jpg` },
        { name: "Luxury Retail", description: "Curated luxury retail concentrated in the community's hubs and town centres.", image: `${IMG}/amenity-boulevards.jpg` },
      ],
    },
    {
      category: "Hospitality",
      blurb: "Five-star living and leisure on your doorstep.",
      icon: "hotel",
      items: [
        { name: "Three Five-Star Hotels", stat: "3", description: "Hospitality destinations integrating branded living, premium service and leisure experiences.", image: `${IMG}/amenity-hotels.jpg` },
        { name: "Five-Star Boutique Hotel", description: "An intimate boutique hospitality address within the masterplan.", image: `${IMG}/amenity-hotels.jpg` },
        { name: "Ultra-Luxury Resort", description: "A flagship resort set among lagoons and golf greenery, anchoring the community's leisure offer.", image: `${IMG}/amenity-resort.jpg` },
      ],
    },
    {
      category: "Nature & Outdoor Living",
      blurb: "Green, walkable and water-led by design.",
      icon: "nature",
      items: [
        { name: "Central Park", stat: "5M sq ft", description: "A vast green landscape forming the natural heart of the community, for recreation, relaxation and everyday outdoor life.", image: `${IMG}/amenity-central-park.jpg` },
        { name: "Urban Forest", description: "A dense landscape of diverse trees introducing shade, biodiversity and a stronger connection to nature.", image: `${IMG}/amenity-urban-forest.jpg` },
        { name: "Eight Private Beaches", stat: "8", description: "Private beaches bringing resort-style leisure and waterfront living to different parts of the masterplan.", image: `${IMG}/amenity-beaches.jpg` },
        { name: "Car-Free Upper City", description: "An elevated, pedestrian-focused layer creating a safer, quieter and more sustainable environment.", image: `${IMG}/amenity-car-free.jpg` },
      ],
    },
    {
      category: "Wellness & Healthcare",
      blurb: "Care embedded across the community.",
      icon: "health",
      items: [
        { name: "Hospital", description: "A full hospital reference within the masterplan supporting residents' healthcare needs.", image: `${IMG}/amenity-healthcare.jpg` },
        { name: "Healthcare Centres", description: "Medium health centres and clinics distributed across the zones for everyday care.", image: `${IMG}/amenity-healthcare.jpg` },
        { name: "Neighbourhood Clinics", description: "Small healthcare centres paired with neighbourhood community hubs for convenient access.", image: `${IMG}/amenity-healthcare.jpg` },
      ],
    },
    {
      category: "Business & Commercial",
      blurb: "Work and enterprise within the masterplan.",
      icon: "business",
      items: [
        { name: "The Cube — Commercial Hub", description: "A vertical commercial address for the international real-estate sector.", image: `${IMG}/amenity-the-cube.jpg` },
        { name: "Offices", description: "Dedicated office space integrated into the town hubs and district centres.", image: `${IMG}/amenity-the-cube.jpg` },
        { name: "Town & District Hubs", description: "Mixed-use hubs combining retail, services and workplaces across the community.", image: `${IMG}/amenity-boulevards.jpg` },
      ],
    },
  ] as AmenityGroup[],

  lifestyle: [
    { title: "Lagoon Living", description: "A continuous lagoon network brings cool, swimmable water to the heart of the community — with promenades, beaches and waterfront homes.", image: `${IMG}/lifestyle-lagoon.jpg` },
    { title: "Championship Golf", description: "An 18-hole championship course frames the northern quarter, with fairway and clubhouse living.", image: `${IMG}/lifestyle-golf.jpg` },
    { title: "Car-Free Town Centres", description: "Elevated, pedestrian-first town centres put cafés, retail and green space a short walk from home.", image: `${IMG}/lifestyle-car-free.jpg` },
    { title: "Private Beaches & Parks", description: "Eight private beaches and a 5M sq ft Central Park anchor a genuinely outdoor, resort-style daily life.", image: `${IMG}/lifestyle-beaches.jpg` },
  ] as Lifestyle[],

  masterplan: {
    image: `${IMG}/masterplan-overview.jpg`,
    intro:
      "Mira Hills is organised as a linear master-planned city, structured into three zones along a central spine of lagoons, parks and a championship golf course. Open space transitions from highly public parks into semi-public buffers and private waterfront clusters.",
    images: {
      south: `${IMG}/masterplan-zone-south.jpg`,
      central: `${IMG}/masterplan-zone-central.jpg`,
      north: `${IMG}/masterplan-zone-north.jpg`,
      openSpace: `${IMG}/masterplan-open-space.jpg`,
      walking: `${IMG}/mobility-walking.jpg`,
      cycling: `${IMG}/mobility-cycling.jpg`,
      bus: `${IMG}/mobility-bus.jpg`,
      utilities: `${IMG}/utilities.jpg`,
    },
    openSpace: {
      intro:
        "The open-space strategy moves from highly public areas into semi-public golf-course buffers and then private villa lagoons and fairways. Every resident is planned to be within a 350m walk of park space.",
      breakdown: [
        { label: "Public open space", value: "1,070,080 m²", note: "23% of site" },
        { label: "Semi-public space", value: "206,610 m²", note: "4% of site" },
        { label: "Private open space", value: "515,300 m²", note: "11% of site" },
      ],
      allocation: [
        "Programmed sports & recreation",
        "Family-oriented waterfront zones",
        "Public lakes for leisure",
        "Public lagoon for watersports",
        "Play facilities within a 350m radius",
      ],
    },
    mobility: [
      { title: "Walking Trails", stat: "40 km", body: "Walking trails permeate the parks and open spaces, connecting to the perimeter loop and main nodes." },
      { title: "Cycling Paths", stat: "21 km", body: "Dedicated (3m) and shared (2m) cycling paths wind through the masterplan, linking sports areas, town hubs and lakes." },
      { title: "Loop Bus Route", stat: "400m", body: "A simple loop bus route planned so that 90% of residents are within a 400m walk of a bus stop." },
    ],
    utilities: [
      "2 × potable water pumping stations (40m × 40m)",
      "Primary substation plot (60m × 85m) + 51 pocket substations",
      "2 × sewerage pumping stations (30m × 65m)",
      "2 × irrigation tanks & pumping stations (60m × 60m)",
      "4 × storm lakes (21,000–31,600 m²; freeboard TBC by engineering)",
    ],
  },

  phase11: {
    intro:
      "Phase 1.1 focuses on the western, first-delivery portion of the masterplan — pairing the earliest residential plots with key civic anchors so the community is functional from day one.",
    anchors: [
      "Regional mall",
      "Hospital",
      "University campus",
      "Indoor sports centre",
      "Healthcare centre",
      "District centre",
      "Private school",
      "Youth housing & offices",
    ],
    apartments: { count: 28, far: "3.06", totalGfa: "≈ 244,245 m²", totalPlot: "≈ 79,819 m²" },
    villas: { count: 5, far: "0.8", totalGfa: "≈ 111,891 m²", totalPlot: "≈ 139,866 m²" },
  },

  investment: [
    { title: "Landmark master-planned destination", body: "One of the region's most ambitious integrated communities, backed by AD Ports Group — scale that supports long-term placemaking and value." },
    { title: "Strategic Abu Dhabi–Dubai corridor", body: "A position between two emirates on a corridor targeted for sustained infrastructure and population growth." },
    { title: "True mixed-use community", body: "Residential, education, healthcare, hospitality, retail and commercial uses in one place — diversified demand drivers, not a single-asset bet." },
    { title: "Major lifestyle anchors", body: "Championship golf, a landmark mall, five-star hotels, lagoons, private beaches and a 5M sq ft park underpin desirability and rental appeal." },
    { title: "Family-community appeal", body: "Schools, universities, healthcare and abundant outdoor space make it a long-hold, end-user-led destination." },
    { title: "Off-plan, early-access timing", body: "A pre-launch entry point with phased delivery beginning in the first-delivery western quarter (Phase 1.1)." },
  ],

  gallery: [
    { image: `${IMG}/gallery-aerial.jpg`, caption: "Masterplan aerial" },
    { image: `${IMG}/gallery-villa-clusters.jpg`, caption: "North luxury villa clusters" },
    { image: `${IMG}/gallery-golf-town-hub.jpg`, caption: "Golf course & town hub" },
    { image: `${IMG}/gallery-central-island.jpg`, caption: "Central island" },
    { image: `${IMG}/gallery-resort.jpg`, caption: "Ultra-luxury resort" },
    { image: `${IMG}/gallery-lagoon-promenade.jpg`, caption: "Lagoon promenade" },
    { image: `${IMG}/gallery-inner-lagoon.jpg`, caption: "Inner lagoon villas" },
    { image: `${IMG}/gallery-town-centre.jpg`, caption: "Car-free town centre" },
  ] as GalleryItem[],

  faqs: [
    { question: "Where is Mira Hills located?", answer: "Mira Hills is in Abu Dhabi, positioned on the coastal corridor between Abu Dhabi and Dubai. The masterplan is planned around regional connectivity, with access from existing road networks." },
    { question: "Who is the developer of Mira Hills?", answer: "Mira Hills is developed by AD Ports Group, with Mira Developments. DubaiHaus is the advisory partner featuring the project and managing buyer registrations." },
    { question: "What types of property are available at Mira Hills?", answer: "The masterplan includes apartments (town-centre, island and lake-view), townhomes, and a full villa range — compact, standard, luxury, and premium/ultra-premium villas — plus branded residences." },
    { question: "What amenities will Mira Hills offer?", answer: "An 18-hole championship golf course, a lagoon network, a landmark mall with indoor ski, three five-star hotels, eight private beaches, a 5M sq ft Central Park, an international school, universities, a hospital, and a UAE museum, among others." },
    { question: "Is Mira Hills a good investment?", answer: "It is positioned for long-term growth: a large mixed-use community on the Abu Dhabi–Dubai corridor with diversified lifestyle, education, healthcare, hospitality and retail anchors that support enduring end-user and rental demand." },
    { question: "What are the prices and payment plans?", answer: "Pricing, payment plans and handover dates have not yet been released for this pre-launch project. Register your interest to receive launch pricing, floor plans and availability as soon as they are announced." },
    { question: "When does Mira Hills launch?", answer: "The official launch date will be announced shortly. Phase 1.1 covers the first-delivery western portion of the masterplan. Register to be among the first to receive launch information." },
    { question: "How do I register my interest in Mira Hills?", answer: "Complete the enquiry form on this page with your details and preferred property type. A DubaiHaus property consultant will personally reach out with priority access and full project information." },
  ] as Faq[],

  /**
   * Per-page SEO: shared base keywords plus page-specific keywords and FAQs.
   * Every page renders an FAQ section + FAQPage schema for richer search results.
   */
  seo: {
    keywords: [
      "Mira Hills",
      "Mira Hills Abu Dhabi",
      "Mira Hills project",
      "Mira Hills AD Ports Group",
      "Abu Dhabi off-plan projects",
      "master-planned community Abu Dhabi",
      "Abu Dhabi Dubai corridor property",
      "off-plan Abu Dhabi",
      "DubaiHaus",
    ],
    pages: {
      overview: {
        keywords: ["Mira Hills off-plan", "Mira Hills villas", "Mira Hills apartments", "Mira Hills register interest"],
        faqs: [] as Faq[], // overview uses the full `faqs` set above
      },
      masterplan: {
        keywords: ["Mira Hills masterplan", "Mira Hills zones", "Mira Hills open space", "Mira Hills phase 1.1", "Mira Hills mobility"],
        faqs: [
          { question: "How is the Mira Hills masterplan organised?", answer: "Mira Hills is a linear master-planned city structured into three zones — South, Central and North — along a central spine of lagoons, parks and an 18-hole championship golf course." },
          { question: "How much open space does Mira Hills have?", answer: "Around 1,070,080 m² of public open space (23% of the site), plus semi-public golf buffers and private villa lagoons. Every resident is planned to be within a 350m walk of park space." },
          { question: "What mobility options are planned at Mira Hills?", answer: "40 km of walking trails and 21 km of dedicated and shared cycling paths, plus a loop bus route planned so 90% of residents are within a 400m walk of a stop." },
          { question: "What is Phase 1.1 at Mira Hills?", answer: "Phase 1.1 is the first-delivery western portion of the masterplan, pairing the earliest apartment and villa plots with anchors like the regional mall, hospital, university campus and schools." },
        ] as Faq[],
      },
      amenities: {
        keywords: ["Mira Hills amenities", "Mira Hills golf course", "Mira Hills lagoon", "Mira Hills mall", "Mira Hills private beaches", "Mira Hills hotels"],
        faqs: [
          { question: "Does Mira Hills have a golf course?", answer: "Yes — an 18-hole championship golf course anchors the community, threading expansive greenery through the masterplan and supporting leisure and hospitality." },
          { question: "What family amenities does Mira Hills offer?", answer: "An international school, eight kindergartens, universities and an R&D centre, plus a 5,000 sq ft family leisure centre, a 5M sq ft Central Park and eight private beaches." },
          { question: "Does Mira Hills have a shopping mall?", answer: "Yes — a landmark mall with retail, dining, leisure and indoor skiing, alongside open-air grand boulevards for luxury shopping." },
          { question: "How many hotels and beaches are at Mira Hills?", answer: "Three five-star hotels and an ultra-luxury resort, plus eight private beaches bringing resort-style waterfront leisure across the masterplan." },
        ] as Faq[],
      },
      location: {
        keywords: ["Mira Hills location", "Abu Dhabi Dubai corridor", "Mira Hills map", "off-plan between Abu Dhabi and Dubai"],
        faqs: [
          { question: "Where exactly is Mira Hills located?", answer: "Mira Hills is in Abu Dhabi, positioned on the coastal corridor between Abu Dhabi and Dubai." },
          { question: "Is Mira Hills between Abu Dhabi and Dubai?", answer: "Yes — it is planned as a landmark development connecting the two emirates, placing residents within reach of both capitals' business, leisure and aviation hubs." },
          { question: "How do you access Mira Hills?", answer: "The masterplan is planned around regional accessibility, with direct access points from existing road networks and an internal mobility loop with a community bus route." },
          { question: "Why is the Mira Hills location good for investment?", answer: "The Abu Dhabi–Dubai corridor is a focus for sustained infrastructure and population growth, providing a strong long-term backdrop for off-plan investment." },
        ] as Faq[],
      },
      residences: {
        keywords: ["Mira Hills villas", "Mira Hills apartments", "Mira Hills townhomes", "luxury villas Abu Dhabi", "Mira Hills branded residences", "Mira Hills floor plans"],
        faqs: [
          { question: "What property types are available at Mira Hills?", answer: "Town-centre, island and lake-view apartments; townhomes; and a full villa range — compact, standard, luxury and premium/ultra-premium — plus branded residences." },
          { question: "What are the villa plot sizes at Mira Hills?", answer: "Brochure plots are shown as compact villas 30m × 15m, villas 35m × 20m, luxury villas 40m × 30m, and premium/ultra-premium villas 55m × 40m." },
          { question: "What are Mira Hills prices and floor plans?", answer: "Pricing, sizes, bedroom counts and floor plans have not yet been released for this pre-launch project. Register your interest to receive them as soon as they are announced." },
          { question: "Are branded residences available at Mira Hills?", answer: "Yes — branded residences tied to the community's five-star hospitality offer are part of the masterplan." },
        ] as Faq[],
      },
      investment: {
        keywords: ["Mira Hills investment", "Abu Dhabi off-plan investment", "invest in Abu Dhabi property", "Mira Hills ROI"],
        faqs: [
          { question: "Is Mira Hills a good investment?", answer: "It is positioned for long-term value: a large mixed-use community on the Abu Dhabi–Dubai corridor with diversified lifestyle, education, healthcare, hospitality and retail anchors supporting end-user and rental demand." },
          { question: "Who is the developer of Mira Hills?", answer: "Mira Hills is developed by AD Ports Group, with Mira Developments. DubaiHaus is the advisory partner managing buyer registrations." },
          { question: "What are the payment plans and prices?", answer: "Payment plans and pricing have not yet been released for this pre-launch project. Register your interest to receive launch pricing and availability first." },
          { question: "What makes Mira Hills different from other Abu Dhabi projects?", answer: "Its scale and mix: a complete master-planned city — residences, universities, a hospital, hotels, retail and a championship golf course — on a strategic growth corridor, rather than a single-asset development." },
        ] as Faq[],
      },
    },
  },

  /** Cross-links surfaced as internal SEO links in the project footer. */
  internalLinks: [
    { label: "Abu Dhabi off-plan projects", href: "/projects" },
    { label: "Luxury villas in Abu Dhabi", href: `${BASE}/residences` },
    { label: "Mira Hills masterplan", href: `${BASE}/masterplan` },
    { label: "Investment in Mira Hills", href: `${BASE}/investment` },
  ],

  subpages: [
    { label: "Overview", href: BASE },
    { label: "Masterplan", href: `${BASE}/masterplan` },
    { label: "Amenities", href: `${BASE}/amenities` },
    { label: "Location", href: `${BASE}/location` },
    { label: "Residences", href: `${BASE}/residences` },
    { label: "Investment", href: `${BASE}/investment` },
  ],
} as const;

export type MiraHills = typeof miraHills;
