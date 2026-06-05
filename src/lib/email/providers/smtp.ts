import nodemailer from "nodemailer";
import { requireEnv, optionalEnv } from "../config";
import { EmailSendError, type EmailMessage, type SendResult } from "../types";

/**
 * Send via SMTP using Nodemailer.
 *
 * Required env: SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS.
 */
export async function sendViaSmtp(message: EmailMessage): Promise<SendResult> {
  const host = requireEnv("SMTP_HOST");
  const port = Number.parseInt(requireEnv("SMTP_PORT"), 10);
  const secure = (optionalEnv("SMTP_SECURE") ?? "true").toLowerCase() === "true";
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  if (Number.isNaN(port)) {
    throw new EmailSendError("SMTP_PORT must be a valid number.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    const info = await transporter.sendMail({
      to: message.to,
      from: message.from,
      replyTo: message.replyTo,
      subject: message.subject,
      html: message.html,
      text: message.text,
    });
    return { provider: "smtp", id: info.messageId };
  } catch (cause) {
    throw new EmailSendError("SMTP delivery failed.", cause);
  }
}
