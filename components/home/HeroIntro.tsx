'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { IconGithub, IconLinkedin, IconInstagram } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

const HERO_PHRASES = [
  'production AI systems.',
  'useful software.',
  'retrieval platforms.',
  'computer vision tools.',
];

const TYPING_SPEED_MS = 85;
const PAUSE_TYPED_MS = 3200;
const DELETING_SPEED_MS = 45;
const PAUSE_DELETED_MS = 400;

export const HeroIntro: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(HERO_PHRASES[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !mounted) return;

    const currentFullText = HERO_PHRASES[phraseIndex];

    if (isPaused) {
      const pauseDuration = isDeleting ? PAUSE_DELETED_MS : PAUSE_TYPED_MS;
      timerRef.current = setTimeout(() => {
        setIsPaused(false);
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
          setCharIndex(0);
        }
      }, pauseDuration);
    } else if (isDeleting) {
      if (charIndex > 0) {
        timerRef.current = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, DELETING_SPEED_MS);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex < currentFullText.length) {
        timerRef.current = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED_MS);
      } else {
        setIsPaused(true);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charIndex, isDeleting, isPaused, phraseIndex, isReducedMotion, mounted]);

  const displayedText = isReducedMotion
    ? HERO_PHRASES[0]
    : HERO_PHRASES[phraseIndex].substring(0, charIndex);

  return (
    <div className="space-y-4 max-w-3xl pt-4 sm:pt-8 pb-3">
      {/* Greeting */}
      <h1 className="text-[3.25rem] sm:text-[5.25rem] md:text-[6.75rem] font-heading font-bold text-[#181816] tracking-tight leading-[1.05]">
        Hi, I&apos;m <span className="text-[#8c6d46]">Chaitanya</span>
      </h1>

      {/* Rotating text - fixed height, no wrap, font size 25% larger than supporting sentence */}
      <div className="text-[1.5625rem] sm:text-[1.875rem] font-heading font-bold text-[#181816] leading-snug h-[2.2rem] sm:h-[2.75rem] overflow-hidden">
        <span className="whitespace-nowrap">
          <span className="mr-2">I build</span>
          <span className="text-[#8c6d46]" aria-hidden="true">
            {displayedText}
            {!isReducedMotion && (
              <span className="inline-block w-[2px] h-[0.8em] bg-[#8c6d46] ml-1 align-baseline opacity-70 animate-pulse" />
            )}
          </span>
        </span>
        <span className="sr-only">
          I build production AI systems, useful software, retrieval platforms, and computer vision tools.
        </span>
      </div>

      {/* Supporting credential line */}
      <p className="text-xl sm:text-2xl text-[#4a4843] font-sans leading-relaxed font-normal">
        CDAC PGCP-AI Specialist (AIR 286) with hands-on industry experience at Droisys engineering automated dataset pipelines and object detection tools.
      </p>

      {/* CTA Row: GitHub + LinkedIn icons, email, resume */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 text-base sm:text-lg font-sans">
        <a
          href={profileData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#4a4843] hover:text-[#181816] transition-colors"
          aria-label="GitHub"
        >
          <IconGithub className="w-5 h-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#4a4843] hover:text-[#181816] transition-colors"
          aria-label="LinkedIn"
        >
          <IconLinkedin className="w-5 h-5" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href={profileData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#4a4843] hover:text-[#181816] transition-colors"
          aria-label="Instagram"
        >
          <IconInstagram className="w-5 h-5 text-[#8c6d46]" />
          <span className="text-sm font-medium">Instagram</span>
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-1.5 text-[#4a4843] hover:text-[#181816] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#8c6d46]" />
          <span className="text-sm font-medium">{profileData.email}</span>
        </a>
        <Link
          href="/resume"
          className="text-[#4a4843] hover:text-[#181816] transition-colors font-medium text-sm"
        >
          Resume →
        </Link>
      </div>
    </div>
  );
};