import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import toggle from '../../util/classToggler';

import './filter.css';

const Filter = ({ filterHandler, data, defaultTitle, ...props }) => {
  const updateSelected = () => {
    let selected: any = document.querySelectorAll(
      `#${props.id} .project-filter-choice-activated`
    );
    selected = [...selected].map((element) => element.textContent);
    document.querySelector(`#${props.id} .project-filter-display`).innerHTML =
      selected.join(', ') || defaultTitle;
    filterHandler?.(selected);
  };

  const reset = () => {
    document
      .querySelectorAll(`#${props.id} .project-filter-choice-activated`)
      .forEach((element) => {
        element.classList.remove('project-filter-choice-activated');
      });
    updateSelected();
  };

  const select = (event) => {
    toggle(event.currentTarget, 'project-filter-choice-activated');
    updateSelected();
  };

  return (
    <div className={'project-filter'} {...props}>
      <p
        onClick={() => {
          const selector = document.querySelector(
            `#${props.id} .project-filter-selector`
          );
          toggle(selector, 'hidden');
        }}
        className={'project-filter-display'}
        title={'눌러서 필터 변경'}
      >
        {defaultTitle}
      </p>
      <ul className={'project-filter-selector hidden'}>
        <li
          key={`${props.id}-all`}
          onClick={reset}
          className={'project-filter-choice'}
        >
          필터 초기화
        </li>
        <ul className={'project-filter-choice-list'}>
          {data.map((item) => {
            return (
              <li key={item} onClick={select} className={'project-filter-choice'}>
                {item}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default Filter;
