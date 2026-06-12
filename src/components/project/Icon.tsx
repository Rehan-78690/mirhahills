import type { IconName } from "@/lib/projects/mira-hills";

/** Thin line-icon set keyed by the project data's IconName union. */
export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <path d="M3 21V10l6-4 6 4M15 21V8l6 4v9M2 21h20" />
        </svg>
      );
    case "golf":
      return (
        <svg {...common}>
          <path d="M11 3v13M11 4l7 3-7 3" />
          <path d="M7 21c1.5-1 7-1 8 0" />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path d="M3 8c2 0 2 1.5 4.5 1.5S10 8 12 8s2.5 1.5 4.5 1.5S19 8 21 8M3 13c2 0 2 1.5 4.5 1.5S10 13 12 13s2.5 1.5 4.5 1.5S19 13 21 13M3 18c2 0 2 1.5 4.5 1.5S10 18 12 18s2.5 1.5 4.5 1.5S19 18 21 18" />
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <path d="M12 4 2 9l10 5 10-5-10-5ZM6 11.5V16c0 1.1 2.7 2 6 2s6-.9 6-2v-4.5" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 21V5h12v16M15 10h6v11M7 9h2M7 13h2M7 17h2" />
        </svg>
      );
    case "mall":
      return (
        <svg {...common}>
          <path d="M6 8h12l1 12H5L6 8ZM9 8a3 3 0 0 1 6 0" />
        </svg>
      );
    case "park":
    case "nature":
      return (
        <svg {...common}>
          <path d="M12 3c3 2 4 5 4 7a4 4 0 0 1-8 0c0-2 1-5 4-7ZM12 14v7" />
        </svg>
      );
    case "leisure":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case "health":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
          <path d="M12 8v4M10 10h4" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <path d="M4 21V8h16v13M9 21V8m6 13V8M4 8l8-4 8 4" />
        </svg>
      );
    case "transit":
      return (
        <svg {...common}>
          <path d="M5 16V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9M5 16h14M5 16l-1 4m16-4 1 4M8 8h8" />
          <circle cx="8" cy="16" r="0.6" />
          <circle cx="16" cy="16" r="0.6" />
        </svg>
      );
    case "investment":
      return (
        <svg {...common}>
          <path d="M4 19h16M7 19v-6m5 6V8m5 11v-9M5 9l6-5 4 3 5-4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
