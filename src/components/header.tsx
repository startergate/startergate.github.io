import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import SubMenu from "./subMenu"
import Profile from "./images/profile";

import './header.css'

const Header = ({ siteTitle }) => (
  <header className="topMenu">
      <ul className="topLink">
        <li><SubMenu title="GitHub" link="https://github.com/startergate" /></li>
        <li><SubMenu title="Projects" link="/projects" /></li>
        <li><SubMenu title="Conferences" link="/Conferences" /></li>
        <li><SubMenu title="CV" link="/cv.pdf" /></li>
        <li><a className="noLint" href="/"><Profile /></a></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
