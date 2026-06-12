"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

/** Password gate for the admin panel. */
export default function AdminLogin({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Login failed.");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-lux-ivory px-5">
      <div className="w-full max-w-sm rounded-2xl border border-lux-line bg-white p-8 shadow-lux-sm">
        <div className="font-display text-2xl font-semibold text-lux-espresso">
          Mira <span className="text-lux-gold">Hills</span> · Admin
        </div>
        <p className="mt-1 text-sm text-lux-taupe">Sign in to view enquiries &amp; brochure requests.</p>

        {!configured ? (
          <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            Admin is not configured. Set <code className="font-mono">ADMIN_PASSWORD</code> in your environment, then reload.
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="admin-pw" className="mb-1.5 block text-sm font-medium text-lux-coffee">Password</label>
              <input
                id="admin-pw"
                type="password"
                autoFocus
                autoComplete="current-password"
                value={password}
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-lux-line bg-white px-4 py-3 text-sm text-lux-espresso outline-none transition focus:border-lux-gold focus:ring-2 focus:ring-lux-gold/25"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-lux-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-lux-gold-dark disabled:opacity-70"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
