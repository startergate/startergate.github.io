const React = require('react');
const { AppProvider } = require('./src/contexts/AppContext');

exports.wrapRootElement = ({ element }) => {
  return React.createElement(AppProvider, null, element);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('link', {
      key: 'gfonts-preconnect',
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    }),
    React.createElement('link', {
      key: 'gfonts-preconnect-static',
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    }),
    React.createElement('link', {
      key: 'noto-serif-kr',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500&display=swap',
    }),
    React.createElement('script', {
      key: 'theme-init',
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var s=localStorage.getItem('theme');var sys=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||sys);}catch(e){}})();`,
      },
    }),
  ]);
};