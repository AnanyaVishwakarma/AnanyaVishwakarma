import React from "react";
import './SectionTitle.css';

 const SectionTitle = ({
    children,
    level,
    align = 'center',
    className = '',
    ...props
}) => {
    const Tag = `h${level}`;
    const baseClass = 'section-title';
    const alignClass = `section-title--${align}`;
    
    const titleClass = `${baseClass} ${alignClass} gradient-text ${className}`.trim();

    return(
        <Tag className={titleClass} {...props}>
            {children}
        </Tag>
    );
};
export default SectionTitle;