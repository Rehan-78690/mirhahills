import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { EmailConfigError } from "@/lib/email/types";
import { validateContact } from "@/lib/validation";

/** Run on the Node.js runtime (Nodemailer needs Node APIs). */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Name of the hidden honeypot field the form includes. Bots tend to fill it. */
const HONEYPOT_FIELD = "company";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Anti-spam honeypot: a real user never fills the hidden field. Pretend
  // success so bots don't learn the trap, but send nothing.
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

  try {
    await sendContactEmail(result.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log full detail server-side only — never leak secrets/config to client.
    console.error("[contact] email send failed:", error);

    if (error instanceof EmailConfigError) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }
}

/** Reject other methods cleanly. */
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
