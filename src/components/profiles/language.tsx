import * as React from 'react';
import Thumbnail from '../images/thumbnail';

import './language.css';

const Language = ({ data }) => {
  return (
    <div
      className="badge badge-lang"
      style={{
        backgroundColor: data.image.background || '#FFFFFF',
      }}
      title={data.name}
    >
      <Thumbnail
        className="badge-image badge-lang-image"
        src={data.image.src}
      />
    </div>
  );
};

export default Language;
