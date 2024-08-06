import BaseComponent from '../common/base.component.js';

const selectors = {
  archiveCardButton: 'a[data-testid="card-back-archive-button"]',
  deleteCardButton: 'a[data-testid="card-back-delete-card-button"]',
};

export default class CardDetailWindow extends BaseComponent {
  constructor() {
    super('div.card-detail-window', selectors);
  }
}
