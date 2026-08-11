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
  themeColor: '#08080a',
};

export const metadata: Metadata = {
  title: 'Chaitanya Jindal — AI Systems Engineer',
  description:
    'Portfolio of Chaitanya Jindal: AI Systems Engineer building production-oriented AI systems across GraphRAG, computer vision, and ML infrastructure.',
  metadataBase: new URL('https://chaitanyajindal.dev'),
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
      className={`${lora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="bg-[#08080a] text-[#f3f2ef] antialiased min-h-screen flex flex-col relative selection:bg-[rgba(200,164,94,0.35)] selection:text-[#ffffff] overflow-x-hidden">
        {/* Ambient Glass background light orbs */}
        <div
          className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,164,94,0.06)_0%,transparent_70%)] animate-glow-slow pointer-events-none z-0"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-1/3 right-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.03)_0%,transparent_70%)] animate-glow-reverse pointer-events-none z-0"
          aria-hidden="true"
        />
        <div
          className="fixed top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.03)_0%,transparent_70%)] animate-glow-slow pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
