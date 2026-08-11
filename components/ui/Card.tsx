import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'paper' | 'bordered';
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
    'rounded-xl transition-all duration-200 relative overflow-hidden';

  const variantStyles = {
    default:
      'bg-[#ffffff] border border-[#e6e2da] shadow-[0_2px_8px_rgba(26,25,23,0.04)]',
    interactive:
      'bg-[#ffffff] border border-[#e6e2da] shadow-[0_2px_8px_rgba(26,25,23,0.04)] hover:border-[#c9c4b7] hover:shadow-[0_6px_16px_rgba(26,25,23,0.08)] cursor-pointer group',
    paper:
      'bg-[#f4f1ea] border border-[#e6e2da]',
    bordered:
      'bg-transparent border border-[#e6e2da] hover:border-[#c9c4b7]',
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
