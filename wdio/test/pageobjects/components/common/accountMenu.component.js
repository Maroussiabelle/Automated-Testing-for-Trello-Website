import BaseComponent from './base.component.js';

const selectors = {
  switchAccountButton: '[data-testid="switch-accounts-link"]',
  manageAccountButton: '[data-testid="manage-account-link"]',
  profileAndVisibilityButton: '//span[text()="Profile and visibility"]',
};

export default class AccountMenu extends BaseComponent {
  constructor() {
    super('div[data-testid="account-menu"]', selectors);
  }
}
