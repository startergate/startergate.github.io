import { Link } from "gatsby"
import React from "react"

const SubMenu = ({ title, link }) => {
  return (
    <h5
      style={{
        marginBottom: "0",
        display: "inline",
        margin: "0px 10px",
      }}
    >
      <Link
        to={link}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {title}
      </Link>
    </h5>
  )
}

export default SubMenu
