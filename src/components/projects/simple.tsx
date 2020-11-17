import * as React from 'react';

import './simple.css';

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card" id={data.id}>
      <div className="project-card-name">
        <span className="project-card-image">image</span>
        {data.name}
      </div>
      <div className="project-card-description">{data.description}</div>
      <div className="project-card-tags">
        <span className="project-card-language">{data.tags[0]}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
