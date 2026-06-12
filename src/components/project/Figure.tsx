import type { ReactNode } from "react";
import Image from "next/image";

interface FigureProps {
  src?: string;
  /** Descriptive alt text — required for any meaningful (non-decorative) image. */
  alt?: string;
  className?: string;
  /** Optional gradient drawn on top of the image (e.g. for text legibility). */
  overlay?: string;
  /** Warm fallback shown when no image source is provided. */
  gradient?: string;
  /** Eagerly load (use for above-the-fold / LCP images). */
  priority?: boolean;
  /** Responsive sizes hint for the optimizer. */
  sizes?: string;
  children?: ReactNode;
}

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #d8cab0 0%, #b59a6f 55%, #8f7448 100%)";

/**
 * Image block backed by a real, optimized <img> (next/image) so every visual is
 * crawlable by image search and carries descriptive alt text. A missing `src`
 * simply reveals the warm gradient underneath — no broken image, no build error.
 * Brochure exports live in /public/images/mira-hills/ (see images/MANIFEST.md).
 */
export default function Figure({
  src,
  alt = "",
  className = "",
  overlay,
  gradient = DEFAULT_GRADIENT,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  children,
}: FigureProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: "#cdbfa6", backgroundImage: gradient }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-center"
        />
      )}
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: overlay }}
        />
      )}
      {children}
    </div>
  );
}
