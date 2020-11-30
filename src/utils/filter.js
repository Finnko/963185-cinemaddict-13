const createFilterMap = (films) => films.reduce((acc, item) => {
  return {
    all: null,
    watchlist: item.isInWatchList ? ++acc.watchlist : acc.watchlist,
    history: item.isAlreadyWatched ? ++acc.history : acc.history,
    favorites: item.isFavorite ? ++acc.favorites : acc.favorites,
  };
}, {
  watchlist: 0,
  history: 0,
  favorites: 0,
});

export const generateFilters = (films) => {
  const filmToFilterMap = createFilterMap(films);

  return Object.keys(filmToFilterMap).map((name) => {
    return {
      name,
      count: filmToFilterMap[name],
    };
  });
};
