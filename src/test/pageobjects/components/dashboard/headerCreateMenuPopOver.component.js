import {$} from '@wdio/globals';

const selectors = {
  createNewBoardButton: 'button[data-testid="header-create-board-button"]',
  boardTitleInputField:
      'input[data-testid="create-board-title-input"]',
  createBoardBtn: 'button[data-testid="create-board-submit-button"]',
};

export default class HeaderCreateMenuPopOverComponent {
  get rootEl() {
    return $('section[data-testid="header-create-menu-popover"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
