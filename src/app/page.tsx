import { redirect } from "next/navigation";

/**
 * The public entry point is the localized gateway. Middleware normally handles
 * `/` (with locale detection) before this renders; this fallback ensures `/`
 * still resolves to the English gateway if middleware is ever bypassed.
 */
export default function Home() {
  redirect("/en");
}
