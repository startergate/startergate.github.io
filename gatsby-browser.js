const React = require('react');
const { AppProvider } = require('./src/contexts/AppContext');

exports.wrapRootElement = ({ element }) => {
  return React.createElement(AppProvider, null, element);
};