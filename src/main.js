import {createProfileTemplate} from './views/profile';
import {createNavigationTemplate} from './views/navigation';
import {createSortingTemplate} from './views/sorting';
import {createFilterTemplate} from './views/filter';
import {createFooterTemplate} from './views/footer';
import {createFilmsTemplate} from './views/films';
import {createFilmsListTemplate} from './views/films-list';
import {createButtonShowMoreTemplate} from './views/button-show-more';
import {createFilmDetailsTemplate} from './views/film-details';
import {createFilmCardTemplate} from './views/film-card';

import {createMockFilms, totalFilmsAmount} from './mocks/films';
import {FilmsContainerTitle, RenderPosition, SortType} from './constants/const';
import {render} from './utils/common';
import {getSortedFilms} from './utils/sort';
import {generateFilters} from './utils/filter';
import {Config} from './constants/config';

const FILMS_AMOUNT = 25;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

const filmsData = createMockFilms(FILMS_AMOUNT);
const filters = generateFilters(filmsData);
const sortedFilmsByRating = getSortedFilms(filmsData, SortType.RATING).slice(0, Config.EXTRA_FILM_CARDS_AMOUNT);
const sortedFilmsByComments = getSortedFilms(filmsData, SortType.COMMENTS).slice(0, Config.EXTRA_FILM_CARDS_AMOUNT);

const filmsDataMap = {
  0: filmsData,
  1: sortedFilmsByRating,
  2: sortedFilmsByComments,
};

render(headerElement, createProfileTemplate());
render(mainElement, createNavigationTemplate());

const navigationElement = mainElement.querySelector(`.main-navigation`);
render(navigationElement, createFilterTemplate(filters), RenderPosition.AFTER_BEGIN);

render(mainElement, createSortingTemplate());
render(mainElement, createFilmsTemplate());

const filmsContainerElement = mainElement.querySelector(`.films`);
const filmsTemplate = createFilmsListTemplate(FilmsContainerTitle.ALL, false);
const topRatedTemplate = createFilmsListTemplate(FilmsContainerTitle.TOP_RATED);
const mostCommentedTemplate = createFilmsListTemplate(FilmsContainerTitle.MOST_COMMENTED);

const renderFilms = (container, films) => {
  const title = container.querySelector(`.films-list__title`);
  const filmContainer = container.querySelector(`.films-list__container`);

  if (title.textContent === FilmsContainerTitle.ALL) {
    for (let i = 0; i < Math.min(films.length, Config.FILM_CARDS_TO_SHOW); i++) {
      render(filmContainer, createFilmCardTemplate(films[i]));
    }

    if (films.length > Config.FILM_CARDS_TO_SHOW) {
      render(container, createButtonShowMoreTemplate());
      const showMoreButton = container.querySelector(`.films-list__show-more`);
      let renderedFilmsCount = Config.FILM_CARDS_TO_SHOW;

      showMoreButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        films
          .slice(renderedFilmsCount, renderedFilmsCount + Config.FILM_CARDS_TO_SHOW)
          .forEach((film) => render(filmContainer, createFilmCardTemplate(film)));

        renderedFilmsCount += Config.FILM_CARDS_TO_SHOW;

        if (renderedFilmsCount >= films.length) {
          showMoreButton.remove();
        }
      });
    }
  } else {
    render(filmContainer, films.map(createFilmCardTemplate).join(`\n`));
  }
};

render(filmsContainerElement, filmsTemplate);
render(filmsContainerElement, topRatedTemplate);
render(filmsContainerElement, mostCommentedTemplate);

const filmsContainers = filmsContainerElement.querySelectorAll(`.films-list`);

filmsContainers.forEach((item, index) => {
  renderFilms(item, filmsDataMap[index]);
});

render(document.body, createFooterTemplate(totalFilmsAmount));
render(document.body, createFilmDetailsTemplate(filmsData[0]));
