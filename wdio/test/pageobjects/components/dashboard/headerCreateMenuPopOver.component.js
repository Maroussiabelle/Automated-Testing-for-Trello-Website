import BaseComponent from '../common/base.component.js';

const selectors = {
  createNewBoardButton: 'button[data-testid="header-create-board-button"]',
  boardTitleInputField:
      'input[data-testid="create-board-title-input"]',
  createBoardBtn: 'button[data-testid="create-board-submit-button"]',
  boardBackgroundImage: 'button:has(span[data-testid="CheckIcon"])',
};

export default class HeaderCreateMenuPopOverComponent extends BaseComponent {
  constructor() {
    super('section[data-testid="header-create-menu-popover"]', selectors);
  }
}
