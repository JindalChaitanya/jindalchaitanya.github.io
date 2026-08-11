import React from 'react';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  heading?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  align?: 'left' | 'center';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Section: React.FC<SectionProps> = ({
  label,
  heading,
  description,
  children,
  className = '',
  id,
  align = 'left',
  containerSize = 'lg',
  ...props
}) => {
  const alignClasses =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 md:py-24 ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {(label || heading || description) && (
          <header className={`mb-10 sm:mb-14 max-w-3xl ${alignClasses}`}>
            {label && (
              <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e] block mb-3">
                {label}
              </span>
            )}
            {heading && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight text-[#e8e6e3] mb-4 leading-tight">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-[#a3a1a0] text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};
