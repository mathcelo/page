import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Marcelo Morales',
  description:
    'Exploring cybersecurity and blockchain research by Marcelo Morales, PhD student at The Ohio State University.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link
          rel='icon'
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🖥️%3C/text%3E%3C/svg%3E"
          type='image/svg+xml'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-neutral-1 via-neutral-1 to-neutral-2 text-neutral-8`}
      >
        <div className='min-h-screen flex flex-col'>
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className='flex-grow'>{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
