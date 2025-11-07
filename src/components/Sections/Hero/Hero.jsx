import React from 'react';
import ProfileImage from '../../Common/ProfileImage/ProfileImage.jsx';
import HeroContent from './HeroContent/HeroContent';
import HeroButtons from './HeroButtons/HeroButtons';
import profileImage from './Profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero__container container">
        <div className="hero__content animate-fade-in-up">
          <ProfileImage 
            src={profileImage}
            alt="Ananya Vishwakarma - Profile"
            size="xl"
            fallback="AV"
          />
          <HeroContent />
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default Hero;