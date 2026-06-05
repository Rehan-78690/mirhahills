import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

/** White card used in the supporting sections below the hero. */
export default function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-100">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}
