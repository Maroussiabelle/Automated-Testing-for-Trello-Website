

import {$} from '@wdio/globals'


const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardBtn: 'button[type="submit"]',
  displayedCard: 'a.NdQKKfeqJDDdX3',
}

export default class CardComposer {
  get rootEl() {
    return $('div.Sb_QqNKeadm2oq')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
