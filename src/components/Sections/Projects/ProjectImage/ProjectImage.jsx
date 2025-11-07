import React from "react";
import { Code } from "lucide-react";
import "./ProjectImage.css";

const ProjectImage = ({ title, image }) => {
  const imageSrc = image
    ? `${process.env.PUBLIC_URL}/images/${image}`
    : null;

  return (
    <div className="project-image">
      {image ? (
        <img
          src={imageSrc}
          alt={title}
          className="project-image__img"
          loading="lazy"
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
