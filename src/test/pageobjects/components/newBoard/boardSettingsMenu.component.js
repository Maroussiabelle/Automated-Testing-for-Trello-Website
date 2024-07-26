import {$} from '@wdio/globals';

const selectors = {

  closeBoardBtn: 'a.board-menu-navigation-item-link.board-menu-navigation-item-link-v2.js-close-board',
  permanentlyDeleteBoardBtn: 'button[data-testid="close-board-delete-board-button"]',
};

export default class BoardSettingsMenu {
  get rootEl() {
    return $('div.board-menu-content-frame');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
