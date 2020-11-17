import * as React from 'react';
import Thumbnail from '../images/thumbnail';

import './language.css';

const JavaScript = () => {
  return (
    <div
      className="badge-lang"
      style={{
        backgroundColor: '#f4de50',
      }}
    >
      <Thumbnail src="langs/javascript.png" />
    </div>
  );
};

const TypeScript = () => {
  return (
    <div
      className="badge-lang"
      style={{
        backgroundColor: '#4178ba',
      }}
    >
      <Thumbnail src="langs/typescript.png" />
    </div>
  );
};

const Python = () => {
  return (
    <div className="badge-lang">
      <Thumbnail src="langs/python.png" />
    </div>
  );
};

export { JavaScript, TypeScript, Python };
