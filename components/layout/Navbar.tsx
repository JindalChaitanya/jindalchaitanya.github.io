'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e1da] bg-[#faf8f5]/90 backdrop-blur-md transition-all">
      <Container size="lg">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Brand Name */}
          <Link
            href="/"
            className="flex items-center group font-serif text-lg sm:text-xl font-normal tracking-tight text-[#1a1918] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a4a2e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5] rounded-md px-1 py-0.5"
          >
            <span className="group-hover:text-[#7a4a2e] transition-colors">Chaitanya Jindal</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-sans text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-[#1a1918] border-b-2 border-[#7a4a2e] font-semibold'
                      : 'text-[#57524d] hover:text-[#1a1918]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Button
              href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
              isExternal
              variant="secondary"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-md text-[#242220] hover:bg-[#f4f0e9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a4a2e]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-6 h-6 text-[#1a1918]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-[#faf8f5] border-b border-[#e6e1da] md:hidden flex flex-col justify-between p-6 overflow-y-auto"
          aria-label="Mobile Menu"
        >
          <div className="space-y-6">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`flex items-center min-h-[44px] text-lg font-serif ${
                  pathname === '/' ? 'text-[#7a4a2e] font-semibold' : 'text-[#242220]'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center min-h-[44px] text-lg font-serif ${
                      isActive ? 'text-[#7a4a2e] font-semibold' : 'text-[#242220]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#e6e1da] space-y-4">
            <div className="text-xs font-mono text-[#807a75]">
              Chaitanya Jindal • Noida, India
            </div>
            <Button
              href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
              isExternal
              variant="primary"
              size="md"
              icon={<FileText className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Resume (PDF)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
