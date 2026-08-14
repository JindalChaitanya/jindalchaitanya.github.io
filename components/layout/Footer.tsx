import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { IconGithub, IconLinkedin, IconInstagram } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#d6dba0] bg-[#e1e6b8] py-6 sm:py-8 mt-6 sm:mt-10">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 sm:gap-6">
          {/* Left Column: Social Icons above JindalChaitanya */}
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#54563f] hover:text-[#23241a] transition-colors p-0.5 active:scale-95"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#54563f] hover:text-[#23241a] transition-colors p-0.5 active:scale-95"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#54563f] hover:text-[#b34716] transition-colors p-0.5 active:scale-95"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-0.5">
              <Link
                href="/"
                className="font-heading text-base font-bold text-[#23241a] hover:text-[#5c6b2f] transition-colors tracking-tight block"
              >
                JindalChaitanya
              </Link>
              <p className="text-xs text-[#6b6e50] font-sans">
                {profileData.location}
              </p>
            </div>
          </div>

          {/* Center Column: Symmetrical Navigation */}
          <nav className="flex flex-wrap items-center justify-start md:justify-center gap-4 sm:gap-6 text-sm text-[#54563f] font-sans font-medium">
            <Link
              href="/about"
              className="hover:text-[#23241a] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#23241a] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="hover:text-[#23241a] transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#23241a] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Column: Email & Copyright */}
          <div className="space-y-1 text-left md:text-right flex flex-col md:items-end">
            <a
              href={`mailto:${profileData.email}`}
              className="text-xs sm:text-sm font-sans font-medium text-[#54563f] hover:text-[#5c6b2f] transition-colors block"
            >
              {profileData.email}
            </a>
            <p className="text-xs font-sans text-[#6b6e50]">
              &copy; {currentYear} {profileData.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
