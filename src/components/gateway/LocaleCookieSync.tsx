"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/gateway-content";

/**
 * Persists the visitor's current language as the `NEXT_LOCALE` cookie so that a
 * later visit to `/` (handled by middleware) sends them back to the language
 * they last viewed. Renders nothing.
 */
export default function LocaleCookieSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    // 1 year, root path, Lax so it survives normal top-level navigations.
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  return null;
}
