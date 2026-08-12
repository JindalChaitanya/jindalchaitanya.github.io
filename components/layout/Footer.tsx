import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { IconGithub, IconLinkedin, IconInstagram } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e6e2da] bg-[#faf9f5] py-6 sm:py-8 mt-6 sm:mt-10">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Identity */}
          <div className="space-y-1">
            <Link
              href="/"
              className="font-heading text-base font-bold text-[#181816] hover:text-[#8c6d46] transition-colors tracking-tight"
            >
              JindalChaitanya
            </Link>
            <p className="text-xs text-[#737067] font-sans">
              {profileData.location}
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm text-[#5c5954] font-sans">
            <Link
              href="/about"
              className="hover:text-[#181816] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#181816] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resume"
              className="hover:text-[#181816] transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#181816] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Social + Copyright */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#5c5954] hover:text-[#181816] transition-colors p-1"
              >
                <IconGithub className="w-4.5 h-4.5" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#5c5954] hover:text-[#181816] transition-colors p-1"
              >
                <IconLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#5c5954] hover:text-[#8c6d46] transition-colors p-1"
              >
                <IconInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs font-sans text-[#5c5954] hover:text-[#8c6d46] transition-colors"
              >
                {profileData.email}
              </a>
            </div>
            <p className="text-xs font-sans text-[#737067]">
              © {currentYear} {profileData.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
