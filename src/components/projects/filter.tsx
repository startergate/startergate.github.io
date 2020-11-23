import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import toggle from '../../util/classToggler';

import './filter.css';

const Filter = ({ filterHandler }) => {
  const data = useStaticQuery(graphql`
    query getProjectTags {
      allProjectsJson {
        distinct(field: tags)
      }
    }
  `).allProjectsJson.distinct;

  const updateSelected = () => {
    let selected: any = document.querySelectorAll(
      '.project-filter-choice-activated'
    );
    selected = [...selected].map((element) => element.textContent);
    document.querySelector('.project-filter-display').innerHTML =
      selected.join(', ') || '사용 기술';
    filterHandler?.(selected);
  };

  const reset = (event) => {
    [
      // @ts-ignore
      ...event.currentTarget.parentElement.children,
    ].forEach((children) =>
      children.classList.remove('project-filter-choice-activated')
    );
    updateSelected();
  };

  const select = (event) => {
    toggle(event.currentTarget, 'project-filter-choice-activated');
    updateSelected();
  };

  return (
    <div className="project-filter">
      <ul className="project-filter-selector hidden">
        <li key="all" onClick={reset} className="project-filter-choice">
          필터 초기화
        </li>
        {data.map((item) => {
          return (
            <li key={item} onClick={select} className="project-filter-choice">
              {item}
            </li>
          );
        })}
      </ul>
      <span
        onClick={() => {
          const selector = document.querySelector('.project-filter-selector');
          toggle(selector, 'hidden');
        }}
        className="project-filter-display"
        title="눌러서 필터 변경"
      >
        사용 기술
      </span>
    </div>
  );
};

export default Filter;
