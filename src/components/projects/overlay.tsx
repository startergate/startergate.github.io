import * as React from 'react';
import ProjectDetail from './detail';

import './overlay.css';

const Overlay = ({ data }) => (
  <div
    className="project-overlay"
    onClick={(event) => {
      event.currentTarget.classList.remove('active');
      document.querySelector('body').classList.remove('disabled');
      document.querySelectorAll('.overlay-item').forEach((element) => {
        element.classList.remove('active');
      });
    }}
  >
    {data.map((project) => (
      <ProjectDetail data={project} />
    ))}
  </div>
);

export default Overlay;
