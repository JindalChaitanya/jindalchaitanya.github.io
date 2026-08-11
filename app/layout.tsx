import type { Metadata, Viewport } from 'next';
import { Lora, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fbf9f5',
};

export const metadata: Metadata = {
  title: 'Chaitanya Jindal — AI Systems Engineer',
  description:
    'Portfolio of Chaitanya Jindal: AI Systems Engineer building production-oriented AI systems across GraphRAG, computer vision, and ML infrastructure.',
  metadataBase: new URL('https://jindalchaitanya.github.io'),
  openGraph: {
    title: 'Chaitanya Jindal — AI Systems Engineer',
    description:
      'Production-oriented AI systems across GraphRAG, computer vision, and ML infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${lora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="bg-[#fbf9f5] text-[#1a1917] antialiased min-h-screen flex flex-col relative selection:bg-[rgba(140,109,70,0.2)] selection:text-[#1a1917] overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main id="main-content" className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
