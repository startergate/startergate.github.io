import * as React from 'react';

import Image from '../images/image';
import people from '../../enums/people';

import './contributor.css';

const Contributor = ({ data }) => (
  <div className={'project-detail-contributor'}>
    <Image
      src={people[data.name].image}
      className={'project-detail-contributor-image'}
    />
    <div className={'project-detail-contributor-text'}>
      <div className={'project-detail-contributor-name'}>{data.name}</div>
      <div className={'project-detail-contributor-roles'}>
        {data.roles.join(', ')}
      </div>
    </div>
  </div>
);

export default Contributor;
