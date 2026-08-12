import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'paper' | 'bordered' | 'ghost';
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
  const baseStyles = 'rounded-lg transition-all duration-200 relative';

  const variantStyles = {
    default:
      'bg-[#ffffff] border border-[#e6e2da]',
    interactive:
      'bg-[#ffffff] border border-[#e6e2da] hover:border-[#8c6d46] cursor-pointer group',
    paper:
      'bg-[#f4f2eb] border border-[#e6e2da]',
    bordered:
      'bg-transparent border border-[#e6e2da] hover:border-[#c9c4b7]',
    ghost:
      'bg-transparent border-0',
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
