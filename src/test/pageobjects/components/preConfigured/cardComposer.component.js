import {$} from '@wdio/globals';

const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  displayedCard: '//a[@data-testid="card-name" and contains(text(), "Test card")]',
  addCardBtn: 'button[data-testid="list-card-composer-add-card-button"]',
};

export default class CardComposer {
  get rootEl() {
    return $('//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@data-testid="list-wrapper"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
