# Miraheights — Coming Soon

A polished, responsive **Coming Soon** landing page for **Miraheights**, a DubaiHaus
off-plan real-estate launch. Built with **Next.js (App Router) + TypeScript +
Tailwind CSS**, with a contact/registration form wired to a provider-agnostic
email backend (SMTP / Resend / SendGrid).

The structure is intentionally modular so this can grow into the full project
website later.

## Tech stack

- **Next.js 14** (App Router, `src/` directory)
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
    layout.tsx              # Root layout, fonts, metadata
    page.tsx                # Coming-soon landing page (root route "/")
    globals.css             # Tailwind + base styles
    api/contact/route.ts    # POST endpoint for the contact form
  components/
    ContactForm.tsx         # Client form: loading / success / error states
    Logo.tsx                # Miraheights wordmark
    FeatureCard.tsx         # Supporting-section card
  lib/
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
- **Email:** subject `New Miraheights Inquiry`, branded HTML body + plain-text
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

## Security notes

- Real credentials live only in `.env.local`, which is git-ignored.
- No environment values are referenced in client components.
- User input is escaped before being placed in the email template.
- Missing required env vars produce clear server-side errors (`EmailConfigError`).
