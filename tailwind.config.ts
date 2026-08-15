import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Breakpoints mirroring the design's two max-width rules (860px, 560px).
      screens: {
        compact: '561px',
        wide: '861px',
      },

      colors: {
        // === Surfaces ===
        canvas: '#F1F5F6',
        surface: '#FFFFFF',

        // === Text ===
        ink: '#0F1E22',
        'ink-muted': '#2C3B3E',
        copy: '#48595D',
        // Darkened from the design's #6A7C80 to clear WCAG AA at the 11-12px
        // sizes this is used at (4.87:1 on canvas, 5.35:1 on surface).
        meta: '#5C6E72',

        // === Rules and borders ===
        rule: '#D8E2E4',
        'rule-faint': '#E9F0F1',
        'rule-heavy': '#C5D4D7',
        'rule-marker': '#9FB3B7',

        // === Accent (cyan) ===
        // accent-hover is a background only; as text it does not meet AA.
        accent: '#00B7CD',
        'accent-hover': '#00A0B4',
        'accent-ink': '#04262C',
        'accent-wash': '#B8ECF3',

        // === Links and highlights ===
        teal: '#056676',
        // Darkened from the design's #C4603C to clear AA at 11.5px.
        rust: '#A94E2E',
      },

      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },

      maxWidth: {
        shell: '1080px',
      },

      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.copy'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.copy'),
            '--tw-prose-links': theme('colors.teal'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.meta'),
            '--tw-prose-bullets': theme('colors.rule-heavy'),
            '--tw-prose-hr': theme('colors.rule'),
            '--tw-prose-quotes': theme('colors.ink-muted'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.meta'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-pre-code': theme('colors.ink'),
            '--tw-prose-pre-bg': theme('colors.surface'),
            '--tw-prose-th-borders': theme('colors.rule'),
            '--tw-prose-td-borders': theme('colors.rule'),
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': { color: theme('colors.rust') },
            },
            'h1, h2, h3, h4': {
              letterSpacing: '-0.02em',
              fontWeight: '700',
            },
            code: {
              fontWeight: '400',
              backgroundColor: theme('colors.surface'),
              border: `1px solid ${theme('colors.rule')}`,
              padding: '0.15em 0.4em',
              borderRadius: '0',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              border: `1px solid ${theme('colors.rule')}`,
              borderRadius: '0',
            },
            'pre code': {
              border: '0',
              padding: '0',
              backgroundColor: 'transparent',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '2px',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
