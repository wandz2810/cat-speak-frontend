import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-800 shadow-md hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

