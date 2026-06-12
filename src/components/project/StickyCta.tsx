"use client";

import { useEffect, useState } from "react";
import { miraHills } from "@/lib/projects/mira-hills";

const WA_DIGITS = miraHills.contact.whatsapp.replace(/\D/g, "");
const WA_MESSAGE = encodeURIComponent(
  "Hi, I'd like to know more about Mira Hills, Abu Dhabi."
);

/**
 * Floating WhatsApp button (always visible) plus a slide-in enquiry bar that
 * appears after the user scrolls past the hero. Mobile shows a fixed bottom
 * action bar. The WhatsApp button is hidden until a real number is configured.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);
  const hasWhatsApp = WA_DIGITS.length >= 8 && WA_DIGITS !== "971500000000";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      {hasWhatsApp && (
        <a
          href={`https://wa.me/${WA_DIGITS}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 sm:bottom-6"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      )}

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-lux-line bg-lux-ivory/95 px-4 py-3 backdrop-blur sm:hidden">
        <a href={`tel:${miraHills.contact.phoneDisplay.replace(/\s/g, "")}`} className="flex flex-1 items-center justify-center rounded-full border border-lux-gold/50 py-3 text-sm font-semibold text-lux-gold-dark">
          Call
        </a>
        <a href="#enquire" className="flex flex-[2] items-center justify-center rounded-full bg-lux-gold py-3 text-sm font-semibold text-white">
          Register interest
        </a>
      </div>

      {/* Desktop slide-in enquiry bar */}
      <div
        className={`fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-lux-line bg-white/95 px-5 py-3 shadow-lux backdrop-blur transition-all duration-300 lg:flex ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="text-sm font-medium text-lux-coffee">
          Interested in <span className="font-semibold text-lux-espresso">Mira Hills</span>?
        </span>
        <a href="#enquire" className="rounded-full bg-lux-gold px-5 py-2 text-sm font-semibold text-white transition hover:bg-lux-gold-dark">
          Register your interest
        </a>
      </div>
    </>
  );
}
