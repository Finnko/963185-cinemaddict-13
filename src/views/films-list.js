const createFilmsListTemplate = (title, isExtra = true) => {
  return (
    `<section class="films-list ${isExtra ? `films-list--extra` : ``}">
      <h2 class="films-list__title ${isExtra ? `visually-hidden` : ``}">${title}</h2>

      <div class="films-list__container"></div>
    </section>`
  );
};

export {createFilmsListTemplate};
