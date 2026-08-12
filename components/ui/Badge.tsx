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
    'inline-flex items-center font-sans font-medium rounded-md tracking-normal transition-colors duration-150 select-none';

  const variantStyles = {
    accent:
      'bg-[#f4f2eb] text-[#8c6d46] border border-[#e6e2da]',
    muted:
      'bg-[#f4f2eb] text-[#5c5954] border border-[#e6e2da]',
    outline:
      'bg-transparent text-[#5c5954] border border-[#e6e2da]',
    success:
      'bg-[#f4f2eb] text-[#5e6653] border border-[#e6e2da]',
    sage:
      'bg-[#f4f2eb] text-[#5e6653] border border-[#e6e2da]',
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
