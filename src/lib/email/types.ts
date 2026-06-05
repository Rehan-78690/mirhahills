/**
 * Shared types for the email subsystem.
 *
 * The contact form, the API route, and every provider implementation all speak
 * in terms of these types so providers can be swapped without touching callers.
 */

export type EmailProvider = "smtp" | "resend" | "sendgrid";

/** A validated contact-form submission, ready to be turned into an email. */
export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

/** A fully rendered email payload handed to a provider. */
export interface EmailMessage {
  to: string;
  /** Raw "from" header value, e.g. `Miraheights <info@dubaihaus.com>`. */
  from: string;
  /** Optional reply-to so staff can reply directly to the lead. */
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

/** Result returned by a provider send. Errors are thrown, not returned. */
export interface SendResult {
  provider: EmailProvider;
  id?: string;
}

/**
 * Thrown when required configuration is missing. The API route maps this to a
 * 500 with a generic client message while logging the detail server-side.
 */
export class EmailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailConfigError";
  }
}

/** Thrown when a provider rejects or fails to deliver the message. */
export class EmailSendError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = "EmailSendError";
  }
}
