import {SortType} from '../constants/enums';

const sortByDate = (films) => {
  return films.slice().sort((a, b) => b.releaseDate - a.releaseDate);
};

const sortByRating = (films) => {
  return films.slice().sort((a, b) => b.rating - a.rating);
};

const sortByComments = (films) => {
  return films.slice().sort((a, b) => b.comments.length - a.comments.length);
};

const getSortedFilms = (films, sortType) => {
  switch (sortType) {
    case SortType.DATE:
      return sortByDate(films);
    case SortType.RATING:
      return sortByRating(films);
    case SortType.COMMENTS:
      return sortByComments(films);
    default:
      return films;
  }
};

export {getSortedFilms};
