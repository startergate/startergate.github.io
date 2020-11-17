import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SubMenu, ExternalSubMenu } from './subMenu';
import Profile from './images/profile';

import './header.css';

const Header = ({ siteTitle }) => (
  <header className="top-menu">
    <ul className="top-link">
      <li>
        <ExternalSubMenu title="GitHub" link="https://github.com/startergate" />
      </li>
      <li>
        <SubMenu title="Projects" link="/projects" />
      </li>
      <li>
        <SubMenu title="Conferences" link="/Conferences" />
      </li>
      <li>
        <SubMenu title="CV" link="/cv.pdf" />
      </li>
      <li>
        <a className="noLint" href="/">
          <Profile />
        </a>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
