import { Link } from "gatsby"
import * as React from "react"

import './subMenu.css'

export const SubMenu = ({ title, link }) => {
  return (
    <h5 className='subMenuTitle'>
      <Link to={link}>
        {title}
      </Link>
    </h5>
  );
};

export const ExternalSubMenu = ({ title, link }) => {
  return (
    <h5 className='subMenuTitle'>
      <a href={link}>
        {title}
      </a>
    </h5>
  );
};
