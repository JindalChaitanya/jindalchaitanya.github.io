import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e6e2da] bg-[#fbf9f5] py-10 sm:py-14 mt-16">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Identity */}
          <div className="space-y-1.5">
            <Link
              href="/"
              className="font-sans text-sm font-semibold text-[#1a1917] hover:text-[#8c6d46] transition-colors"
            >
              Chaitanya Jindal<span className="text-[#6e6a62] text-xs font-mono ml-1.5">.dev</span>
            </Link>
            <p className="text-xs text-[#6e6a62]">
              {profileData.name} • {profileData.location}
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-[#57544e]">
            <Link
              href="/about"
              className="hover:text-[#1a1917] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#1a1917] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="hover:text-[#1a1917] transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1a1917] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Social + Copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#57544e] hover:text-[#1a1917] transition-colors p-1"
              >
                <IconGithub className="w-4.5 h-4.5" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#57544e] hover:text-[#1a1917] transition-colors p-1"
              >
                <IconLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="text-xs font-mono text-[#57544e] hover:text-[#8c6d46] transition-colors"
              >
                {profileData.email}
              </a>
            </div>
            <p className="text-[10px] font-mono text-[#8c8880]">
              © {currentYear} {profileData.name} — Built with Next.js
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
