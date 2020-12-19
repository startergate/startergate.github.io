import * as React from 'react';
import { navigate } from 'gatsby';

import ProjectDetail from './detail';

import './overlay.css';

const Overlay = ({ data, ...props }) => {
  /* document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27 || event.which == 27) {
      const overlay = document.querySelector('.project-overlay');
      overlay.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }))
    }
  });*/

  return (
    <div
      className="project-overlay"
      onClick={async (event) => {
        event.persist();
        if (event.target !== event.currentTarget) return;
        event.currentTarget.classList.remove('active');
        document.querySelector('body').classList.remove('disabled');
        document.querySelectorAll('.overlay-item').forEach((element) => {
          element.classList.remove('active');
        });
        if (!['/', '/projects/'].includes(window.location.pathname))
          return navigate('/projects/');
      }}
    >
      {data.map((project, index) => (
        <ProjectDetail data={project} key={index} />
      ))}
    </div>
  );
};

export default Overlay;
