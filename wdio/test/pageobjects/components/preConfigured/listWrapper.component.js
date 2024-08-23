import BaseComponent from '../common/base.component.js';

const selectors = {
  addNewCardBtn: 'button[data-testid="list-add-card-button"]',
  listEditMenuBtn: 'button[data-testid="list-edit-menu-button"]',
};

export default class ListWrapper extends BaseComponent {
  constructor(listName) {
    super(`//h2[contains(text(), "${listName}") and @data-testid="list-name"]//ancestor::li[@data-testid="list-wrapper"]`, selectors);
  }

  getListTitle(listTitle) {
    return this.rootEl.$(`//h2[contains(text(), "${listTitle}") 
      and @data-testid="list-name"]`);
  }

  getCardByName(cardName) {
    return this.rootEl.$(`//a[@data-testid="card-name" and contains(text(), "${cardName}")]`);
  }
}
