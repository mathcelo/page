import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: '#1f2937' },
          '50%': { backgroundColor: '#4b5563' },
        },
      },
      animation: {
        flash: 'flash 0.2s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
