import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ size = 'md', children, className = '', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`font-medium rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 