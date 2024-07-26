import {$} from '@wdio/globals';

const selectors = {
  switchAccountButton: '[data-testid="switch-accounts-link"]',
  manageAccountButton: '[data-testid="manage-account-link"]',
  profileAndVisibilityButton: '//span[text()="Profile and visibility"]',
};

export default class AccountMenu {
  get rootEl() {
    return $('div[data-testid="account-menu"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
