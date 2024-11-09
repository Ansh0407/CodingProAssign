import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = ''
}) => {
  const baseStyles = "px-4 py-2 rounded-md transition-colors";
  const variantStyles = variant === 'primary' 
    ? "text-white bg-[#2B9FDB] hover:bg-blue-600" 
    : "text-[#2B9FDB] border border-[#2B9FDB] hover:bg-blue-50";

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;