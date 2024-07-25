import {$} from '@wdio/globals';

const selectors = {
  accountButton: 'div[data-testid="header-member-menu-avatar"]',
  searchFieldDiv: 'div.QdftuzIZzhGiAU',
  searchField: 'input[data-test-id="search-dialog-input"]',
  createButton: 'button[data-testid="header-create-menu-button"]',
};

export default class Header {
  get rootEl() {
    return $('nav#header');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
