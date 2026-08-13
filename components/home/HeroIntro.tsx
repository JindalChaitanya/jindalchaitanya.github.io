'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { IconGithub, IconLinkedin, IconInstagram } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

const HERO_PHRASES = [
  'production AI systems.',
  'useful software.',
  'retrieval platforms.',
  'computer vision tools.',
];

const BASE_TYPING_SPEED_MS = 80;
const BASE_DELETING_SPEED_MS = 40;
const PAUSE_TYPED_MS = 3200;
const PAUSE_DELETED_MS = 450;

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
        // Random slight variance on backspace
        const jitter = Math.floor(Math.random() * 20) - 10;
        const deleteDelay = Math.max(25, BASE_DELETING_SPEED_MS + jitter);

        timerRef.current = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, deleteDelay);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex < currentFullText.length) {
        // Human-like timing irregularity (±15-30ms)
        const jitter = Math.floor(Math.random() * 50) - 25;
        let nextDelay = Math.max(45, BASE_TYPING_SPEED_MS + jitter);

        // Occasional mid-word hesitation (~12% chance when mid-word)
        const isMidWord = charIndex > 2 && charIndex < currentFullText.length - 2;
        const shouldHesitate = isMidWord && Math.random() < 0.12;

        if (shouldHesitate) {
          nextDelay += Math.floor(Math.random() * 180) + 140; // 140-320ms human hesitation
        }

        timerRef.current = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, nextDelay);
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
      <h1 className="text-[3.25rem] sm:text-[5.25rem] md:text-[6.75rem] font-heading font-bold text-[#23241a] tracking-tight leading-[1.05]">
        Hi, I&apos;m <span className="text-[#5c6b2f]">Chaitanya</span>
      </h1>

      {/* Rotating text - fixed height, no wrap */}
      <div className="text-[1.5625rem] sm:text-[1.875rem] font-heading font-bold text-[#23241a] leading-snug h-[2.2rem] sm:h-[2.75rem] overflow-hidden">
        <span className="whitespace-nowrap">
          <span className="mr-2">I build</span>
          <span className="text-[#5c6b2f]" aria-hidden="true">
            {displayedText}
            {!isReducedMotion && (
              <span className="inline-block w-[3px] h-[0.9em] bg-[#5c6b2f] ml-1 align-baseline terminal-caret" />
            )}
          </span>
        </span>
        <span className="sr-only">
          I build production AI systems, useful software, retrieval platforms, and computer vision tools.
        </span>
      </div>

      {/* Supporting credential line */}
      <p className="text-xl sm:text-2xl text-[#54563f] font-sans leading-relaxed font-normal">
        AI Systems Engineer with hands-on industry experience at Droisys engineering automated dataset pipelines, regulatory GraphRAG retrieval, and computer vision tools.
      </p>

      {/* CTA Row */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 text-base sm:text-lg font-sans">
        <a
          href={profileData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#54563f] hover:text-[#23241a] transition-all active:scale-[0.97]"
          aria-label="GitHub"
        >
          <IconGithub className="w-5 h-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#54563f] hover:text-[#23241a] transition-all active:scale-[0.97]"
          aria-label="LinkedIn"
        >
          <IconLinkedin className="w-5 h-5" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href={profileData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#54563f] hover:text-[#b34716] transition-all active:scale-[0.97]"
          aria-label="Instagram"
        >
          <IconInstagram className="w-5 h-5 text-[#b34716]" />
          <span className="text-sm font-medium">Instagram</span>
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-1.5 text-[#54563f] hover:text-[#5c6b2f] transition-all active:scale-[0.97]"
        >
          <Mail className="w-4 h-4 text-[#5c6b2f]" />
          <span className="text-sm font-medium">{profileData.email}</span>
        </a>
        <Link
          href="/resume"
          className="inline-flex items-center gap-1 text-[#5c6b2f] hover:text-[#485424] font-semibold text-sm link-draw active:scale-[0.97] transition-all"
        >
          <span>Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};