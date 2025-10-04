import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-lg p-6
        ${hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;

