'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { profileData } from '@/data/profile';

export const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? 'bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e6e2da] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center group font-sans text-base font-semibold tracking-tight text-[#1a1917] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6d46] rounded-lg px-1.5 py-1 transition-colors"
          >
            <span className="group-hover:text-[#8c6d46] transition-colors">
              Chaitanya Jindal
            </span>
            <span className="text-[#6e6a62] text-xs font-mono ml-2 group-hover:text-[#8c6d46] transition-colors">
              .dev
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 font-sans text-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#8c6d46] bg-[rgba(140,109,70,0.08)] font-medium'
                      : 'text-[#57544e] hover:text-[#1a1917] hover:bg-[#f4f1ea]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-[#57544e] hover:text-[#1a1917] hover:bg-[#f4f1ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6d46] transition-colors border border-[#e6e2da]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-5 h-5 text-[#1a1917]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer — Warm Editorial Light Overlay */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 top-16 sm:top-20 z-40 bg-[#fbf9f5] border-t border-[#e6e2da] md:hidden flex flex-col justify-between transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        aria-label="Mobile Menu"
      >
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`text-3xl font-serif py-3 border-b border-[#e6e2da] transition-colors ${
                pathname === '/'
                  ? 'text-[#8c6d46] font-normal pl-1'
                  : 'text-[#1a1917] hover:text-[#8c6d46]'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl font-serif py-3 border-b border-[#e6e2da] transition-colors ${
                    isActive
                      ? 'text-[#8c6d46] font-normal pl-1'
                      : 'text-[#1a1917] hover:text-[#8c6d46]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-8 pb-10 border-t border-[#e6e2da] pt-6 space-y-4">
          <p className="text-xs font-mono text-[#8c8880]">
            {profileData.name} • {profileData.location}
          </p>
          <a
            href={profileData.resumeExportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#1a1917] text-[#fbf9f5] font-semibold text-sm hover:bg-[#33312e] transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
