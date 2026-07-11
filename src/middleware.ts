import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing + legacy-route handling for the independent Mira Hills gateway.
 *
 *  - `/`                         -> locale-detected redirect to `/en` or `/de` (307).
 *  - `/offline`                  -> 308 permanent redirect to the locale gateway.
 *  - `/en/mira-hills`,`/de/...`  -> 308 to `/en` / `/de` (supported alias, no dup content).
 *  - `/projects`, `/projects/*`, `/coming-soon` -> gated: 307 to the locale gateway.
 *  - everything else (`/en`, `/de`, `/privacy-policy`, `/terms`) -> passes through,
 *    with an `x-locale` request header so the root layout can set `<html lang>`.
 *
 * Locale is detected from the `NEXT_LOCALE` cookie, then `Accept-Language`,
 * defaulting to English.
 */

type Locale = "en" | "de";
const DEFAULT_LOCALE: Locale = "en";

/** German-speaking countries used for the geo fallback. */
const GERMAN_COUNTRIES = new Set(["DE", "AT", "CH"]);

/**
 * Resolve the best locale for a locale-less request. Priority:
 *   1. saved NEXT_LOCALE cookie (explicit user choice)
 *   2. Accept-Language (de, de-DE, de-AT, de-CH -> de; explicit en -> en)
 *   3. geo/country fallback (DE/AT/CH -> de) when Accept-Language is inconclusive
 *   4. English default
 * (An explicit locale already in the URL is handled by the caller and never
 *  overridden here.)
 */
function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie === "de" || cookie === "en") return cookie;

  const accept = request.headers.get("accept-language") ?? "";
  const primary = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  if (primary.startsWith("de")) return "de"; // de, de-DE, de-AT, de-CH…
  if (primary.startsWith("en")) return "en"; // explicit English preference wins over geo

  // Geo fallback (e.g. Vercel's x-vercel-ip-country) only when the browser
  // language is missing or inconclusive.
  const country = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  if (GERMAN_COUNTRIES.has(country)) return "de";

  return DEFAULT_LOCALE;
}

function localeFromPath(pathname: string): Locale {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

function redirectTo(request: NextRequest, pathname: string, status: 307 | 308) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = "";
  return NextResponse.redirect(url, status);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root -> language-appropriate gateway (temporary: varies per visitor).
  if (pathname === "/") {
    return redirectTo(request, `/${detectLocale(request)}`, 307);
  }

  // Obsolete offline route -> permanent redirect to the gateway.
  if (pathname === "/offline") {
    return redirectTo(request, `/${detectLocale(request)}`, 308);
  }

  // Supported "/{locale}/mira-hills" aliases -> canonical locale page (no dup content).
  if (pathname === "/en/mira-hills") return redirectTo(request, "/en", 308);
  if (pathname === "/de/mira-hills") return redirectTo(request, "/de", 308);

  // Gated detailed marketing pages -> gateway (temporary; may be re-enabled later).
  if (pathname === "/projects" || pathname.startsWith("/projects/") || pathname === "/coming-soon") {
    return redirectTo(request, `/${detectLocale(request)}`, 307);
  }

  // Pass through (e.g. /en, /de, /privacy-policy, /terms) with the resolved
  // locale exposed to the server layout for the <html lang> attribute.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", localeFromPath(pathname));
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  /**
   * Run on everything EXCEPT Next internals, the API, the admin panel, and any
   * path containing a dot (static files, robots.txt, sitemap.xml, favicon.svg).
   */
  matcher: ["/((?!_next/static|_next/image|api|admin-secure-mira|.*\\.).*)"],
};
