import {RenderPosition} from '../constants/enums';
import {Config} from '../constants/config';

const render = (container, template, place = RenderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const shuffle = (array) => {
  const newArr = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return newArr;
};

const getRandomArray = (array) => {
  const randomNumber = getRandomInteger(1, array.length - 1);

  return shuffle(array).slice(0, randomNumber);
};

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomInteger(0, 7);

  targetDate.setDate(targetDate.getDate() - diffValue);

  return targetDate;
};

const getFormattedFilmTime = (time) => `${Math.floor(time / 60)}h ${time % 60}m`;

const pluralize = (number, forms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  number = Math.floor(Math.abs(number)) % 100;

  return forms[number > 4 && number < 20 ? 2 : cases[Math.min(number % 10, 5)]];
};

const cutText = (description) => {
  if (description.length < Config.DESCRIPTION_MAX_LENGTH) {
    return description;
  }

  let str = ``;

  for (let i = 0; i < description.length && str.length < Config.DESCRIPTION_MAX_LENGTH; i++) {
    str += description[i];
  }

  return `${str}...`;
};

export {
  render,
  getRandomInteger,
  getRandomArrayItem,
  getRandomDate,
  getRandomArray,
  getFormattedFilmTime,
  pluralize,
  cutText,
};
