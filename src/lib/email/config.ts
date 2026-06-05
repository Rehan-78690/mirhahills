import { EmailConfigError, type EmailProvider } from "./types";

/** Read an env var, throwing a config error if it's missing/empty. */
export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new EmailConfigError(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

/** Read an optional env var, returning undefined when absent. */
export function optionalEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

/** Resolve and validate the configured email provider. */
export function getProvider(): EmailProvider {
  const raw = (process.env.EMAIL_PROVIDER ?? "smtp").trim().toLowerCase();
  if (raw === "smtp" || raw === "resend" || raw === "sendgrid") {
    return raw;
  }
  throw new EmailConfigError(
    `Invalid EMAIL_PROVIDER "${raw}". Expected one of: smtp, resend, sendgrid.`
  );
}

/** Shared recipient/sender identity used by every provider. */
export function getMailIdentity(): { to: string; from: string } {
  return {
    to: requireEnv("CONTACT_TO"),
    from: requireEnv("CONTACT_FROM"),
  };
}
