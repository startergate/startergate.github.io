import * as React from 'react';

import LanguageColor from '../../enums/langs';
import Image from '../images/image';

import './overlay.css';
import './detail.css';
import { graphql, useStaticQuery } from 'gatsby';

const ProjectDetail = ({ data }) => (
  <div className="overlay-item project-detail" id={'overlay-' + data.id}>
    <Image className="project-detail-icon" src={data.imgSrc} />
    <h3 className="project-detail-name">{data.name}</h3>
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

export default ProjectDetail;
