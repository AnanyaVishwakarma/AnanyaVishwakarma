import React from 'react';
import './AboutText.css';

const AboutText = () => {
  return (
    <div className="about-text animate-fade-in-left">
      <p className="about-text__paragraph">
        I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. 
        My journey in tech started with curiosity and has evolved into a career focused on building 
        user-centric solutions that make a difference.
      </p>
      <p className="about-text__paragraph">
        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
        or sharing knowledge with the developer community. I believe in the power of collaboration and 
        continuous learning.
      </p>
      <p className="about-text__paragraph">
        My approach to development combines technical expertise with creative problem-solving, 
        ensuring that every project I work on delivers both exceptional functionality and outstanding user experience.
      </p>
    </div>
  );
};

export default AboutText;