import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Smriti Priya Singh — Personal Website & Cybersecurity Journal',
  description: 'Personal brand website & cybersecurity journal of Smriti Priya Singh (TechEthix).',
  icons: {
    icon: '/techethix-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f7] min-h-screen flex flex-col justify-between selection:bg-[#d4c5b9]/25 selection:text-white relative`}
      >
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
