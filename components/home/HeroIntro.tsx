'use client';

import React, { useState, useEffect } from 'react';
import { profileData } from '@/data/profile';

const PHRASES = [
  'AI Systems Engineer...',
  'GraphRAG Developer...',
  'Computer Vision Engineer...',
  'MLOps Practitioner...',
];

const TYPING_SPEED = 55;
const DELETING_SPEED = 30;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 350;

export const HeroIntro: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
    } else {
      const next = isDeleting
        ? currentPhrase.slice(0, displayText.length - 1)
        : currentPhrase.slice(0, displayText.length + 1);
      timeout = setTimeout(
        () => setDisplayText(next),
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, prefersReducedMotion]);

  const firstName = profileData.name.split(' ')[0];

  return (
    <div className="relative">
      {/* Gradient Glow Orb — decorative background */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,164,94,0.08)_0%,transparent_70%)] animate-glow-drift pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative space-y-6 max-w-4xl">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e22] bg-[#111113] text-xs font-mono text-[#a3a1a0] transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
          </span>
          <span>{profileData.statusText}</span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#e8e6e3] leading-[1.1] transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Hi, I&apos;m{' '}
          <span className="text-[#c8a45e]">{firstName}</span>
          <span className="text-[#c8a45e]">.</span>
        </h1>

        {/* Role Typewriter */}
        <div
          className={`text-xl sm:text-2xl md:text-3xl font-sans text-[#a3a1a0] font-light flex items-baseline flex-wrap gap-x-2 min-h-[1.4em] transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <span>I&apos;m a </span>
          <span className="text-[#e8e6e3] font-normal" aria-live="polite" aria-atomic="true">
            {displayText}
            <span
              className="inline-block w-[2px] h-[0.9em] bg-[#c8a45e] ml-1 align-middle animate-pulse"
              aria-hidden="true"
            />
          </span>
        </div>

        {/* Brief intro line */}
        <p
          className={`text-base sm:text-lg text-[#6b6966] max-w-2xl leading-relaxed font-sans transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {profileData.shortSummary}
        </p>
      </div>
    </div>
  );
};