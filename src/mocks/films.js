import {v4 as uuidv4} from 'uuid';

import {getRandomInteger, getRandomArrayItem, getRandomArray, getRandomDate} from '../utils/randomizers';
import {createMockComments} from './comments';

const MIN_TOTAL_FILMS_AMOUNT = 100000;
const MAX_TOTAL_FILMS_AMOUNT = 150000;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 5;
const MIN_RELEASE_DATE = 1930;
const MAX_RELEASE_DATE = 1965;
const MIN_RUNTIME = 60;
const MAX_RUNTIME = 180;
const MIN_AGE_RATING = 0;
const MAX_AGE_RATING = 18;
const FILM_MAX_RATING = 10;

const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`,
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const POSTERS = [
  `/images/posters/made-for-each-other.png`,
  `/images/posters/popeye-meets-sinbad.png`,
  `/images/posters/sagebrush-trail.jpg`,
  `/images/posters/santa-claus-conquers-the-martians.jpg`,
  `/images/posters/the-dance-of-life.jpg`,
  `/images/posters/the-great-flamarion.jpg`,
  `/images/posters/the-man-with-the-golden-arm.jpg`
];

const DIRECTORS = [
  `Wes Anderson`,
  `Christopher Nolan`,
  `Steven Spielberg`,
  `Anthony Mann`,
];

const ACTORS = [
  `Leonardo Di Caprio`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `James Franco`,
  `Jason Statham`,
  `Tom Hardy`,
];

const WRITERS = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `John Doe`,
  `Jane Doe`,
];

const GENRES = [
  `Drama`,
  `Comedy`,
  `Horror`,
  `Thriller`,
  `Tragedy`,
  `Crime`,
  `Documentary`,
  `Romance`,
  `Sci-Fi`,
];

const COUNTRIES = [
  `USA`,
  `UK`,
  `Ireland`,
  `India`,
];

const createMockFilm = () => {
  return {
    id: uuidv4(),
    poster: getRandomArrayItem(POSTERS),
    title: getRandomArrayItem(TITLES),
    originTitle: getRandomArrayItem(TITLES),
    rating: (Math.random() * FILM_MAX_RATING).toFixed(1),
    description: getRandomArray(DESCRIPTION).join(``),
    comments: createMockComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
    year: getRandomInteger(MIN_RELEASE_DATE, MAX_RELEASE_DATE),
    releaseDate: getRandomDate(),
    runTime: getRandomInteger(MIN_RUNTIME, MAX_RUNTIME),
    genres: getRandomArray(GENRES),
    director: getRandomArrayItem(DIRECTORS),
    writers: getRandomArray(WRITERS),
    actors: getRandomArray(ACTORS),
    country: getRandomArrayItem(COUNTRIES),
    ageRating: getRandomInteger(MIN_AGE_RATING, MAX_AGE_RATING),
    isInWatchList: Math.random() > 0.5,
    isAlreadyWatched: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

const createMockFilms = (count) => Array.from({length: count}).fill(``).map(createMockFilm);

const totalFilmsAmount = getRandomInteger(MIN_TOTAL_FILMS_AMOUNT, MAX_TOTAL_FILMS_AMOUNT);


export {
  totalFilmsAmount,
  createMockFilms,
};
