import * as React from 'react';

import './simple.css'

const ProjectCard = ({data}) => {
  return (
    <div className='project-card' id={data.id}>
      <div className='project-card-name'>{data.name}</div>
      <div className='project-card-description'>{data.description}</div>
    </div>
  )
}

export default ProjectCard