import { getMailIdentity, getProvider } from "./config";
import { sendViaResend } from "./providers/resend";
import { sendViaSendgrid } from "./providers/sendgrid";
import { sendViaSmtp } from "./providers/smtp";
import {
  CONTACT_SUBJECT,
  renderContactHtml,
  renderContactText,
} from "./template";
import type { ContactSubmission, EmailMessage, SendResult } from "./types";

/** Low-level send: route a fully-rendered message to the selected provider. */
export async function sendEmail(message: EmailMessage): Promise<SendResult> {
  const provider = getProvider();
  switch (provider) {
    case "smtp":
      return sendViaSmtp(message);
    case "resend":
      return sendViaResend(message);
    case "sendgrid":
      return sendViaSendgrid(message);
  }
}

/**
 * High-level helper used by the API route: render the contact submission into a
 * branded email and dispatch it via the configured provider.
 *
 * The lead's email is set as Reply-To so staff can respond directly.
 */
export async function sendContactEmail(
  input: ContactSubmission
): Promise<SendResult> {
  const { to, from } = getMailIdentity();

  const message: EmailMessage = {
    to,
    from,
    replyTo: input.email,
    subject: CONTACT_SUBJECT,
    html: renderContactHtml(input),
    text: renderContactText(input),
  };

  return sendEmail(message);
}
