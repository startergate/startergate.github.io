import * as React from 'react';

import './simple.css';
import LanguageColor from '../../enums/langs';
import Badge from '../images/badge';
import ProjectDetail from './detail';
import * as ReactDOM from 'react-dom';
import LanguageBadge from './projectLanguage';

const overlayDispatcher = (event: React.MouseEvent) => {
  const overlayHandler = document.querySelector('.overlay');
  overlayHandler.innerHTML = '';
  ReactDOM.render(
    <ProjectDetail id={event.currentTarget.id} />,
    overlayHandler
  );
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
      </div>
    </div>
  );
};

export default ProjectCard;
