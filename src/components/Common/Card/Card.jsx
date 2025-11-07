import React from "react";
import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    className = '',
    ...props
}) => {
    const baseClass = 'card';
    const variantClass = `card--${variant}`;
    const hoverClass = hover ? 'card--hover' : '';

    const cardClass = `${baseClass} ${variantClass} ${hoverClass} ${className}`.trim();
    return(
        <div className={cardClass} {...props}>
            {children}
        </div>
    );
};

export default Card;