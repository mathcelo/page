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
});

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' " +
  "viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%2300B7CD'/" +
  '%3E%3C/svg%3E';

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
      <head>
        <link rel='icon' href={FAVICON} type='image/svg+xml' />
      </head>
      <body
        className={[
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          'flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased',
        ].join(' ')}
      >
        <SiteNav />
        <main className='flex-1'>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
