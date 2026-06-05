import Link from "next/link";
import { breadcrumbs } from "@/lib/site";

/**
 * Visible breadcrumb trail. The machine-readable BreadcrumbList lives in
 * StructuredData; this is the human-facing, accessible counterpart.
 */
export default function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5 text-brand-200/80">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={`${crumb.name}-${index}`} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-white">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="transition hover:text-white">
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <svg className="h-3 w-3 text-brand-300/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
