import React from 'react';
import './AboutText.css';

const AboutText = () => {
  return (
    <div className="about-text animate-fade-in-left">
      <p className="about-text__paragraph">
        I'm a dedicated software developer passionate about building efficient, scalable, and maintainable applications. 
        My journey began with a fascination for how technology solves real-world problems, and it has evolved into a mission 
        to create impactful digital solutions that empower users and businesses alike.
      </p>

      <p className="about-text__paragraph">
        I specialize in developing end-to-end software systems — from crafting clean, responsive front-end interfaces 
        to designing robust back-end architectures. I focus on writing clean, well-structured, and documented code while 
        staying aligned with the latest development practices and technologies.
      </p>

      <p className="about-text__paragraph">
        What sets me apart is my ability to integrate <strong>AI-driven solutions</strong> into the development process. 
        I leverage AI tools and models to accelerate development, automate workflows, enhance system scalability, 
        and generate data-driven insights — making projects smarter, faster, and more adaptive. 
        I see AI not as a shortcut, but as a powerful collaborator that amplifies creativity and efficiency.
      </p>
    </div>
  );
};

export default AboutText;
