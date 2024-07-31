import {$} from '@wdio/globals';

const selectors = {
  archiveThisListBtn: 'button[data-testid="list-actions-archive-list-button"]',
};

export default class ListActionsMenu {
  get rootEl() {
    return $('section[data-testid="list-actions-popover"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
