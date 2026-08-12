'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type AnimateVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'blur';

interface AnimateInProps {
  children: React.ReactNode;
  variant?: AnimateVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
