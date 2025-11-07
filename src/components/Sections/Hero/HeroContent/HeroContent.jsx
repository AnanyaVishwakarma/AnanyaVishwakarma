import React from 'react';
import SectionTitle from '../../../Common/SectionTitle/SectionTitle';
import './HeroContent.css';

const HeroContent = () => {
  return (
    <div className="hero-content">
      <SectionTitle level={1} className="hero-content__title animate-fade-in-up">
        Ananya Vishwakarma
      </SectionTitle>
      <p className="hero-content__subtitle animate-fade-in-up">
        Software Developer
      </p>
      <p className="hero-content__description animate-fade-in-up">
        Passionate about building modern, efficient, and user-friendly applications that make technology feel effortless.
      </p>
    </div>
  );
};

export default HeroContent;