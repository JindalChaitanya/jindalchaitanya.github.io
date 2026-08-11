'use client';

import React, { useEffect, useRef, useState } from 'react';

type AnimateVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'blur';

interface AnimateInProps {
  children: React.ReactNode;
  variant?: AnimateVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

const variantClasses: Record<AnimateVariant, string> = {
  fadeUp: 'reveal-hidden',
  fadeLeft: 'reveal-left',
  fadeRight: 'reveal-right',
  scaleIn: 'reveal-scale',
  blur: 'reveal-blur',
};

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${variantClasses[variant]} ${
        isVisible ? 'reveal-visible' : ''
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
