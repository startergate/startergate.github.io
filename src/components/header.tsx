import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SubMenu, ExternalSubMenu } from './subMenu';
import Profile from './images/profile';

import './header.css';
import { Link } from 'gatsby';

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
        <SubMenu title="CV" link="/#cv" />
      </li>
      <li>
        <Link className="noLint" to="/">
          <Profile />
        </Link>
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
