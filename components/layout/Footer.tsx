import React from 'react';
import Link from 'next/link';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#e6e1da] bg-[#faf8f5] py-12 sm:py-16 mt-20 text-[#57524d]">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-[#e6e1da]">
          {/* Identity */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-serif text-xl text-[#1a1918]">Chaitanya Jindal</h2>
            <p className="text-sm text-[#57524d] max-w-md leading-relaxed">
              AI / ML Engineer building production-oriented systems across GraphRAG retrieval, computer vision pipelines, and ML infrastructure.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2 text-sm font-sans">
            <div className="text-xs font-mono uppercase tracking-wider text-[#7a4a2e] mb-3 font-semibold">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#1a1918] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#1a1918] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1a1918] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1a1918] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Channels */}
          <div className="md:col-span-3 space-y-2 text-sm font-sans">
            <div className="text-xs font-mono uppercase tracking-wider text-[#7a4a2e] mb-3 font-semibold">
              Connect
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/JindalChaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1a1918] transition-colors"
                >
                  <IconGithub className="w-4 h-4 text-[#7a4a2e]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#807a75]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/jindalchaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1a1918] transition-colors"
                >
                  <IconLinkedin className="w-4 h-4 text-[#7a4a2e]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#807a75]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:chaitanya.jindal2002@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1a1918] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#7a4a2e]" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#7a4a2e] hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#807a75]">
          <div>
            © {currentYear} Chaitanya Jindal. Designed with simplicity.
          </div>
          <div>
            CDAC PGCP-AI (CCAT AIR 286) • Noida, India
          </div>
        </div>
      </Container>
    </footer>
  );
};
