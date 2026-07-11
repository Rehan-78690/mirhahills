import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /en and /de are accessible (indexable, in the sitemap, reachable by typing
  // the URL directly). Only their sub-paths redirect to root.
  if (pathname.startsWith("/en/") || pathname.startsWith("/de/")) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  // Redirect old project pages and coming-soon to root
  if (
    pathname === "/projects" ||
    pathname.startsWith("/projects/") ||
    pathname === "/coming-soon"
  ) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }

  // Allow everything else (privacy-policy and terms are deleted, so they'll 404)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all paths except static, API, admin, and files with dots
    "/((?!_next/static|_next/image|api|admin-secure-mira|.*\\.).*)",
  ],
};