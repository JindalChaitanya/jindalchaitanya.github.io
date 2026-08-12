import type { Metadata, Viewport } from 'next';
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading-fallback',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#faf9f5',
};

export const metadata: Metadata = {
  title: 'Chaitanya Jindal | AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in regulatory compliance retrieval and computer vision pipelines.',
  metadataBase: new URL('https://jindalchaitanya.github.io'),
  openGraph: {
    title: 'Chaitanya Jindal | AI Systems Engineer',
    description:
      'AI Systems Engineer specializing in regulatory compliance retrieval and computer vision pipelines.',
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
      className={`${dmSans.variable} ${plusJakartaSans.variable} overflow-x-hidden`}
    >
      <body className="bg-[#faf9f5] text-[#181816] antialiased min-h-screen flex flex-col relative selection:bg-[rgba(140,109,70,0.15)] selection:text-[#181816] overflow-x-hidden font-sans">
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
