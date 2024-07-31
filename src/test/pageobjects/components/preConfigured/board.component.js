import {$} from '@wdio/globals';

const selectors = {
  addAlistBtn:
      'button[data-testid="list-composer-button"]',
};

export default class Board {
  get rootEl() {
    return $('div#content');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
