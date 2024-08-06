import BaseComponent from './base.component.js';

const selectors = {
  accountButton: 'div[data-testid="header-member-menu-avatar"]',
  searchField: 'input[data-test-id="search-dialog-input"]',
  searchFieldSkeleton: 'input[data-testid="cross-product-search-input-skeleton"]',
  createButton: 'button[data-testid="header-create-menu-button"]',
};

export default class Header extends BaseComponent {
  constructor() {
    super('nav[data-testid="authenticated-header"]', selectors);
  }
}
