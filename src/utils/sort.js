import {SortType} from '../constants/const';

const getSortedFilms = (films, sortType) => {
  switch (sortType) {
    case SortType.DATE:
      return films.slice().sort((a, b) => b.releaseDate - a.releaseDate);
    case SortType.RATING:
      return films.slice().sort((a, b) => b.rating - a.rating);
    case SortType.COMMENTS:
      return films.slice().sort((a, b) => b.comments.length - a.comments.length);
    default:
      return films;
  }
};

export {getSortedFilms};
