import {pluralize} from '../utils/common';

const createFooterTemplate = (totalAmount) => {
  return `
    <footer class="footer">
      <section class="footer__logo logo logo--smaller">Cinemaddict</section>
      ${totalAmount
    ? (
      `<section class="footer__statistics">
        <p>${totalAmount} ${pluralize(totalAmount, [`movie`, `movies`, `movies`])} inside</p>
      </section>`)
    : ``}
    </footer>
  `;
};

export {createFooterTemplate};
