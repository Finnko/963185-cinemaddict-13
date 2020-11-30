import {filterTitlesMap} from '../constants/const';

const createFilterItemTemplate = ({name, count}, isActive) => {
  return `
    <a
      href="#${name}"
      class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${filterTitlesMap[name]} ${count ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>
  `;
};

const createFilterTemplate = (filters) => {
  const filtersItemsTemplate = filters.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `
    <div class="main-navigation__items">
      ${filtersItemsTemplate}
    </div>
  `;
};

export {createFilterTemplate};
