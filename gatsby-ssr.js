const React = require('react');
const { AppProvider } = require('./src/contexts/AppContext');

exports.wrapRootElement = ({ element }) => {
  return React.createElement(AppProvider, null, element);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'theme-init',
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var s=localStorage.getItem('theme');var sys=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||sys);}catch(e){}})();`,
      },
    }),
  ]);
};