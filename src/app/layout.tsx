import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import React from 'react';
import './globals.css';
import SiteFooter from '@/app/components/SiteFooter';
import SiteNav from '@/app/components/SiteNav';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  // The metric-adjusted fallback next/font generates is backed by Arial, and
  // because it is a real @font-face it shadows ui-monospace/Menlo entirely.
  // The ASCII portrait needs a fixed 0.6em advance, so fall back to a genuine
  // monospace instead.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Marcelo Morales',
    template: '%s · Marcelo Morales',
  },
  description:
    'Security engineer at Trail of Bits working on blockchain security and ' +
    'smart contract analysis.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang='en'>
      <body
        className={[
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          'blueprint-grid min-h-screen bg-canvas font-mono text-ink antialiased',
        ].join(' ')}
      >
        <a
          href='#content'
          className={[
            'sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-30',
            'focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-teal',
          ].join(' ')}
        >
          skip to content
        </a>
        <div className='mx-auto w-full max-w-shell px-3 py-3 compact:px-6 compact:py-8'>
          <div className='border border-rule-heavy bg-surface shadow-window'>
            <SiteNav />
            <main id='content' tabIndex={-1} className='focus:outline-none'>
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
