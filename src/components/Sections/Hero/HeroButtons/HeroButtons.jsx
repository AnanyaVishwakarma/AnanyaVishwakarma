import React from 'react';
import { Button } from '../../../Common/Button/Button.jsx';
import { useScrollTo } from '../../../../Hooks/useScrollTo';
import './HeroButtons.css';
import '../ResumeDownload/ResumeDownload.jsx';
import ResumeDownload from '../ResumeDownload/ResumeDownload.jsx';

const HeroButtons = () => {
  const scrollTo = useScrollTo();

  const handleViewProjects = () => {
    scrollTo('projects');
  };

  const handleGetInTouch = () => {
    scrollTo('contact');
  };


  return (
    <div className="hero-buttons animate-fade-in-up">
      <Button 
        variant="primary" 
        size="lg"
        onClick={handleViewProjects}
      >
        View Projects
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={handleGetInTouch}
      >
        Get in Touch
      </Button>
      
      <ResumeDownload />
    </div>
  );
};

export default HeroButtons;