import * as React from 'react';
import Thumbnail from '../images/thumbnail';

import './language.css';

const Language = ({ data }) => {
  return (
    <div className={'badge-lang-wrapper'} title={data.name}>
      <div
        className={`badge badge-lang${data.image.cover ? ' badge-lang-cover' : ''}`}
        style={{
          backgroundColor: data.image.cover ? undefined : (data.image.background || '#FFFFFF'),
        }}
      >
        <Thumbnail
          className={'badge-image badge-lang-image'}
          src={data.image.src}
          cover={data.image.cover}
        />
      </div>
      <span className={'badge-lang-name'}>{data.name}</span>
    </div>
  );
};

export default Language;
