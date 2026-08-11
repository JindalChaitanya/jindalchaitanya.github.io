import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'glass' | 'bordered';
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const baseStyles =
    'rounded-2xl transition-all duration-300 relative overflow-hidden';

  const variantStyles = {
    default:
      'glass-panel',
    interactive:
      'glass-panel-interactive cursor-pointer group',
    glass:
      'backdrop-blur-2xl bg-white/[0.04] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] inset-ring inset-ring-white/10',
    bordered:
      'bg-transparent border border-white/10 hover:border-[#c8a45e]/30',
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
