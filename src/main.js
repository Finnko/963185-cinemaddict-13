import {createProfileTemplate} from './views/profile';
import {createNavigationTemplate} from './views/navigation';
import {createSortingTemplate} from './views/sorting';
import {createFilterTemplate} from './views/filter';
import {createFooterTemplate} from './views/footer';
import {createFilmsTemplate} from './views/films';
import {createFilmsListTemplate} from './views/films-list';
import {createFilmCardTemplate} from './views/film-card';
import {createFilmsListShowMoreTemplate} from './views/films-list-show-more';

import {Config} from './constants/config';
import {FilmsContainerTitle, RenderPosition} from './constants/enums';
import {render} from './utils/common';

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const filmsTemplate = createFilmsListTemplate(FilmsContainerTitle.ALL, {
  films: createFilmCardTemplate().repeat(Config.FILM_CARDS_AMOUNT),
  showMoreButton: createFilmsListShowMoreTemplate(),
});

const topRatedTemplate = createFilmsListTemplate(FilmsContainerTitle.TOP_RATED,
    {films: createFilmCardTemplate().repeat(Config.EXTRA_FILM_CARDS_AMOUNT)},
    true,
);

const mostCommentedTemplate = createFilmsListTemplate(FilmsContainerTitle.MOST_COMMENTED,
  {films: createFilmCardTemplate().repeat(Config.EXTRA_FILM_CARDS_AMOUNT)},
  true,
);

render(headerElement, createProfileTemplate());
render(mainElement, createNavigationTemplate());

const navigationElement = mainElement.querySelector(`.main-navigation`);
render(navigationElement, createFilterTemplate(), RenderPosition.AFTER_BEGIN);

render(mainElement, createSortingTemplate());
render(mainElement, createFilmsTemplate());

const filmsContainerElement = mainElement.querySelector(`.films`);
render(filmsContainerElement, filmsTemplate);
render(filmsContainerElement, topRatedTemplate);
render(filmsContainerElement, mostCommentedTemplate);

render(document.body, createFooterTemplate());

