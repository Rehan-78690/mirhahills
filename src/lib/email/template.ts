import type { ContactSubmission } from "./types";

const SOURCE_LABEL = "Mirha Hills Coming Soon Landing Page";

/**
 * Escape user-supplied text for safe interpolation into HTML.
 * Prevents the email body from being used as an HTML-injection vector.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Collapse a possibly-empty optional value into a display string. */
function orDash(value?: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "—";
}

export const CONTACT_SUBJECT = "New Mirha Hills Inquiry";

/** Plain-text fallback body for clients that don't render HTML. */
export function renderContactText(input: ContactSubmission): string {
  return [
    "New Mirha Hills Inquiry",
    "",
    `Name:    ${orDash(input.name)}`,
    `Email:   ${orDash(input.email)}`,
    `Phone:   ${orDash(input.phone)}`,
    "",
    "Message:",
    orDash(input.message),
    "",
    `Source: ${SOURCE_LABEL}`,
  ].join("\n");
}

/** Branded HTML email body. All user input is escaped before interpolation. */
export function renderContactHtml(input: ContactSubmission): string {
  const name = escapeHtml(orDash(input.name));
  const email = escapeHtml(orDash(input.email));
  const phone = escapeHtml(orDash(input.phone));
  const message = escapeHtml(orDash(input.message)).replace(/\n/g, "<br />");

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8f1ff;color:#64748b;font-size:13px;width:120px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e8f1ff;color:#0f172a;font-size:15px;font-weight:600;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#eef4ff;font-family:Inter,Segoe UI,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef4ff;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px -28px rgba(20,30,71,0.45);">
            <tr>
              <td style="background:linear-gradient(135deg,#1b3ab8,#3768f3);padding:28px 32px;">
                <div style="color:#bdd3ff;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Mirha Hills</div>
                <div style="color:#ffffff;font-size:22px;font-weight:700;margin-top:4px;">New Inquiry Received</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 18px;color:#334155;font-size:14px;">
                  A new lead just submitted the Mirha Hills coming-soon contact form.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", name)}
                  ${row("Email", email)}
                  ${row("Phone", phone)}
                  ${row("Message", message)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e8f1ff;">
                <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#eef4ff;color:#1b3ab8;font-size:12px;font-weight:600;">
                  Source: ${escapeHtml(SOURCE_LABEL)}
                </span>
              </td>
            </tr>
          </table>
          <p style="color:#94a3b8;font-size:11px;margin:18px 0 0;">Mirha Hills · DubaiHaus Advisory</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
