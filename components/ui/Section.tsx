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
      className={`py-4 sm:py-6 md:py-8 ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {(label || heading || description) && (
          <header className={`mb-3 sm:mb-4 max-w-3xl ${alignClasses}`}>
            {label && (
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f] block mb-1.5">
                {label}
              </span>
            )}
            {heading && (
              <h2 className="text-[2rem] sm:text-[2.75rem] font-heading font-bold tracking-tight text-[#23241a] mb-2 leading-tight">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-[#54563f] text-lg sm:text-xl leading-relaxed font-sans">
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
