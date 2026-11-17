import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Chethana M — CS Student & Software Developer',
  description: 'Personal portfolio of Chethana M, Computer Science student at Bangalore Institute Of Technology. Exploring full-stack engineering, SaaS systems, and route navigation.',
  keywords: ['Chethana M', 'Software Developer', 'Bangalore Institute of Technology', 'Portfolio', 'Full Stack', 'Next.js', 'React'],
  authors: [{ name: 'Chethana M' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-obsidian text-alabaster antialiased selection:bg-emerald-500/30 selection:text-alabaster min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
