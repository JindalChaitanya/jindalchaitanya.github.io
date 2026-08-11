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
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

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
