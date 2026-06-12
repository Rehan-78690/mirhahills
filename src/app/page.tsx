import { permanentRedirect } from "next/navigation";
import { miraHills } from "@/lib/projects/mira-hills";

/**
 * The public homepage is the Mira Hills project experience. We redirect the
 * root to the canonical project URL so there is a single, indexable home for
 * the content (the old coming-soon page lives at /coming-soon).
 */
export default function Home() {
  permanentRedirect(miraHills.basePath);
}
