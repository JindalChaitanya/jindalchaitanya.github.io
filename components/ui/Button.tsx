import React from 'react';
import Link from 'next/link';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
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
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 min-h-[40px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6d46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f5] disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variantStyles = {
      primary:
        'bg-[#181816] text-[#faf9f5] hover:bg-[#33312e] active:bg-[#000000]',
      secondary:
        'bg-[#ffffff] text-[#181816] border border-[#e6e2da] hover:border-[#8c6d46] hover:text-[#8c6d46]',
      ghost:
        'bg-transparent text-[#5c5954] hover:text-[#181816] hover:bg-[#f4f2eb]',
      link: 'bg-transparent text-[#8c6d46] hover:text-[#705534] hover:underline p-0 min-h-0 h-auto font-sans border-0',
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
