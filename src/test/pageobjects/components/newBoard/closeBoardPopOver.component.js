import {$} from '@wdio/globals';

const selectors = {
  closeBtn: 'input[data-testid="close-board-confirm-button"]',
};

export default class CloseBoardPopOver {
  get rootEl() {
    return $('div.pop-over.is-shown');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
