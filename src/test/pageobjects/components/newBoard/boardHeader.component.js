import {$} from '@wdio/globals';

const selectors = {
  displayedBoardTitle: 'h1.HKTtBLwDyErB_o',
  menuBtn: 'button.frrHNIWnTojsww.GDunJzzgFqQY_3',
  filterCardsBtn: 'button[data-testid="filter-popover-button"]',
};

export default class BoardHeader {
  get rootEl() {
    return $('div.RPO6eTW4FLJhI0');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
