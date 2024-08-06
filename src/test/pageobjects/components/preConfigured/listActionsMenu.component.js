import BaseComponent from '../common/base.component.js';

const selectors = {
  archiveThisListBtn: 'button[data-testid="list-actions-archive-list-button"]',
};

export default class ListActionsMenu extends BaseComponent {
  constructor() {
    super('section[data-testid="list-actions-popover"]', selectors);
  }
}
