import type { AmenityItem, Residence, Zone } from "@/lib/projects/mira-hills";
import Figure from "./Figure";

/** Amenity card with image header, optional highlight stat, name + blurb. */
export function AmenityCard({ item }: { item: AmenityItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-lux-line bg-white shadow-lux-sm transition hover:-translate-y-1 hover:shadow-lux">
      <Figure src={item.image} alt={item.name} className="h-44 w-full">
        {item.stat && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-lux-gold-dark backdrop-blur">
            {item.stat}
          </span>
        )}
      </Figure>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-lux-espresso">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-lux-taupe">{item.description}</p>
      </div>
    </article>
  );
}

/** Residence card — only shows brochure-confirmed `detail` (e.g. plot size). */
export function ResidenceCard({ residence }: { residence: Residence }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-lux-line bg-white shadow-lux-sm transition hover:-translate-y-1 hover:shadow-lux">
      <Figure
        src={residence.image}
        alt={residence.name}
        className="h-52 w-full"
        overlay="linear-gradient(to top, rgba(44,34,24,0.55), transparent 55%)"
      >
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-2xl font-semibold text-white">{residence.name}</h3>
          {residence.detail && (
            <span className="mt-1 inline-block rounded-full bg-lux-gold/90 px-3 py-0.5 text-xs font-semibold text-white">
              {residence.detail}
            </span>
          )}
        </div>
      </Figure>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-lux-taupe">{residence.description}</p>
      </div>
    </article>
  );
}

/** Zone summary card with highlight bullets. */
export function ZoneCard({ zone, index }: { zone: Zone; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-lux-line bg-white p-7 shadow-lux-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lux-sand font-display text-lg font-semibold text-lux-gold-dark">
          {index + 1}
        </span>
        <h3 className="font-display text-2xl font-semibold text-lux-espresso">{zone.name}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-lux-taupe">{zone.summary}</p>
      <ul className="mt-5 space-y-2.5 border-t border-lux-line pt-5">
        {zone.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-lux-coffee">
            <svg className="mt-1 h-3.5 w-3.5 flex-none text-lux-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}
