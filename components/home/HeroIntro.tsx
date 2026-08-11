'use client';

import React, { useState, useEffect } from 'react';

const PHRASES = [
  'AI / ML Engineer',
  'Computer Vision Engineer',
  'GraphRAG Developer',
  'Machine Learning Engineer',
];

export const HeroIntro: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length);
        setIsFading(false);
      }, 400); // 400ms fade duration
    }, 3600); // 3.6s display time

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#1a1918] leading-[1.15]">
        Hi, I&apos;m Chaitanya.
      </h1>

      <div className="text-2xl sm:text-4xl font-serif text-[#7a4a2e] font-normal flex items-baseline flex-wrap gap-x-2 min-h-[1.4em]">
        <span>I&apos;m an</span>
        <span className="inline-grid grid-cols-1 grid-rows-1 relative items-baseline">
          {/* Invisible placeholder for width reservation to prevent layout jumping */}
          <span className="col-start-1 row-start-1 opacity-0 select-none pointer-events-none pr-1">
            Machine Learning Engineer
          </span>
          {/* Animated visible phrase */}
          <span
            className={`col-start-1 row-start-1 transition-all duration-400 ease-in-out border-b border-[#7a4a2e]/40 pb-0.5 ${
              isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            {prefersReducedMotion ? PHRASES[0] : PHRASES[index]}
          </span>
        </span>
      </div>
    </div>
  );
};
