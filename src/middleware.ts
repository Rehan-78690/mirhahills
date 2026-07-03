import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * TEMPORARY: the public site is offline.
 *
 * Every public route is redirected (307 Temporary) to the `/offline` holding
 * page, which tells visitors the site is unavailable and points them to the
 * official developer. To bring the site back online, simply delete this file
 * (or set OFFLINE = false) — no other code needs to change.
 *
 * The API surface and the password-protected admin panel are intentionally
 * left reachable (see `config.matcher`) so leads can still be managed.
 */
const OFFLINE = true;

export function middleware(request: NextRequest) {
  if (!OFFLINE) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/offline";
  url.search = "";
  return NextResponse.redirect(url, 307);
}

export const config = {
  /**
   * Match everything EXCEPT:
   *  - /offline            (the holding page itself — avoid a redirect loop)
   *  - /api/*              (contact + admin APIs keep working)
   *  - /admin-secure-mira  (owner can still sign in to view leads)
   *  - Next.js internals and any file with an extension (static assets)
   */
  matcher: [
    "/((?!offline|api|admin-secure-mira|_next/static|_next/image|.*\\.).*)",
  ],
};
