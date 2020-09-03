import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"
import SubMenu from "./subMenu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3D414D`,
      marginBottom: `1.45rem`,
      padding: `auto`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        width: "50%",
        margin: `0 auto`,
        maxWidth: 480,
        padding: `1.45rem 1.0875rem`,
        display: `inline-block`,
        textAlign: `left`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        width: "50%",
        margin: `0 auto`,
        maxWidth: 480,
        padding: `1.45rem 1.0875rem`,
        display: "inline-block",
        textAlign: "right",
      }}
    >
      <SubMenu title="GitHub" link="https://github.com/startergate" />
      <SubMenu title="Projects" link="/project" />
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
