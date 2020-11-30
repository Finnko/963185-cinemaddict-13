import {v4 as uuidv4} from 'uuid';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

import {getRandomArrayItem} from '../utils/randomizers';

dayjs.extend(dayjsRandom);

const COMMENTS = [
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, minus!`,
  `Lorem ipsum dolor sit amet`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate deleniti doloribus error illo.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate deleniti.`,
];

const EMOTIONS = [`smile`, `sleeping`, `puke`, `angry`];

const USERS = [`User01`, `User02`, `User03`, `User04`, `User05`, `User06`, `User07`, `User08`];

const createMockComment = () => {
  return {
    id: uuidv4(),
    emotion: getRandomArrayItem(EMOTIONS),
    author: getRandomArrayItem(USERS),
    text: getRandomArrayItem(COMMENTS),
    date: dayjs.past()
  };
};


const createMockComments = (count) => Array.from({length: count}).fill(``).map(createMockComment);

export {createMockComments};
