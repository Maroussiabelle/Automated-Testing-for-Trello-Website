import BaseComponent from '../common/base.component.js';

const selectors = {
  addAlistBtn:
      'button[data-testid="list-composer-button"]',
};

export default class Board extends BaseComponent {
  constructor() {
    super('div#content', selectors);
  }
}
