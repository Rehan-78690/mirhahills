"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const PROPERTY_TYPES = [
  "Apartment",
  "Island / Lake-view apartment",
  "Townhome",
  "Villa",
  "Luxury villa",
  "Premium / Ultra-premium villa",
  "Branded residence",
  "Not sure yet",
];

const BUDGETS = [
  "Under AED 2M",
  "AED 2M – 5M",
  "AED 5M – 10M",
  "AED 10M+",
  "Prefer not to say",
];

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  budget: "",
  message: "",
  company: "", // honeypot
};

/**
 * Mira Hills project enquiry form. Posts to the shared /api/contact route with
 * the extra propertyType/budget fields and a project `source` label.
 */
export default function EnquiryForm({
  source = "Mira Hills Abu Dhabi — Project Page",
  variant = "light",
}: {
  source?: string;
  variant?: "light" | "dark";
}) {
  const [values, setValues] = useState(INITIAL);
  const [brochure, setBrochure] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const loading = status === "loading";
  const dark = variant === "dark";

  function update(field: keyof typeof INITIAL, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    setStatus("loading");
    setFeedback("");
    setFieldErrors({});

    try {
      // Tag brochure requests in the source so they're classified separately.
      const finalSource = brochure ? `${source} · Brochure request` : source;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: finalSource }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: Record<string, string>;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFieldErrors(data.fields ?? {});
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thank you — your enquiry is in. Our team will respond shortly with the general project information we have available.");
      setValues(INITIAL);
      setBrochure(false);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  const label = dark ? "text-white/80" : "text-lux-coffee";
  const field = `w-full rounded-xl border bg-white/95 px-4 py-3 text-sm text-lux-espresso placeholder-lux-taupe/60 outline-none transition focus:border-lux-gold focus:ring-2 focus:ring-lux-gold/25 disabled:opacity-60`;
  const fieldErr = "border-red-400";
  const fieldOk = dark ? "border-transparent" : "border-lux-line";
  const cls = (err?: string) => `${field} ${err ? fieldErr : fieldOk}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Register your interest in Mira Hills">
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="eq-company">Company</label>
        <input id="eq-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={(e) => update("company", e.target.value)} />
      </div>

      <div>
        <label htmlFor="eq-name" className={`mb-1.5 block text-sm font-medium ${label}`}>
          Full name <span className="text-lux-gold">*</span>
        </label>
        <input id="eq-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" value={values.name} disabled={loading} onChange={(e) => update("name", e.target.value)} className={cls(fieldErrors.name)} />
        {fieldErrors.name && <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="eq-email" className={`mb-1.5 block text-sm font-medium ${label}`}>
            Email <span className="text-lux-gold">*</span>
          </label>
          <input id="eq-email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" value={values.email} disabled={loading} onChange={(e) => update("email", e.target.value)} className={cls(fieldErrors.email)} />
          {fieldErrors.email && <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="eq-phone" className={`mb-1.5 block text-sm font-medium ${label}`}>
            Phone / WhatsApp
          </label>
          <input id="eq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 50 000 0000" value={values.phone} disabled={loading} onChange={(e) => update("phone", e.target.value)} className={cls(fieldErrors.phone)} />
          {fieldErrors.phone && <p className="mt-1 text-xs text-red-400">{fieldErrors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="eq-type" className={`mb-1.5 block text-sm font-medium ${label}`}>
            Interested property type
          </label>
          <select id="eq-type" name="propertyType" value={values.propertyType} disabled={loading} onChange={(e) => update("propertyType", e.target.value)} className={cls()}>
            <option value="">Select…</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="eq-budget" className={`mb-1.5 block text-sm font-medium ${label}`}>
            Budget
          </label>
          <select id="eq-budget" name="budget" value={values.budget} disabled={loading} onChange={(e) => update("budget", e.target.value)} className={cls()}>
            <option value="">Select…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="eq-message" className={`mb-1.5 block text-sm font-medium ${label}`}>
          Message <span className={dark ? "text-white/40" : "text-lux-taupe"}>(optional)</span>
        </label>
        <textarea id="eq-message" name="message" rows={3} placeholder="Tell us what you're looking for…" value={values.message} disabled={loading} onChange={(e) => update("message", e.target.value)} className={`${cls(fieldErrors.message)} resize-none`} />
      </div>

      <label className={`flex cursor-pointer items-center gap-2.5 text-sm ${dark ? "text-white/80" : "text-lux-coffee"}`}>
        <input
          type="checkbox"
          name="brochure"
          checked={brochure}
          disabled={loading}
          onChange={(e) => setBrochure(e.target.checked)}
          className="h-4 w-4 rounded border-lux-line text-lux-gold focus:ring-lux-gold/30"
        />
        Please email me the project brochure
      </label>

      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lux-gold px-6 py-3.5 text-sm font-semibold text-white shadow-lux-sm transition hover:bg-lux-gold-dark focus:outline-none focus:ring-2 focus:ring-lux-gold/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          "Register your interest"
        )}
      </button>

      {status === "success" && feedback && (
        <div role="status" className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{feedback}</div>
      )}
      {status === "error" && feedback && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">{feedback}</div>
      )}

      <p className={`text-center text-xs ${dark ? "text-white/50" : "text-lux-taupe"}`}>
        Your details are used only to respond to your enquiry. No spam. See our Privacy Policy.
      </p>
    </form>
  );
}
