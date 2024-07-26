import {$} from '@wdio/globals';

const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  displayedCard: '//a[@class="NdQKKfeqJDDdX3" and contains(text(), "Test card")]',
  addCardBtn: 'button[data-testid="list-card-composer-add-card-button"]',
};

export default class CardComposer {
  get rootEl() {
    return $('//li[@data-testid="list-wrapper"]//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
