import React from 'react';
import './SocialLink.css';

const SocialLink = ({ icon, href, label, color }) => {
  return (
    <a 
      href={href}
      className={`social-link social-link--${color}`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialLink;