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
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 min-h-[44px] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080a] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none active:scale-[0.98]';

    const variantStyles = {
      primary:
        'bg-[#c8a45e] text-[#08080a] font-semibold hover:bg-[#d4b36e] active:bg-[#b8943e] shadow-[0_0_25px_rgba(200,164,94,0.25)] border border-[rgba(255,255,255,0.2)]',
      secondary:
        'backdrop-blur-xl bg-white/[0.04] text-[#f3f2ef] border border-white/10 hover:border-[#c8a45e]/40 hover:bg-white/[0.08] hover:text-[#c8a45e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
      ghost:
        'bg-transparent text-[#a8a5a0] hover:text-[#f3f2ef] hover:bg-white/[0.06] backdrop-blur-md',
      link: 'bg-transparent text-[#c8a45e] hover:text-[#d4b36e] hover:underline p-0 min-h-0 h-auto font-sans tracking-normal border-0',
    };

    const sizeStyles = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
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
