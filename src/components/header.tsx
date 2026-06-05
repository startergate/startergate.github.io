import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';
import { SubMenu, ExternalSubMenu } from './subMenu';
import Profile from './images/profile';
import { useApp } from '../contexts/AppContext';

import './header.css';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useApp();

  return (
    <nav className={'top-menu'}>
      <ul className={'top-link'}>
        <li>
          <ExternalSubMenu title={'GitHub'} link={'https://github.com/startergate'} />
        </li>
        <li>
          <SubMenu title={'Projects'} link={'/projects'} />
        </li>
        <li>
          <ExternalSubMenu title={'Conferences'} link={'/Conferences'} />
        </li>
        <li>
          <SubMenu title={'CV'} link={'/#cv'} />
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="테마 전환">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
        <li>
          <Link className={'noLint'} to={'/'}>
            <Profile />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;