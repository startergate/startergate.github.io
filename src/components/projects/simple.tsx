import * as React from 'react';

import './simple.css';
import LanguageColor from '../../enums/langs';
import Badge from '../images/badge';

const ProjectCard = ({ data }) => {
  console.log(data.imgSrc);

  return (
    <div className="project-card" id={data.id}>
      <div className="project-card-name">
        <Badge className="project-card-badge" src={data.imgSrc} />
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
