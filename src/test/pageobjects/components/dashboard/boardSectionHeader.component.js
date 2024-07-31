import {$} from '@wdio/globals';

const selectors = {
  settingsBtn: '//span[contains(text(), "Settings") and ancestor::span[contains(@class, "boards-page-board-section-header-options-item-name")]]',
};

export default class BoardSectionHeader {
  get rootEl() {
    return $('div.boards-page-board-section-header');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
