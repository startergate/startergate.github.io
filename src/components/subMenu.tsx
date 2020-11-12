import { Link } from "gatsby"
import * as React from "react"

import './subMenu.css'

const SubMenu = ({ title, link }) => {
  return (
    <h5 className='subMenuTitle'>
      <Link to={link}>
        {title}
      </Link>
    </h5>
  );
};

export default SubMenu;
