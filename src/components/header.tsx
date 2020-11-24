import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';
import { SubMenu, ExternalSubMenu } from './subMenu';
import Profile from './images/profile';

import './header.css';

const Header = ({ siteTitle }) => (
  <nav className="top-menu">
    <ul className="top-link">
      <li>
        <ExternalSubMenu title="GitHub" link="https://github.com/startergate" />
      </li>
      <li>
        <SubMenu title="Projects" link="/projects" />
      </li>
      <li>
        <ExternalSubMenu title="Conferences" link="/Conferences" />
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
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
