import {RenderPosition} from '../constants/enums';

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

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomInteger(0, 7);

  targetDate.setDate(targetDate.getDate() - diffValue);

  return targetDate;
};

const pluralize = (number, forms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  number = Math.floor(Math.abs(number)) % 100;

  return forms[number > 4 && number < 20 ? 2 : cases[Math.min(number % 10, 5)]];
};

export {
  render,
  getRandomInteger,
  getRandomArrayItem,
  getRandomDate,
  pluralize,
};
