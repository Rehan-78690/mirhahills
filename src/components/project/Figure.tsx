import type { ReactNode } from "react";

interface FigureProps {
  src?: string;
  alt?: string;
  className?: string;
  /** Optional gradient drawn on top of the image (e.g. for text legibility). */
  overlay?: string;
  /** Warm fallback shown when the image file is absent. */
  gradient?: string;
  children?: ReactNode;
}

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #d8cab0 0%, #b59a6f 55%, #8f7448 100%)";

/**
 * Image block that degrades gracefully. Uses CSS background layering so a
 * missing file (404) simply reveals the warm gradient underneath — no broken
 * <img> and no build error. Drop real brochure exports into
 * /public/images/mira-hills/ (see images/MANIFEST.md) and they appear here.
 */
export default function Figure({
  src,
  alt = "",
  className = "",
  overlay,
  gradient = DEFAULT_GRADIENT,
  children,
}: FigureProps) {
  const layers = [overlay, src ? `url('${src}')` : null, gradient]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundColor: "#cdbfa6", backgroundImage: layers }}
    >
      {children}
    </div>
  );
}
