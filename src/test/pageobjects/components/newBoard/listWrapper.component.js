

import {$} from '@wdio/globals'


const selectors = {
  displayedListTitle: 'h2[data-testid="list-name"][role="textbox"]',
  addCardBtn: 'button[data-testid="list-add-card-button"]',

}

export default class ListWrapper {
  get rootEl() {
    return $('div.Sb_QqNKeadm2oq')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
