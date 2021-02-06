import * as React from 'react';

import LanguageColor from '../../enums/langs';

import './projectLanguage.css';

const LanguageBadge = ({ tag }) => {
  return (
    <span className={'project-language'}>
      <span
        className={'project-language-badge'}
        style={{
          backgroundColor: LanguageColor[tag] || '#ccc',
        }}
      />
      {tag}
    </span>
  );
};

export default LanguageBadge;
