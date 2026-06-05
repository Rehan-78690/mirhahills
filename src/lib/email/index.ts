/** Public surface of the email subsystem. */
export { sendContactEmail, sendEmail } from "./send";
export { getProvider, getMailIdentity } from "./config";
export {
  CONTACT_SUBJECT,
  renderContactHtml,
  renderContactText,
} from "./template";
export {
  EmailConfigError,
  EmailSendError,
  type ContactSubmission,
  type EmailMessage,
  type EmailProvider,
  type SendResult,
} from "./types";
