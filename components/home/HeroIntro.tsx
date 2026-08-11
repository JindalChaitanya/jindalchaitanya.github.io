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
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length);
        setIsFading(false);
      }, 400);
    }, 3600);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative">
      {/* Gradient Glow Orb — decorative background */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,164,94,0.08)_0%,transparent_70%)] animate-glow-drift pointer-events-none select-none" aria-hidden="true" />

      <div className="relative space-y-6 max-w-4xl">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e22] bg-[#111113] text-xs font-mono text-[#a3a1a0] transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
          </span>
          <span>Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#e8e6e3] leading-[1.1] transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Hi, I&apos;m{' '}
          <span className="text-[#c8a45e]">Chaitanya</span>
          <span className="text-[#c8a45e]">.</span>
        </h1>

        {/* Role Rotation */}
        <div
          className={`text-xl sm:text-2xl md:text-3xl font-sans text-[#a3a1a0] font-light flex items-baseline flex-wrap gap-x-2 min-h-[1.4em] transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span>I&apos;m an</span>
          <span className="inline-grid grid-cols-1 grid-rows-1 relative items-baseline">
            {/* Invisible placeholder for width reservation */}
            <span className="col-start-1 row-start-1 opacity-0 select-none pointer-events-none pr-1">
              Machine Learning Engineer
            </span>
            {/* Animated visible phrase */}
            <span
              className={`col-start-1 row-start-1 text-[#e8e6e3] font-normal transition-all duration-400 ease-in-out border-b border-[#c8a45e]/30 pb-0.5 ${
                isFading
                  ? 'opacity-0 translate-y-1'
                  : 'opacity-100 translate-y-0'
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              {prefersReducedMotion ? PHRASES[0] : PHRASES[index]}
            </span>
          </span>
        </div>

        {/* Brief intro line */}
        <p
          className={`text-base sm:text-lg text-[#6b6966] max-w-2xl leading-relaxed font-sans transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Building production AI systems across GraphRAG retrieval, computer
          vision pipelines, and ML infrastructure — not notebooks that score
          well in isolation.
        </p>
      </div>
    </div>
  );
};
