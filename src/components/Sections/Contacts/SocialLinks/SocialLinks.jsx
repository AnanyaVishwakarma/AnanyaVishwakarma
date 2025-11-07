import React from 'react';
import SocialLink from './SocialLink/SocialLink';
import { PERSONAL_INFO, SOCIAL_ICONS } from '../../../../utils/constants';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <SOCIAL_ICONS.github className="social-icon" />,
      href: PERSONAL_INFO.github,
      label: "GitHub",
      color: "github"
    },
    {
      icon: <SOCIAL_ICONS.linkedin className="social-icon" />,
      href: PERSONAL_INFO.linkedin,
      label: "LinkedIn",
      color: "linkedin"
    },
    {
      icon: <SOCIAL_ICONS.leetcode className="social-icon" />,
      href: PERSONAL_INFO.leetcode || "#",
      label: "Leetcode",
      color: "leetcode"
    },
    {
      icon: <SOCIAL_ICONS.gmail className="social-icon" />,
      href: PERSONAL_INFO.gmail || "#",
      label: "Gmail", 
      color: "gmail"
    }
  ];

  return (
    <div className="social-links animate-fade-in-up">
      <h3 className="social-links__title">Connect with me</h3>
      <div className="social-links__list">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            {...link}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;