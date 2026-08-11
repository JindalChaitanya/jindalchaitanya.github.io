import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Chaitanya Jindal — AI / ML Engineer',
  description:
    'Portfolio of Chaitanya Jindal: AI / ML Engineer building production-oriented AI systems across GraphRAG, computer vision, and ML infrastructure. Built with Next.js.',
  metadataBase: new URL('https://chaitanyajindal.dev'),
  openGraph: {
    title: 'Chaitanya Jindal — AI / ML Engineer',
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
      className={`${lora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0a0a0b] text-[#e8e6e3] antialiased min-h-screen flex flex-col selection:bg-[rgba(200,164,94,0.3)] selection:text-[#e8e6e3]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
