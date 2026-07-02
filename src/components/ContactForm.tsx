"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const INITIAL = { name: "", email: "", phone: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const loading = status === "loading";

  function update(field: keyof typeof INITIAL, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return; // prevent duplicate submissions

    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: FieldErrors;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFieldErrors(data.fields ?? {});
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you — your details are in. Our team will respond shortly with the general project information we have available.");
      setValues(INITIAL); // reset form after success
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 disabled:opacity-60";

  const fieldClass = (err?: string) =>
    `${inputBase} ${err ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200"}`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
      aria-label="Register your interest"
    >
      {/* Honeypot: hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Full name <span className="text-brand-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={values.name}
          disabled={loading}
          onChange={(e) => update("name", e.target.value)}
          className={fieldClass(fieldErrors.name)}
        />
        {fieldErrors.name && <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            value={values.email}
            disabled={loading}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass(fieldErrors.email)}
          />
          {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+971 50 000 0000"
            value={values.phone}
            disabled={loading}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass(fieldErrors.phone)}
          />
          {fieldErrors.phone && <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us what you're looking for…"
          value={values.message}
          disabled={loading}
          onChange={(e) => update("message", e.target.value)}
          className={`${fieldClass(fieldErrors.message)} resize-none`}
        />
        {fieldErrors.message && <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>Register interest</>
        )}
      </button>

      {status === "success" && message && (
        <div
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          {message}
        </div>
      )}
      {status === "error" && message && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {message}
        </div>
      )}

      <p className="text-center text-xs text-slate-400">
        We respect your privacy. Your details are used only to respond to your enquiry.
      </p>
    </form>
  );
}
