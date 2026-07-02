"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DISCLAIMER_LONG, siteConfig } from "@/lib/site";

/** localStorage key recording that the visitor accepted the non-affiliation notice. */
const STORAGE_KEY = "mh-disclaimer-accepted";

/**
 * First-visit non-affiliation popup.
 *
 * Makes it unambiguous that this is an INDEPENDENT informational portal and not
 * the official Mira Developments / Mira Hills website. Shows once per browser:
 * after the visitor clicks "I Understand" the acceptance is stored in
 * localStorage so it does not appear again. Fully responsive and keyboard
 * accessible (focus trap-lite + Escape is intentionally disabled so the notice
 * must be acknowledged).
 */
export default function DisclaimerModal() {
  // Start hidden; decide on mount so server and first client render match and
  // we never flash the modal at users who already accepted.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") setOpen(true);
    } catch {
      // If localStorage is unavailable (private mode, etc.) still show the notice.
      setOpen(true);
    }
  }, []);

  // Prevent background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Non-fatal: acceptance simply won't persist across sessions.
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-body"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700 ring-1 ring-amber-200">
            Please read
          </span>

          <h2
            id="disclaimer-title"
            className="mt-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
          >
            Independent Information Portal
          </h2>

          <p
            id="disclaimer-body"
            className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
          >
            {DISCLAIMER_LONG}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            The official developer is{" "}
            <a
              href={siteConfig.officialDeveloper.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
            >
              {siteConfig.officialDeveloper.name}
            </a>
            . Please verify all information with the official developer before
            making any decision.
          </p>

          <button
            type="button"
            onClick={accept}
            autoFocus
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            I Understand
          </button>

          <p className="mt-4 text-center text-[11px] text-slate-400">
            By continuing you acknowledge our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-slate-600">
              Terms &amp; Disclaimer
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
