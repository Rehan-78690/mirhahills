import type { Faq } from "@/lib/projects/mira-hills";

/**
 * FAQ accordion (native <details> — crawlable, accessible, no JS). The matching
 * FAQPage JSON-LD is emitted separately by ProjectSchema.
 */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-lux-line overflow-hidden rounded-2xl border border-lux-line bg-white shadow-lux-sm">
      {items.map((item, i) => (
        <details key={i} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold text-lux-espresso transition hover:text-lux-gold-dark">
            {item.question}
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-lux-sand text-lux-gold-dark transition group-open:rotate-45">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="pb-5 pr-10 text-sm leading-relaxed text-lux-taupe">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
