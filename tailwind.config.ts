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

        // === Gradients (fallback solid colors) ===
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
          2: "#22d3ee",  // cyan-400
        },

        // === Profile gradient
        profile: {
          1: "#BCB384",
          2: "#d3ccad",
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

      typography: ({ theme }: { theme: (path: string) => any }) => ({
        dark: {
          css: {
            color: theme("colors.neutral.6"),
            a: {
              color: theme("colors.primary.1"),
              "&:hover": {
                color: theme("colors.primary.2"),
              },
            },
            strong: { color: theme("colors.neutral.7") },
            h1: { color: theme("colors.neutral.8") },
            h2: { color: theme("colors.neutral.7") },
            h3: { color: theme("colors.neutral.6") },
            h4: { color: theme("colors.neutral.6") },
            code: {
              color: theme("colors.primary.1"),
              backgroundColor: theme("colors.neutral.2"),
              padding: "0.25rem 0.375rem",
              borderRadius: theme("borderRadius.md"),
            },
            pre: {
              color: theme("colors.neutral.6"),
              backgroundColor: theme("colors.neutral.2"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
            },
            blockquote: {
              color: theme("colors.neutral.5"),
              borderLeftColor: theme("colors.neutral.4"),
            },
            hr: { borderColor: theme("colors.neutral.4") },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.25rem",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;