import * as React from 'react';
import Badge from '../images/badge';

import './external.css';

const External = ({ data }) => {
  return (
    <a
      className="badge-external"
      style={{
        backgroundColor: data.image.background || '#FFFFFF',
      }}
      href={data.link}
      title={data.type}
    >
      <Badge className="badge-external-image" src={data.image.src} />
      <span className="badge-external-id">{data.external_id}</span>
    </a>
  );
};

export default External;
