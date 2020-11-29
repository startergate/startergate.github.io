import * as React from 'react';

import Badge from '../images/badge';
import LanguageBadge from './projectLanguage';

import './simple.css';

const overlayDispatcher = (event: React.MouseEvent) => {
  const body = document.querySelector('body');
  const overlays = document.querySelector('.project-overlay');
  const target = document.getElementById(`overlay-${event.currentTarget.id}`);
  body.classList.add('disabled');
  overlays.classList.add('active');
  target.classList.add('active');
};

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card" id={data.id} onClick={overlayDispatcher}>
      <div className="project-card-name">
        <Badge className="project-card-badge" src={data.imgSrc} />
        {data.name}
      </div>
      <div className="project-card-description">{data.description}</div>
      <div className="project-card-tags">
        <LanguageBadge tag={data.tags[0]} />
        <span className="project-card-type">{data.type.join(', ')}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
