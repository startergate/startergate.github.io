import * as React from 'react';

import Image from '../images/image';
import people from '../../enums/people';

import './contributor.css';

const Contributor = ({ data }) => (
  <a
    className={'project-detail-contributor noLint'}
    href={people[data.name]?.link}
  >
    <Image
      src={people[data.name]?.image || 'profiles/default.png'}
      className={'project-detail-contributor-image'}
    />
    <div className={'project-detail-contributor-text'}>
      <div className={'project-detail-contributor-name'}>{data.name}</div>
      <div className={'project-detail-contributor-roles'}>
        {data.roles.join(', ')}
      </div>
    </div>
  </a>
);

export default Contributor;
