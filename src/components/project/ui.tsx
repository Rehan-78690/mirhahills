import Link from "next/link";
import type { ReactNode } from "react";

/** Page-width wrapper. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small uppercase gold label above headings. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-lux-gold ${className}`}
    >
      <span className="h-px w-6 bg-lux-gold/60" />
      {children}
    </span>
  );
}

/** Editorial section heading: eyebrow + serif title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-lux-espresso"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/80" : "text-lux-taupe"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "outline" | "light" | "outline-light";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-lux-gold text-white hover:bg-lux-gold-dark shadow-lux-sm",
  outline: "border border-lux-gold/60 text-lux-gold-dark hover:bg-lux-gold hover:text-white",
  light: "bg-white text-lux-espresso hover:bg-lux-cream shadow-lux-sm",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

/** Link-styled CTA button. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-lux-gold/40 focus:ring-offset-2";
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
  const cls = `${base} ${VARIANTS[variant]} ${className}`;
  return external ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
