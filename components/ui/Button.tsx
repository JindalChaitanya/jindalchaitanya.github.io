import React from 'react';
import Link from 'next/link';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'pop';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      icon,
      iconPosition = 'left',
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 min-h-[40px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c6b2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e1e6b8] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 select-none';

    const variantStyles = {
      primary:
        'bg-[#5c6b2f] text-[#fdfdf5] hover:bg-[#485424] active:bg-[#39421c] shadow-xs',
      secondary:
        'bg-[#f7f8e8] text-[#23241a] border border-[#d6dba0] hover:border-[#5c6b2f] hover:text-[#5c6b2f]',
      ghost:
        'bg-transparent text-[#54563f] hover:text-[#23241a] hover:bg-[#f7f8e8]',
      pop:
        'bg-[#b34716] text-[#fdfdf5] hover:bg-[#963b12] active:bg-[#7a2f0e] shadow-xs',
      link: 'bg-transparent text-[#5c6b2f] hover:text-[#485424] hover:underline p-0 min-h-0 h-auto font-sans border-0',
    };

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-5 py-2.5 gap-2.5',
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${
      variant !== 'link' ? sizeStyles[size] : ''
    } ${className}`;

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={combinedClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
