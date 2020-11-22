import {createProfileTemplate} from './views/profile';
import {createNavigationTemplate} from './views/navigation';
import {createSortingTemplate} from './views/sorting';
import {createFilterTemplate} from './views/filter';
import {createFooterTemplate} from './views/footer';
import {createFilmsTemplate} from './views/films';
import {createFilmsListTemplate} from './views/films-list';

import {createMockFilms, totalFilmsAmount} from './mocks/films';
import {FilmsContainerTitle, RenderPosition} from './constants/enums';
import {render} from './utils/common';

const FILMS_AMOUNT = 25;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const filmsData = createMockFilms(FILMS_AMOUNT);

render(headerElement, createProfileTemplate());
render(mainElement, createNavigationTemplate());

const navigationElement = mainElement.querySelector(`.main-navigation`);
render(navigationElement, createFilterTemplate(), RenderPosition.AFTER_BEGIN);

render(mainElement, createSortingTemplate());
render(mainElement, createFilmsTemplate());

const filmsContainerElement = mainElement.querySelector(`.films`);
const filmsTemplate = createFilmsListTemplate(FilmsContainerTitle.ALL, filmsData, true);
const topRatedTemplate = createFilmsListTemplate(FilmsContainerTitle.TOP_RATED, filmsData, false, true);
const mostCommentedTemplate = createFilmsListTemplate(FilmsContainerTitle.MOST_COMMENTED, filmsData, false, true);

render(filmsContainerElement, filmsTemplate);
// render(filmsContainerElement, topRatedTemplate);
// render(filmsContainerElement, mostCommentedTemplate);

render(document.body, createFooterTemplate(totalFilmsAmount));

