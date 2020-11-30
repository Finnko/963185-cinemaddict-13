const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
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

export {
  getRandomInteger,
  getRandomArrayItem,
  getRandomDate,
  getRandomArray,
};
