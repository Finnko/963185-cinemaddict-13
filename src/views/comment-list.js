import {createCommentTemplate} from './comment';

const createCommentListTemplate = (comments) => {
  return comments.length > 0 ? (
    `<ul class="film-details__comments-list">
      ${comments.map(createCommentTemplate).join(`\n`)}
    </ul>`
  ) : ``;
};

export default createCommentListTemplate;
