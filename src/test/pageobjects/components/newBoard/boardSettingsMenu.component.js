import BaseComponent from '../common/base.component.js';

const selectors = {
  closeBoardBtn: 'a.board-menu-navigation-item-link.board-menu-navigation-item-link-v2.js-close-board',
  permanentlyDeleteBoardBtn: 'button[data-testid="close-board-delete-board-button"]',
};

export default class BoardSettingsMenu extends BaseComponent {
  constructor() {
    super('div.board-menu-content-frame', selectors);
  }
}
