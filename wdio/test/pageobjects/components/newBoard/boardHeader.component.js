import BaseComponent from '../common/base.component.js';

const selectors = {
  displayedBoardTitle: 'h1[data-testid="board-name-display"]',
  menuBtn: 'span[data-testid="OverflowMenuHorizontalIcon"]',
  filterCardsBtn: 'button[data-testid="filter-popover-button"]',
};

export default class BoardHeader extends BaseComponent {
  constructor() {
    super('div.board-header.u-clearfix.js-board-header', selectors);
  }
}
