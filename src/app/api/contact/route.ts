import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { validateContact } from "@/lib/validation";
import { classifyLead, saveLead } from "@/lib/leads";

/** Run on the Node.js runtime (Nodemailer + filesystem need Node APIs). */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Name of the hidden honeypot field the form includes. Bots tend to fill it. */
const HONEYPOT_FIELD = "company";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Anti-spam honeypot: a real user never fills the hidden field. Pretend
  // success so bots don't learn the trap, but store/send nothing.
  const honeypot = (body as Record<string, unknown>)?.[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok || !result.data) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fields: result.errors },
      { status: 422 }
    );
  }

  const data = result.data;

  // 1) Attempt the email notification (best-effort).
  let emailed = false;
  try {
    await sendContactEmail(data);
    emailed = true;
  } catch (error) {
    // Logged server-side only; never leaks secrets/config to the client.
    console.error("[contact] email send failed:", error);
  }

  // 2) Persist the lead so nothing is ever lost (visible in the admin panel).
  let stored = false;
  try {
    await saveLead({
      type: classifyLead(data.source),
      name: data.name,
      email: data.email,
      phone: data.phone,
      propertyType: data.propertyType,
      budget: data.budget,
      message: data.message,
      source: data.source,
      emailed,
    });
    stored = true;
  } catch (error) {
    console.error("[contact] lead storage failed:", error);
  }

  // Only a true failure (neither emailed nor stored) is surfaced to the user.
  if (!emailed && !stored) {
    return NextResponse.json(
      { ok: false, error: "We couldn't process your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

/** Reject other methods cleanly. */
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
