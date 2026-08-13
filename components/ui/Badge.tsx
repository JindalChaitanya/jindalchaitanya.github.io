import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'muted' | 'outline' | 'success' | 'sage' | 'pop';
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
    'inline-flex items-center font-sans font-medium rounded-sm tracking-normal transition-colors duration-150 select-none';

  const variantStyles = {
    accent:
      'bg-[#f7f8e8] text-[#5c6b2f] border border-[#d6dba0]',
    muted:
      'bg-[#f7f8e8] text-[#54563f] border border-[#d6dba0]',
    outline:
      'bg-transparent text-[#54563f] border border-[#d6dba0]',
    success:
      'bg-[#e2e8a7] text-[#39421c] border border-[#d6dba0]',
    sage:
      'bg-[#e2e8a7] text-[#39421c] border border-[#d6dba0]',
    pop:
      'bg-[#f7f8e8] text-[#b34716] border border-[#d6dba0]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
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
