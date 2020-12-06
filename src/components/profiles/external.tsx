import * as React from 'react';
import Badge from '../images/badge';
import Thumbnail from '../images/thumbnail';

import Links from '../../enums/links';

import './badge.css';
import './external.css';

const Icon = ({ data }) => {
  return (
    <a
      className="badge-external noLint"
      href={data.link}
      title={data.type}
      target="_blank"
    >
      <span
        className="badge badge-external-icon"
        style={{
          backgroundColor: Links[data.type].background || '#FFFFFF',
        }}
      >
        <Thumbnail
          className="badge-image badge-external-icon-image"
          src={Links[data.type].src}
        />
      </span>
      <span className="badge-external-text">
        <h6>
          <span className="lint">{data.type}</span>
        </h6>
        <span className="lint">{data.external_id}</span>
      </span>
    </a>
  );
};

const Small = ({ data }) => (
  <a
    className="badge badge-external-small noLintAbsolute"
    style={{
      backgroundColor: Links[data.type].background || '#FFFFFF',
    }}
    href={data.link}
    title={data.type}
    target="_blank"
  >
    <Badge className="badge-external-small-image" src={Links[data.type].src} />
    <span
      className="badge-external-small-id"
      style={{
        color: Links[data.type].background ? '#FFFFFF' : '#000000',
      }}
    >
      {data.external_id}
    </span>
  </a>
);

export { Small, Icon };
