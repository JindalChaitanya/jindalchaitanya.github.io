import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'muted' | 'outline' | 'success';
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
      'bg-[rgba(200,164,94,0.1)] text-[#c8a45e] border border-[rgba(200,164,94,0.2)]',
    muted:
      'bg-[#1e1e22] text-[#a3a1a0] border border-[#2a2a2e]',
    outline:
      'bg-transparent text-[#a3a1a0] border border-[#2a2a2e] hover:border-[#3d3b39]',
    success:
      'bg-[rgba(74,222,128,0.08)] text-[#4ade80] border border-[rgba(74,222,128,0.2)]',
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
