import {v4 as uuidv4} from 'uuid';
import {getRandomArrayItem, getRandomDate} from '../utils/common';

const COMMENTS = [
  `01 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, minus!`,
  `02 Lorem ipsum dolor sit amet`,
  `03 Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  `04 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate deleniti doloribus error illo.`,
  `05 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate.`,
  `06 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate deleniti.`,
];

const EMOTIONS = [`smile`, `sleeping`, `puke`, `angry`];

const USERS = [`User01`, `User02`, `User03`, `User04`, `User05`, `User06`, `User07`, `User08`];

const createMockComment = () => {
  return {
    id: uuidv4(),
    emotion: getRandomArrayItem(EMOTIONS),
    author: getRandomArrayItem(USERS),
    text: getRandomArrayItem(COMMENTS),
    date: getRandomDate()
  };
};


const createMockComments = (count) => Array.from({length: count}).fill(``).map(createMockComment);

export {createMockComments};
