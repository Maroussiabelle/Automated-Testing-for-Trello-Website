import {$} from '@wdio/globals';

const selectors = {
  listTitleInputField: 'textarea[data-testid="list-name-textarea"]',
  addListBtn: 'button[data-testid="list-composer-add-list-button"]',

};

export default class ListTitlePopUp {
  get rootEl() {
    return $('form');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
