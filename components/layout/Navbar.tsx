'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';

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
          ? 'bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-[#1e1e22]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center group font-mono text-sm font-medium tracking-tight text-[#e8e6e3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] rounded-md px-1 py-0.5"
          >
            <span className="text-[#c8a45e] mr-1.5">◆</span>
            <span className="group-hover:text-[#c8a45e] transition-colors">
              chaitanya
            </span>
            <span className="text-[#6b6966] group-hover:text-[#a3a1a0] transition-colors">
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
                      ? 'text-[#c8a45e] bg-[rgba(200,164,94,0.06)]'
                      : 'text-[#a3a1a0] hover:text-[#e8e6e3] hover:bg-[#1e1e22]'
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
            className="md:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-[#a3a1a0] hover:text-[#e8e6e3] hover:bg-[#1e1e22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 top-16 z-40 bg-[#0a0a0b]/98 backdrop-blur-xl md:hidden flex flex-col transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Mobile Menu"
      >
        <div className="flex-1 flex flex-col justify-center px-8">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`text-3xl font-serif py-3 transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${
                pathname === '/'
                  ? 'text-[#c8a45e]'
                  : 'text-[#e8e6e3] hover:text-[#c8a45e]'
              }`}
              style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
            >
              Home
            </Link>
            {navLinks.map((link, i) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl font-serif py-3 transition-all duration-300 ${
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  } ${
                    isActive
                      ? 'text-[#c8a45e]'
                      : 'text-[#e8e6e3] hover:text-[#c8a45e]'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${(i + 2) * 60}ms` : '0ms',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className={`px-8 pb-10 border-t border-[#1e1e22] pt-6 transition-all duration-300 ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? '350ms' : '0ms' }}
        >
          <p className="text-xs font-mono text-[#6b6966]">
            Chaitanya Jindal • AI/ML Engineer • Noida, India
          </p>
        </div>
      </div>
    </header>
  );
};
