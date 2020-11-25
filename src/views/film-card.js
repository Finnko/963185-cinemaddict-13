import {getFormattedFilmTime, pluralize, cutText} from '../utils/common';

const createFilmCardTemplate = (film) => {
  const {
    title,
    poster,
    year,
    rating,
    runTime,
    genres,
    comments,
    description,
  } = film;

  const pluralizedComment = pluralize(comments.length, [`comment`, `comments`, `comments`]);
  const formattedDescription = cutText(description);

  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${getFormattedFilmTime(runTime)}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${formattedDescription}</p>
      <a class="film-card__comments">${comments.length} ${pluralizedComment}</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
  `;
};

export {createFilmCardTemplate};
