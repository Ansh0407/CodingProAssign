import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
            {children}
        </div>
    );
};

export default Card;