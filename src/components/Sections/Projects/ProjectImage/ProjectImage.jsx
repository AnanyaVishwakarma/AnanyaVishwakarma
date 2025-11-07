import React from 'react';
import { Code } from 'lucide-react';
import './ProjectImage.css';

const ProjectImage = ({ title, image }) => {
  return (
    <div className="project-image">
      {image ? (
        <img 
          src={image} 
          alt={title}
          className="project-image__img"
        />
      ) : (
        <div className="project-image__placeholder">
          <Code className="project-image__icon" />
        </div>
      )}
    </div>
  );
};

export default ProjectImage;