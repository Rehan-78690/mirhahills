import type { Config } from "tailwindcss";

/**
 * DubaiHaus-inspired palette.
 * - brand: strong DubaiHaus blue (primary buttons / logo).
 * - sky: light blue accents / gradients.
 * - gold: subtle warm highlight accents.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bdd3ff",
          300: "#90b6ff",
          400: "#5d8efc",
          500: "#3768f3",
          600: "#1f49e0",
          700: "#1b3ab8", // primary DubaiHaus blue
          800: "#1c3494",
          900: "#1c2f75",
          950: "#141e47",
        },
        sky: {
          accent: "#7db8ff",
          soft: "#e8f1ff",
        },
        gold: {
          400: "#e7c067",
          500: "#d4a93f",
          600: "#b88a23",
        },
        // Luxury real-estate palette (Mira Hills project pages):
        // warm ivory/sand backgrounds, gold/bronze accents, espresso text.
        lux: {
          ivory: "#FBF8F1",
          cream: "#F6F1E6",
          sand: "#EFE7D6",
          champagne: "#E7DBC4",
          gold: "#A6824C",
          "gold-dark": "#876743",
          bronze: "#B0894F",
          espresso: "#2C2218",
          coffee: "#4A3C2C",
          taupe: "#7C6E5C",
          line: "#E3D9C6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(20, 30, 71, 0.35)",
        glow: "0 0 0 1px rgba(125, 184, 255, 0.25), 0 24px 60px -24px rgba(27, 58, 184, 0.55)",
        lux: "0 30px 80px -40px rgba(44, 34, 24, 0.45)",
        "lux-sm": "0 14px 40px -24px rgba(44, 34, 24, 0.4)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 15% -10%, rgba(125,184,255,0.35), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(27,58,184,0.45), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
