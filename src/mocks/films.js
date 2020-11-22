import {getRandomInteger} from '../utils/common';

const MIN_TOTAL_FILMS_AMOUNT = 100000;
const MAX_TOTAL_FILMS_AMOUNT = 150000;

const totalFilmsAmount = getRandomInteger(MIN_TOTAL_FILMS_AMOUNT, MAX_TOTAL_FILMS_AMOUNT);


export {
  totalFilmsAmount,
};
