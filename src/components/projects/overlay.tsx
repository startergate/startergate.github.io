import * as React from 'react';
import ProjectDetail from './detail';

import './overlay.css';

const Overlay = ({ data }) => {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27 || event.which == 27) {
      const overlay = document.querySelector('.project-overlay');
      overlay.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }))
    }
  })

  return (
    <div
      className="project-overlay"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        event.currentTarget.classList.remove('active');
        document.querySelector('body').classList.remove('disabled');
        document.querySelectorAll('.overlay-item').forEach((element) => {
          element.classList.remove('active');
        });
      }}
    >
      {data.map((project) => (
        <ProjectDetail data={project}/>
      ))}
    </div>
  )
};

export default Overlay;
