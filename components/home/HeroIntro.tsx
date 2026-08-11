'use client';

import React, { useState, useEffect, useRef } from 'react';
import { profileData } from '@/data/profile';

const HERO_PHRASES = [
  'retrieval platforms.',
  'computer vision tools.',
  'dataset pipelines.',
  'production AI systems.',
  'useful software.',
];

const TYPING_SPEED_MS = 75;
const PAUSE_TYPED_MS = 2200;
const DELETING_SPEED_MS = 40;
const PAUSE_DELETED_MS = 350;

export const HeroIntro: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(HERO_PHRASES[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const firstName = profileData.name.split(' ')[0];
  const currentPhrase = HERO_PHRASES[phraseIndex];

  // 1. Detect mounted state & reduced motion preference
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

  // 2. Typewriter State Machine logic
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
    : currentPhrase.substring(0, charIndex);

  return (
    <div className="relative">
      <div className="relative space-y-6 max-w-3xl">
        {/* Contextual Status Tag */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e6e2da] bg-[#f4f1ea] text-xs font-sans text-[#57544e] transition-all duration-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#5e6653] inline-block" />
          <span>{profileData.statusText}</span>
        </div>

        {/* Main Title (Lora serif) */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#1a1917] leading-[1.1] transition-all duration-500 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Hi, I&apos;m <span className="text-[#8c6d46]">{firstName}</span>.
        </h1>

        {/* Typewriter Hero Sentence */}
        <div
          className={`text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1a1917] leading-snug tracking-tight min-h-[1.4em] flex flex-wrap items-baseline transition-all duration-500 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="mr-2">I build</span>
          {/* Animated Visual Layer (Hidden from screen reader repetition) */}
          <span className="font-sans font-normal text-[#8c6d46] inline-flex items-baseline" aria-hidden="true">
            <span>{displayedText}</span>
            {!isReducedMotion && (
              <span className="inline-block w-[2.5px] h-[0.85em] bg-[#8c6d46] ml-1.5 align-baseline animate-pulse rounded-full" />
            )}
          </span>
          {/* Accessible Screen Reader Static Summary */}
          <span className="sr-only">
            I build retrieval platforms, computer vision tools, dataset pipelines, and production AI systems.
          </span>
        </div>

        {/* Supporting Detail Statement (Space Grotesk sans) */}
        <p
          className={`text-base sm:text-lg text-[#57544e] max-w-2xl leading-relaxed font-sans transition-all duration-500 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          CDAC PGCP-AI Specialist (AIR 286) with hands-on industry experience at Droisys engineering automated dataset pipelines and object detection tools.
        </p>
      </div>
    </div>
  );
};