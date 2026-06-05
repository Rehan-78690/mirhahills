import { faqs } from "@/lib/site";

/**
 * FAQ accordion built on native <details>/<summary> — fully accessible,
 * crawlable (content is always in the DOM), and works without client JS.
 * The matching FAQPage structured data is emitted by StructuredData.
 */
export default function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Frequently asked questions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-slate-500">
            Answers to the most common questions about the Mira Hills off-plan
            launch. Still curious? Register above and an advisor will help.
          </p>
        </div>

        <div className="mt-12 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
          {faqs.map((faq, index) => (
            <details key={index} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900 transition hover:text-brand-700">
                {faq.question}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sky-soft text-brand-700 transition group-open:rotate-45">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 text-sm leading-relaxed text-slate-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
