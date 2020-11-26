import { Link } from 'gatsby';
import * as React from 'react';

import './subMenu.css';

export const SubMenu = ({ title, link }) => {
  return (
    <h5 className="submenu-title">
      <Link to={link}>{title}</Link>
    </h5>
  );
};

export const ExternalSubMenu = ({ title, link }) => {
  return (
    <h5 className="submenu-title">
      <a href={link} target="_blank">{title}</a>
    </h5>
  );
};
