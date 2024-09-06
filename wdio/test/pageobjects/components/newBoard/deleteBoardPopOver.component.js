import BaseComponent from '../common/base.component.js';

const selectors = {
  confirmDeleteBtn: 'button[data-testid="close-board-delete-board-confirm-button"]',
};

export default class DeleteBoardPopOver extends BaseComponent {
  constructor() {
    super('div.atlaskit-portal-container', selectors);
  }
}
