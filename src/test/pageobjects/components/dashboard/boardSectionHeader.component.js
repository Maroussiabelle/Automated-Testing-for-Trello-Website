import BaseComponent from '../common/base.component.js';

const selectors = {
  settingsBtn: '//span[contains(text(), "Settings") and ancestor::span[contains(@class, "boards-page-board-section-header-options-item-name")]]',
};

export default class BoardSectionHeader extends BaseComponent {
  constructor() {
    super('div.boards-page-board-section-header', selectors);
  }
}
