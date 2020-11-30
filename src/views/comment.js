import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const createCommentTemplate = (comment) => {
  const {
    emotion,
    author,
    date,
    text,
  } = comment;

  const commentDate = dayjs(date).fromNow();

  return `
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${commentDate}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  `;
};

export {createCommentTemplate};
