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
          'blueprint-grid flex min-h-screen flex-col bg-canvas',
          'font-sans text-ink antialiased',
        ].join(' ')}
      >
        <SiteNav />
        <main className='flex flex-1 flex-col'>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
