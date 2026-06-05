/** Mirha Hills wordmark with a DubaiHaus-blue building glyph. */
export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-brand-800";
  const sub = light ? "text-brand-100" : "text-slate-400";

  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 shadow-glow"
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 21V9l6-4 6 4v12" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M15 21V11l6 3v7" stroke="#e7c067" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M2 21h20" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-lg font-bold tracking-tight ${text}`}>
          Mirha <span className="text-brand-500">Hills</span>
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${sub}`}>
          by DubaiHaus
        </span>
      </span>
    </div>
  );
}
