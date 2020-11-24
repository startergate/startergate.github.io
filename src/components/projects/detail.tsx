import * as React from 'react';

import Image from '../images/image';
import LanguageBadge from './projectLanguage';

import './overlay.css';
import './detail.css';

const ProjectDetail = ({ data }) => (
  <div className="overlay-item project-detail" id={'overlay-' + data.id}>
    <div className="project-detail-title">
      <Image className="project-detail-icon" src={data.imgSrc} />
      <h2 className="project-detail-name">{data.name}</h2>
      <div className="project-card-description">{data.description}</div>
      <div className="project-card-tags">
        {data.tags.map((value) => (
          <LanguageBadge tag={value} />
        ))}
      </div>
    </div>
    {data.contents ? (
      <div className="project-detail-content">
        {data.contents?.map(({ title, text }) => (
          <div className="project-detail-content-item">
            <h5>{title}</h5>
            {text}
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

export default ProjectDetail;
