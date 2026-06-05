import { requireEnv } from "../config";
import { EmailSendError, type EmailMessage, type SendResult } from "../types";

/**
 * Send via the Resend HTTP API using native fetch (no SDK dependency).
 *
 * Required env: RESEND_API_KEY.
 */
export async function sendViaResend(message: EmailMessage): Promise<SendResult> {
  const apiKey = requireEnv("RESEND_API_KEY");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: message.from,
        to: [message.to],
        reply_to: message.replyTo,
        subject: message.subject,
        html: message.html,
        text: message.text,
      }),
    });
  } catch (cause) {
    throw new EmailSendError("Could not reach the Resend API.", cause);
  }

  if (!response.ok) {
    // Read body for server-side logging only; never returned to the client.
    const detail = await response.text().catch(() => "");
    throw new EmailSendError(
      `Resend API responded with ${response.status}. ${detail}`.trim()
    );
  }

  const data = (await response.json().catch(() => ({}))) as { id?: string };
  return { provider: "resend", id: data.id };
}
