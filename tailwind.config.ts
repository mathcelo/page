import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Neutral (slate) for background, text, dividers ===
        neutral: {
          1: "#0f172a",   // slate-900
          2: "#1e293b",   // slate-800
          3: "#334155",   // slate-700
          4: "#475569",   // slate-600
          5: "#64748b",   // slate-500
          6: "#94a3b8",   // slate-400
          7: "#cbd5e1",   // slate-300
          8: "#e2e8f0",   // slate-200
        },

        // === Primary (cyan) for links, branding, CTAs ===
        primary: {
          1: "#22d3ee",  // cyan-400
          2: "#06b6d4",  // cyan-500
        },

        // === Gradients (just solid color references for utility fallback) ===
        gradient: {
          1: "#06b6d4",  // cyan-500
          2: "#0891b2",  // cyan-600
          3: "#0e7490",  // cyan-700
        },

        // === Error
        error: {
          1: "#fee2e2",  // red-100
          2: "#ef4444",  // red-500
        },

        // === Accents
        accent: {
          1: "#67e8f9",  // cyan-300
          2: "#22d3ee",  // cyan-400 (overlap w/ primary)
        },

        // === Others
        discount: "#22c55e", // green-500
        link: "#0ea5e9",     // sky-500
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        flash: {
          "0%, 100%": { backgroundColor: "#1f2937" },
          "50%": { backgroundColor: "#4b5563" },
        },
      },
      animation: {
        flash: "flash 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;