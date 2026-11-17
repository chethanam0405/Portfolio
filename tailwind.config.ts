import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#070709",
        "smoked-onyx": "#0E0E12",
        "carbon-slate": "#15151B",
        alabaster: "#F8FAFC",
        "cool-silver": "#94A3B8",
        cobalt: {
          DEFAULT: "#10B981", // Tech emerald green in place of blue
          dark: "#059669",
          light: "#34D399",
        },
        emerald: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
          light: "#A78BFA",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tightDisplay: "-0.03em",
      },
      borderColor: {
        hairline: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
