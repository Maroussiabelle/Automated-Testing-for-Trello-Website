import {$} from '@wdio/globals';

const selectors = {

  boardBackgroundsBtn: 'span[data-testid="OverflowMenuHorizontalIcon"]',
  boardTitleInputField:
      'input[data-testid="create-board-title-input"]',
  createBoardBtn: 'button[data-testid="create-board-submit-button"]',
};

export default class CreateBoardMenu {
  get rootEl() {
    return $('section.rX4pAv5sWHFNjp.js-react-root');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
