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
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;
        if (diff > 8) {
          // Scrolling down -> hide header
          setIsVisible(false);
        } else if (diff < -8) {
          // Scrolling up -> show header
          setIsVisible(true);
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible || isOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        hasScrolled || isOpen
          ? 'bg-[#e1e6b8] border-b border-[#d6dba0] shadow-xs'
          : 'bg-[#e1e6b8]/90 backdrop-blur-md border-b border-[#d6dba0]/50'
      }`}
    >
      <Container size="lg">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-heading text-xl sm:text-2xl font-bold text-[#23241a] hover:text-[#5c6b2f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c6b2f] rounded-md tracking-tight active:scale-[0.98]"
          >
            JindalChaitanya
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6 font-sans text-sm"
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
                  className={`py-1 link-draw transition-colors ${
                    isActive
                      ? 'text-[#5c6b2f] font-semibold active'
                      : 'text-[#54563f] hover:text-[#23241a]'
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
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#54563f] hover:text-[#23241a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c6b2f] active:scale-[0.95]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-[#e1e6b8] md:hidden flex flex-col justify-between transition-opacity duration-200 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Mobile Menu"
      >
        <div className="flex-1 flex flex-col justify-center px-8 py-6 bg-[#e1e6b8]">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-2xl font-heading font-bold py-2 border-b border-[#d6dba0] ${
                pathname === '/' ? 'text-[#5c6b2f]' : 'text-[#23241a]'
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
                  className={`text-2xl font-heading font-bold py-2 border-b border-[#d6dba0] ${
                    isActive ? 'text-[#5c6b2f]' : 'text-[#23241a]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
