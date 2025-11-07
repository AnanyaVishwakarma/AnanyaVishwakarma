import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECT } from '../../../utils/constants.js';
import './Projects.css';

const Projects = () => {
  const featuredProjects = PROJECT.filter(project => project.featured);

  return (
    <section id="projects" className="projects section section-alt">
      <div className="projects__container container">
        <SectionTitle level={2}>Featured Projects</SectionTitle>
        
        <div className="projects__grid animate-stagger">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        {PROJECT.length > featuredProjects.length && (
          <div className="projects__cta">
            <p className="projects__cta-text">
              Want to see more? Check out my <a href="https://github.com/AnanyaVishwakarma">GitHub</a>  for additional projects and contributions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;