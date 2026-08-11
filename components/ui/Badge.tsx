import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'muted' | 'outline' | 'success' | 'sage';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'muted',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-mono font-normal rounded-md tracking-normal transition-colors duration-150 select-none';

  const variantStyles = {
    accent:
      'bg-[rgba(140,109,70,0.08)] text-[#8c6d46] border border-[rgba(140,109,70,0.2)]',
    muted:
      'bg-[#f4f1ea] text-[#57544e] border border-[#e6e2da]',
    outline:
      'bg-transparent text-[#57544e] border border-[#e6e2da] hover:border-[#c9c4b7]',
    success:
      'bg-[rgba(94,102,83,0.1)] text-[#5e6653] border border-[rgba(94,102,83,0.25)]',
    sage:
      'bg-[rgba(94,102,83,0.1)] text-[#5e6653] border border-[rgba(94,102,83,0.25)]',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-[11px] px-2.5 py-1 gap-1.5',
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
