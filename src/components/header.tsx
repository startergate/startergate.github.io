import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import SubMenu from "./subMenu"
import Profile from "./images/profile";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
      padding: `auto`,
      textAlign: `center`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        width: `100%`,
        padding: `0.5rem 0.5rem`,
        display: "inline-block",
        textAlign: "right",
        lineHeight: `100%`,
        right: 0
      }}
    >
      <SubMenu title="GitHub" link="https://github.com/startergate" />
      <SubMenu title="Projects" link="/project" />
      <Profile />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
