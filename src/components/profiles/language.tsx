import * as React from 'react';
import Thumbnail from '../images/thumbnail';

import './language.css';

const Language = ({ data }) => {
  return (
    <div
      className="badge-lang"
      style={{
        backgroundColor: data.image.background || '#FFFFFF',
      }}
    >
      <Thumbnail src={data.image.src} />
    </div>
  );
};

export default Language;
