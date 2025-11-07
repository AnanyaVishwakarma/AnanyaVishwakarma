import React from 'react';
import Card from '../../../Common/Card/Card';
import ProjectImage from '../ProjectImage/ProjectImage';
import TechTag from '../TechTag/TechTag';
import {Button} from '../../../Common/Button/Button.jsx';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';
import { SiGithub } from 'react-icons/si';

const ProjectCard = ({ project, index }) => {
  return (
    <Card 
      variant="glass" 
      hover 
      className={`project-card animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <ProjectImage 
        title={project.title}
        image={project.image}
      />
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__tech">
          {project.technologies.map((tech, techIndex) => (
            <TechTag key={techIndex} tech={tech} />
          ))}
        </div>
        
        <div className="project-card__actions">
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="button-icon" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <SiGithub className="button-icon" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;