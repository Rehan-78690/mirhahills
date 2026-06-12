import type { GalleryItem } from "@/lib/projects/mira-hills";
import Figure from "./Figure";

/** Masonry-ish render gallery. First tile spans two columns/rows on desktop. */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item, i) => (
        <Figure
          key={item.image}
          src={item.image}
          alt={`${item.caption} — Mira Hills, Abu Dhabi`}
          overlay="linear-gradient(to top, rgba(44,34,24,0.6), transparent 50%)"
          className={`group min-h-[160px] rounded-2xl ${
            i === 0 ? "col-span-2 row-span-2 lg:min-h-[336px]" : "lg:min-h-[160px]"
          }`}
        >
          <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
            {item.caption}
          </span>
        </Figure>
      ))}
    </div>
  );
}
