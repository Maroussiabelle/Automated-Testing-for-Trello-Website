import {$} from '@wdio/globals';

const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  addCardBtn: 'button[data-testid="list-card-composer-add-card-button"]',
};

export default class CardComposer {
  get rootEl() {
    return $('//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@data-testid="list-wrapper"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }

  getDisplayedCardSelector(cardTitle) {
    return `//a[@data-testid="card-name" and contains(text(), "${cardTitle}")]`;
  }

  getDisplayedCard(cardTitle) {
    const selector = this.getDisplayedCardSelector(cardTitle);
    return this.rootEl.$(selector);
  }

  async isCardDisplayed(cardTitle) {
    const cardElement = this.getDisplayedCard(cardTitle);
    return await cardElement.isDisplayed();
  }
}
