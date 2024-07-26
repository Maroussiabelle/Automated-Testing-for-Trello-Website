import {$} from '@wdio/globals';

const selectors = {
  archiveCardButton: 'a[data-testid="card-back-archive-button"]',
  deleteCardButton: 'a[data-testid="card-back-delete-card-button"]',
};

export default class CardDetailWindow {
  get rootEl() {
    return $('div.card-detail-window');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
