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
      setHasScrolled(window.scrollY > 15);
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
          ? 'backdrop-blur-2xl bg-[#08080a]/75 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Brand Logo / Mark */}
          <Link
            href="/"
            className="flex items-center group font-mono text-sm font-medium tracking-tight text-[#f3f2ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] rounded-xl px-2 py-1 transition-all"
          >
            <span className="text-[#c8a45e] mr-2 text-base group-hover:scale-125 transition-transform duration-300">
              ◆
            </span>
            <span className="group-hover:text-[#c8a45e] transition-colors font-semibold">
              chaitanya
            </span>
            <span className="text-[#73706b] group-hover:text-[#a8a5a0] transition-colors">
              .dev
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1.5 font-sans text-sm p-1.5 rounded-2xl glass-panel"
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
                  className={`relative px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-[#c8a45e] bg-[rgba(200,164,94,0.12)] border border-[rgba(200,164,94,0.25)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] font-medium'
                      : 'text-[#a8a5a0] hover:text-[#f3f2ef] hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-3 min-w-[44px] min-h-[44px] rounded-xl text-[#a8a5a0] hover:text-[#f3f2ef] glass-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] transition-all"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-5 h-5 text-[#f3f2ef]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay — iOS 26 / Android 17 Glass Sheet */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 top-16 sm:top-20 z-40 backdrop-blur-3xl bg-[#08080a]/95 border-t border-white/10 md:hidden flex flex-col justify-between transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-label="Mobile Menu"
      >
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`text-3xl font-serif py-3 border-b border-white/10 transition-all duration-300 ${
                pathname === '/'
                  ? 'text-[#c8a45e] font-normal pl-2'
                  : 'text-[#f3f2ef] hover:text-[#c8a45e]'
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
                  className={`text-3xl font-serif py-3 border-b border-white/10 transition-all duration-300 ${
                    isActive
                      ? 'text-[#c8a45e] font-normal pl-2'
                      : 'text-[#f3f2ef] hover:text-[#c8a45e]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-8 pb-10 border-t border-white/10 pt-6 space-y-4">
          <p className="text-xs font-mono text-[#73706b]">
            {profileData.name} • {profileData.location}
          </p>
          <a
            href={profileData.resumeExportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#c8a45e] text-[#08080a] font-semibold text-sm hover:bg-[#d4b36e] transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
