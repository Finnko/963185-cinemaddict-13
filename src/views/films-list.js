const createFilmsListTemplate = (title, children, isExtra = false) => {
  const {films, showMoreButton} = children;

  return (
    `<section class="${isExtra ? `films-list--extra` : `films-list`}">
      <h2 class="films-list__title ${isExtra ? `` : `visually-hidden`}">
        ${title}
      </h2>

      <div class="films-list__container">
        ${films}
      </div>

      ${isExtra ? `` : showMoreButton}
    </section>`
  );
};

export {createFilmsListTemplate};
