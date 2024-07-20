
import {$} from '@wdio/globals'


const selectors = {
  archiveCardButton: 'a.button-link.js-archive-card[title="Archive"]',
  deleteCardButton: 'a.button-link.js-delete-card.negate',
}

export default class CardDetailWindow {
  get rootEl() {
    return $('div.card-detail-window')
  }

  // to do select by card name xpath

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
