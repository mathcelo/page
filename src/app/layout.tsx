import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer"; // Import the Footer component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Update metadata with a custom title and description
export const metadata: Metadata = {
  title: "Marcelo Morales",
  description: "Exploring cybersecurity and blockchain research by Marcelo Morales, PhD student at The Ohio State University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-gray-300`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Main Content */}
          <main className="flex-grow bg-slate-900">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}