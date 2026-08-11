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
    'inline-flex items-center font-mono font-normal rounded-full tracking-normal backdrop-blur-md transition-colors duration-200 select-none';

  const variantStyles = {
    accent:
      'bg-[rgba(200,164,94,0.12)] text-[#c8a45e] border border-[rgba(200,164,94,0.25)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
    muted:
      'bg-white/[0.04] text-[#a8a5a0] border border-white/10 hover:border-white/20',
    outline:
      'bg-transparent text-[#a8a5a0] border border-white/10 hover:border-white/30',
    success:
      'bg-[rgba(74,222,128,0.1)] text-[#4ade80] border border-[rgba(74,222,128,0.25)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1',
    md: 'text-[11px] px-3 py-1 gap-1.5',
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
