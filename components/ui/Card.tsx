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
    'rounded-xl transition-all duration-300 relative';

  const variantStyles = {
    default:
      'bg-[#111113] border border-[#1e1e22]',
    interactive:
      'bg-[#111113] border border-[#1e1e22] hover:border-[#2a2a2e] hover:bg-[#151517] cursor-pointer group',
    glass:
      'backdrop-blur-xl bg-white/[0.03] border border-[#1e1e22] shadow-[0_0_40px_rgba(200,164,94,0.04)]',
    bordered:
      'bg-transparent border border-[#1e1e22] hover:border-[#2a2a2e]',
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
