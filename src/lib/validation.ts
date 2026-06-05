import type { ContactSubmission } from "./email/types";

export interface ValidationResult {
  ok: boolean;
  /** Field-level error messages, keyed by field name. */
  errors: Record<string, string>;
  /** Cleaned, trimmed values — only present when ok is true. */
  data?: ContactSubmission;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 200, phone: 40, message: 2000 } as const;

/** A loose phone matcher: digits, spaces, and + ( ) - separators. */
const PHONE_RE = /^[+()\d][\d\s()\-.]{4,}$/;

/**
 * Validate and normalize a raw contact-form payload.
 *
 * Required: name, email. Optional: phone, message.
 * Length caps guard against abuse / oversized email bodies.
 */
export function validateContact(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const body = (raw ?? {}) as Record<string, unknown>;

  const asString = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const message = asString(body.message);

  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length > MAX.name) {
    errors.name = `Name must be ${MAX.name} characters or fewer.`;
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email) || email.length > MAX.email) {
    errors.email = "Enter a valid email address.";
  }

  if (phone && (!PHONE_RE.test(phone) || phone.length > MAX.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (message && message.length > MAX.message) {
    errors.message = `Message must be ${MAX.message} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      name,
      email,
      phone: phone || undefined,
      message: message || undefined,
    },
  };
}
