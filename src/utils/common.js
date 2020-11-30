import dayjs from 'dayjs';

import {RenderPosition} from '../constants/const';
import {Config} from '../constants/config';

const render = (container, template, place = RenderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

const capitalizeFirstLetter = (string) => string.slice(0, 1).toUpperCase() + string.slice(1);

const getFormattedFilmTime = (time) => `${Math.floor(time / 60)}h ${time % 60}m`;

const formatReleaseDate = (date) => dayjs(date).format(`D MMMM YYYY`);

const pluralize = (number, forms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  number = Math.floor(Math.abs(number)) % 100;

  return forms[number > 4 && number < 20 ? 2 : cases[Math.min(number % 10, 5)]];
};

const cutText = (description) => {
  return description.length < Config.DESCRIPTION_MAX_LENGTH
    ? description
    : `${description.slice(0, Config.DESCRIPTION_MAX_LENGTH)}...`;
};

export {
  render,
  getFormattedFilmTime,
  formatReleaseDate,
  capitalizeFirstLetter,
  pluralize,
  cutText,
};
