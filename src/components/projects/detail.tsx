import * as React from 'react';

import Image from '../images/image';
import FullImage from '../images/fullImage';
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
      <span
        className={'project-detail-exit'}
        onClick={() => {
          const overlay = document.querySelector('.project-overlay');
          overlay.dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
            })
          );
        }}
      >
        <svg viewBox="0 0 12 12" version="1.1">
          <line x1="1" y1="11" x2="11" y2="1" strokeWidth="1" />
          <line x1="1" y1="1" x2="11" y2="11" strokeWidth="1" />
        </svg>
      </span>
    </div>
    {data.contents ? (
      <div className="project-detail-content">
        {data.contents?.map(({ title, image, text }) => (
          <div className="project-detail-content-item">
            <h5>{title}</h5>
            <FullImage src={image} />
            {text}
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

export default ProjectDetail;
