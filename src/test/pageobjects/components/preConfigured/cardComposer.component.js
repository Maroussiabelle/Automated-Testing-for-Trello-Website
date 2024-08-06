import BaseComponent from '../common/base.component.js';

const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  addCardBtn: 'button[data-testid="list-card-composer-add-card-button"]',
};

export default class CardComposer extends BaseComponent {
  constructor() {
    super('//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@data-testid="list-wrapper"]', selectors);
  }
  getCardSelector(cardTitle) {
    return `//a[@data-testid="card-name" and contains(text(), "${cardTitle}")]`;
  }

  getCard(cardTitle) {
    const selector = this.getCardSelector(cardTitle);
    return this.rootEl.$(selector);
  }

  async isCardDisplayed(cardTitle) {
    const cardElement = this.getCard(cardTitle);
    return await cardElement.isDisplayed();
  }
}
