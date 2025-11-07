import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle.jsx';
import AboutText from './AboutText/AboutText';
import QuickFacts from './QuickFacts/QuickFacts';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section section-alt">
      <div className="about__container container">
        <SectionTitle level={2}>About Me</SectionTitle>
        
        <div className="about__content">
          <AboutText />
          <QuickFacts />
        </div>
      </div>
    </section>
  );
};

export default About;