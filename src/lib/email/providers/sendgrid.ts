import { requireEnv } from "../config";
import { EmailSendError, type EmailMessage, type SendResult } from "../types";

/** Parse a "Name <email>" or bare "email" string into SendGrid's shape. */
function parseAddress(value: string): { email: string; name?: string } {
  const match = value.match(/^\s*(.*?)\s*<\s*([^>]+)\s*>\s*$/);
  if (match) {
    return { name: match[1] || undefined, email: match[2] };
  }
  return { email: value.trim() };
}

/**
 * Send via the SendGrid v3 Mail Send API using native fetch (no SDK dependency).
 *
 * Required env: SENDGRID_API_KEY.
 */
export async function sendViaSendgrid(
  message: EmailMessage
): Promise<SendResult> {
  const apiKey = requireEnv("SENDGRID_API_KEY");

  const body = {
    personalizations: [{ to: [parseAddress(message.to)] }],
    from: parseAddress(message.from),
    reply_to: message.replyTo ? parseAddress(message.replyTo) : undefined,
    subject: message.subject,
    content: [
      { type: "text/plain", value: message.text },
      { type: "text/html", value: message.html },
    ],
  };

  let response: Response;
  try {
    response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (cause) {
    throw new EmailSendError("Could not reach the SendGrid API.", cause);
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new EmailSendError(
      `SendGrid API responded with ${response.status}. ${detail}`.trim()
    );
  }

  // SendGrid returns the message id in the X-Message-Id header on 202.
  const id = response.headers.get("x-message-id") ?? undefined;
  return { provider: "sendgrid", id };
}
