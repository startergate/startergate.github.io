import * as React from 'react';

import './simple.css';
import LanguageColor from '../../enums/langs';

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card" id={data.id}>
      <div className="project-card-name">
        <span className="project-card-image">image</span>
        {data.name}
      </div>
      <div className="project-card-description">{data.description}</div>
      <div className="project-card-tags">
        <span className="project-card-language">
          <span
            className="project-card-language-badge"
            style={{
              backgroundColor: LanguageColor[data.tags[0]],
            }}
          />
          {data.tags[0]}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
