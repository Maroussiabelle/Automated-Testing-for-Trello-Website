import {$} from '@wdio/globals';

const selectors = {
  addNewCardBtn: 'button[data-testid="list-add-card-button"]',
  listEditMenuBtn: 'button[data-testid="list-edit-menu-button"]',
};

export default class ListWrapper {
  constructor(listName) {
    this.listName = listName;
  }

  get rootEl() {
    return $(`//h2[contains(text(), "${this.listName}") and @data-testid="list-name"]//ancestor::li[@data-testid="list-wrapper"]`);
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }

  displayedListTitle(listTitle) {
    return this.rootEl.$(`//h2[contains(text(), "${listTitle}") 
      and @data-testid="list-name"]`);
  }

  card(cardName) {
    return this.rootEl.$(`//a[@data-testid="card-name" and contains(text(), "${cardName}")]`);
  }
}
