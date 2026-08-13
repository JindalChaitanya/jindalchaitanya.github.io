'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type AnimateVariant = 'fadeUp' | 'fade' | 'fadeLeft' | 'fadeRight' | 'scaleIn';

interface AnimateInProps {
  children: React.ReactNode;
  variant?: AnimateVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 350,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

  const getVariantStyles = () => {
    switch (variant) {
      case 'fadeUp':
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3';
      case 'fadeLeft':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-3';
      case 'fadeRight':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-3';
      case 'scaleIn':
        return isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95';
      case 'fade':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
