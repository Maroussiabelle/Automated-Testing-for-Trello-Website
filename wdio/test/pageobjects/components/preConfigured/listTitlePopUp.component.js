import BaseComponent from '../common/base.component.js';

const selectors = {
  listTitleInputField: 'textarea[data-testid="list-name-textarea"]',
  addListBtn: 'button[data-testid="list-composer-add-list-button"]',

};

export default class ListTitlePopUp extends BaseComponent {
  constructor() {
    super('form', selectors);
  }
}
