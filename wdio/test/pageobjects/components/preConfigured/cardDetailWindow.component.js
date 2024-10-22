import BaseComponent from '../common/base.component.js';

const selectors = {
  archiveCardButton: 'button[data-testid="card-back-archive-button"]',
  deleteCardButton: 'button[data-testid="card-back-delete-card-button"]',
};

export default class CardDetailWindow extends BaseComponent {
  constructor() {
    super('div[data-testid="card-back-name"]', selectors);
  }
}
