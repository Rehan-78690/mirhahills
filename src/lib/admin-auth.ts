import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/**
 * Simple password-based admin auth.
 *
 * - The admin password is `ADMIN_PASSWORD` (env only — never hardcoded).
 * - On login we set an httpOnly cookie whose value is an HMAC of the password
 *   (keyed by `ADMIN_SESSION_SECRET`), so the raw password is never stored in
 *   the browser and the cookie can't be forged without the secret.
 */

export const ADMIN_COOKIE = "mira_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

export { MAX_AGE_SECONDS };

function sessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "mira-admin-fallback";
}

/** The opaque session token stored in the cookie. */
export function sessionToken(): string {
  const pw = process.env.ADMIN_PASSWORD || "";
  return createHmac("sha256", sessionSecret()).update(`admin:${pw}`).digest("hex");
}

/** Constant-time string compare. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/** True only when ADMIN_PASSWORD is set and matches (constant-time). */
export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  return safeEqual(input, expected);
}

/** Whether admin auth is configured at all. */
export function isConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

/** Read the session cookie and verify it. */
export async function isAuthed(): Promise<boolean> {
  if (!isConfigured()) return false;
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  return safeEqual(token, sessionToken());
}
