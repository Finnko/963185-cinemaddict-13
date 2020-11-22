import {createFilmCardTemplate} from './film-card';
import {createButtonShowMoreTemplate} from './button-show-more';

const createFilmCardTemplates = (films) => {
  if (!films.length) {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`;
  }

  return films.map(createFilmCardTemplate).join(`\n`);
};

const createFilmsListTemplate = (title, films, isShowMoreButton, isExtra = false) => {
  return (
    `<section class="${isExtra ? `films-list--extra` : `films-list`}">
      <h2 class="films-list__title ${isExtra ? `` : `visually-hidden`}">
        ${title}
      </h2>

      <div class="films-list__container">
        ${createFilmCardTemplates(films)}
      </div>

      ${isShowMoreButton ? createButtonShowMoreTemplate() : ``}
    </section>`
  );
};

export {createFilmsListTemplate};
