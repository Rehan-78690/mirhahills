# Mira Hills — Coming Soon

A polished, responsive **Coming Soon** landing page for **Mira Hills**, an off-plan
real-estate launch **developed by AD Ports Group** and **featured by DubaiHaus**
(the advisory partner operating this lead-generation page). Built with **Next.js
(App Router) + TypeScript + Tailwind CSS**, with a contact/registration form wired
to a provider-agnostic email backend (SMTP / Resend / SendGrid).

The structure is intentionally modular so this can grow into the full project
website later. Brand, copy, SEO, and FAQ content are centralised in
[`src/lib/site.ts`](src/lib/site.ts) as a single source of truth.

> **Domain:** `mira-hills.com` (set in `src/lib/site.ts` → `siteConfig.url`).

## Tech stack

- **Next.js 15** (App Router, `src/` directory)
- **TypeScript** (strict)
- **Tailwind CSS** — DubaiHaus-inspired palette (`brand` blue, `sky` accents, `gold` highlights)
- **Nodemailer** for SMTP; native `fetch` for Resend / SendGrid (no heavy SDKs)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
#    then edit .env.local with your real values

# 3. Run the dev server
npm run dev          # http://localhost:3000

# Production
npm run build && npm start
```

## Project structure

```
src/
  app/
    layout.tsx              # Root layout, fonts, full SEO metadata, JSON-LD
    page.tsx                # Coming-soon landing page (root route "/")
    globals.css             # Tailwind + base styles
    sitemap.ts              # Generates /sitemap.xml
    robots.ts               # Generates /robots.txt
    opengraph-image.tsx     # Dynamically generated social share image
    api/contact/route.ts    # POST endpoint for the contact form
  components/
    ContactForm.tsx         # Client form: loading / success / error states
    Logo.tsx                # Mira Hills wordmark
    FeatureCard.tsx         # Supporting-section card
    Faq.tsx                 # FAQ accordion (native <details>, crawlable)
    Breadcrumbs.tsx         # Visible breadcrumb trail
    StructuredData.tsx      # JSON-LD: WebSite, RealEstateAgent, Residence, FAQ, Breadcrumb
  lib/
    site.ts                 # Single source of truth: brand, SEO, FAQ, breadcrumbs
    validation.ts           # Server-side input validation + normalization
    email/
      index.ts              # Public API of the email subsystem
      send.ts               # Provider dispatcher + sendContactEmail()
      config.ts             # Env reading / validation helpers
      template.ts           # HTML + plain-text email templates (escaped)
      types.ts              # Shared types + typed errors
      providers/
        smtp.ts             # Nodemailer (used by Zoho)
        resend.ts           # Resend HTTP API
        sendgrid.ts         # SendGrid HTTP API
```

## SEO

SEO is driven entirely from [`src/lib/site.ts`](src/lib/site.ts) (name, domain,
description, keywords, developer/advisor, breadcrumbs, and FAQ content), so there's
one place to update.

| Feature | Where | Notes |
| --- | --- | --- |
| **Meta tags & description** | [`src/app/layout.tsx`](src/app/layout.tsx) | Title template, description, keywords, canonical, `metadataBase`, robots/googleBot directives. |
| **Open Graph / Twitter** | `layout.tsx` + [`opengraph-image.tsx`](src/app/opengraph-image.tsx) | `summary_large_image` card; the 1200×630 share image is generated dynamically (no static asset to maintain). |
| **FAQs** | [`Faq.tsx`](src/components/Faq.tsx) + `site.ts` | Rendered with native `<details>` (crawlable, no-JS) **and** mirrored as `FAQPage` JSON-LD for rich results. |
| **Breadcrumbs** | [`Breadcrumbs.tsx`](src/components/Breadcrumbs.tsx) + `site.ts` | Visible trail **and** `BreadcrumbList` JSON-LD. |
| **Structured data** | [`StructuredData.tsx`](src/components/StructuredData.tsx) | JSON-LD `@graph`: `WebSite`, `RealEstateAgent` (DubaiHaus), `Residence` (developer = AD Ports Group), `BreadcrumbList`, `FAQPage`. |
| **Sitemap** | [`src/app/sitemap.ts`](src/app/sitemap.ts) | Served at `/sitemap.xml`. Add routes here as the site grows. |
| **robots.txt** | [`src/app/robots.ts`](src/app/robots.ts) | Allows all, disallows `/api/`, links the sitemap. |
| **Favicon** | [`public/favicon.svg`](public/favicon.svg) | SVG mark matching the logo. |

> **Before going live:** confirm the production domain in `siteConfig.url`
> (`https://mira-hills.com`). All canonical/OG/sitemap URLs derive from it.

## Email configuration

The email provider is selected with the `EMAIL_PROVIDER` environment variable.
**No email addresses, passwords, or API keys are ever hardcoded** — everything
comes from the environment. See [`.env.example`](./.env.example) for the full list.

### We use Zoho Mail (SMTP)

Zoho is SMTP-based, so keep `EMAIL_PROVIDER=smtp` and fill in the Zoho values:

| Variable      | Zoho value                                                        |
| ------------- | ----------------------------------------------------------------- |
| `SMTP_HOST`   | `smtp.zoho.com` (or `smtppro.zoho.com` for org/custom-domain mail) |
| `SMTP_PORT`   | `465`                                                             |
| `SMTP_SECURE` | `true`                                                            |
| `SMTP_USER`   | your full Zoho mailbox, e.g. `info@dubaihaus.com`                 |
| `SMTP_PASS`   | a Zoho **app-specific password** (Settings → Security → App Passwords) |

> If 2FA is enabled on the Zoho account (recommended), you **must** use an
> app-specific password, not the normal login password.

### Switching providers later

| Provider   | `EMAIL_PROVIDER` | Required key        |
| ---------- | ---------------- | ------------------- |
| Zoho/SMTP  | `smtp`           | `SMTP_*` vars       |
| Resend     | `resend`         | `RESEND_API_KEY`    |
| SendGrid   | `sendgrid`       | `SENDGRID_API_KEY`  |

`CONTACT_TO` and `CONTACT_FROM` are shared across all providers.

## The contact form & API

- **Route:** `POST /api/contact`
- **Fields:** `name` (required), `email` (required), `phone` (optional), `message` (optional)
- **Anti-spam:** a hidden honeypot field (`company`) silently drops bot submissions.
- **Validation:** required-field + format + length checks run server-side in
  [`src/lib/validation.ts`](src/lib/validation.ts); the client mirrors states for UX.
- **Email:** subject `New Mira Hills Inquiry`, branded HTML body + plain-text
  fallback, with all user input HTML-escaped. The lead's email is set as `Reply-To`.

### Responses

| Status | Meaning                                             |
| ------ | --------------------------------------------------- |
| `200`  | `{ ok: true }` — sent (or honeypot silently dropped) |
| `400`  | Invalid JSON body                                   |
| `422`  | Validation failed — `{ ok: false, fields: {...} }`  |
| `500`  | Email service misconfigured (missing env)           |
| `502`  | Provider failed to deliver                          |

Server errors are logged with full detail via `console.error`; the client only
ever receives a generic, safe message — secrets are never exposed.

Every submission is **persisted** (not just emailed) to `data/leads.jsonl` via
[`src/lib/leads.ts`](src/lib/leads.ts), so leads are never lost even if email
delivery fails. Leads are classified as `enquiry`, `brochure` (the enquiry form's
"email me the brochure" checkbox) or `contact` (coming-soon page).

## Project pages (Mira Hills)

The public site is the **Mira Hills, Abu Dhabi** project experience. The root
`/` permanently redirects to the canonical project URL.

| Route | Purpose |
| --- | --- |
| `/projects/mira-hills-abu-dhabi` | Landing (hero, quick facts, overview, location, masterplan, residences, lifestyle, amenities, investment, gallery, FAQ, enquiry) |
| `…/masterplan` | Zones, open space, mobility, utilities, Phase 1.1 |
| `…/amenities` | Grouped amenity collections |
| `…/location` | Abu Dhabi–Dubai corridor |
| `…/residences` | Property types (no invented prices/sizes) |
| `…/investment` | Investment case |
| `/coming-soon` | Original coming-soon page (noindex) |

All content is data-driven from [`src/lib/projects/mira-hills.ts`](src/lib/projects/mira-hills.ts).
Every page has keywords, an FAQ section + `FAQPage` JSON-LD, breadcrumbs and
real-estate structured data. Brochure images map via
[`public/images/mira-hills/MANIFEST.md`](public/images/mira-hills/MANIFEST.md)
(missing images fall back to a warm gradient).

## Admin panel

A simple password-protected dashboard lists all enquiries and brochure requests.

- **Route:** `/admin-secure-mira` (noindex, robots-disallowed)
- **Auth:** set `ADMIN_PASSWORD` (and a random `ADMIN_SESSION_SECRET`) in the
  environment. Login sets an httpOnly, HMAC-signed session cookie — the raw
  password is never stored client-side.
- **Features:** filter by type (all / enquiries / brochure / contact), per-type
  counts, an `emailed` indicator, and **Export CSV** (`/api/admin/export`).

```bash
# .env.local
ADMIN_PASSWORD=choose-a-strong-password
ADMIN_SESSION_SECRET=$(openssl rand -hex 32)
```

> Storage is a local JSON-Lines file (`data/leads.jsonl`, git-ignored). It works
> for self-hosted `next start`; on ephemeral/serverless hosts swap
> `saveLead`/`readLeads` for a database.

## Security notes

- Real credentials live only in `.env.local`, which is git-ignored.
- No environment values are referenced in client components.
- User input is escaped before being placed in the email template.
- Missing required env vars produce clear server-side errors (`EmailConfigError`).
