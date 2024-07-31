import {$} from '@wdio/globals';

const selectors = {
  displayedBoardTitle: 'h1[data-testid="board-name-display"]',
  menuBtn: 'span[data-testid="OverflowMenuHorizontalIcon"]',
  filterCardsBtn: 'button[data-testid="filter-popover-button"]',
};

export default class BoardHeader {
  get rootEl() {
    return $('div.board-header.u-clearfix.js-board-header');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
