import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1e1e22] bg-[#0a0a0b] py-10 sm:py-14 mt-16">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Identity */}
          <div className="space-y-1.5">
            <Link
              href="/"
              className="font-mono text-sm font-medium text-[#e8e6e3] hover:text-[#c8a45e] transition-colors"
            >
              <span className="text-[#c8a45e] mr-1">◆</span>
              chaitanya
              <span className="text-[#6b6966]">.dev</span>
            </Link>
            <p className="text-xs text-[#6b6966] font-mono">
              AI / ML Engineer • Noida, India
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-[#6b6966]">
            <Link
              href="/about"
              className="hover:text-[#e8e6e3] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#e8e6e3] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="hover:text-[#e8e6e3] transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#e8e6e3] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Social + Copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/JindalChaitanya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#6b6966] hover:text-[#e8e6e3] transition-colors p-1"
              >
                <IconGithub className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/jindalchaitanya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#6b6966] hover:text-[#e8e6e3] transition-colors p-1"
              >
                <IconLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:chaitanya.jindal2002@gmail.com"
                aria-label="Email"
                className="text-xs font-mono text-[#6b6966] hover:text-[#c8a45e] transition-colors"
              >
                chaitanya.jindal2002@gmail.com
              </a>
            </div>
            <p className="text-[10px] font-mono text-[#3d3b39]">
              © {currentYear} Chaitanya Jindal — Built with Next.js
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
