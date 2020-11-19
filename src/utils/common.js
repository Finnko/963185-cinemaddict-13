import {RenderPosition} from '../constants/enums';

const render = (container, template, place = RenderPosition.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};

export {render};
