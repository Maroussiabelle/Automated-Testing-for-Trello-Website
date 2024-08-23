import BaseComponent from '../common/base.component.js';

const selectors = {
  closeBtn: 'input[data-testid="close-board-confirm-button"]',
};

export default class CloseBoardPopOver extends BaseComponent {
  constructor() {
    super('div.pop-over.is-shown', selectors);
  }
}
