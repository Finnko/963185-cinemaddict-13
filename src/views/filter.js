import {capitalizeFirstLetter} from '../utils/common';

const createFilterTemplate = (filters) => {
  const filtersTemplate1 = filters.reduce((template, {name, count}) => {
    return template + `
      <a href="#${name.toLowerCase()}" class="main-navigation__item">
          ${capitalizeFirstLetter(name)}
          <span class="main-navigation__item-count">${count}</span>
      </a>
    `;
  }, ``);

  return `
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${filtersTemplate1}
    </div>
  `;
};

export {createFilterTemplate};

