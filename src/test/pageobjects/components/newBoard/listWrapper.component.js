

import {$} from '@wdio/globals'


const selectors = {
  addCardBtn: '//li[@class="bi0h3HALKXjfDq"]//h2[contains(text(), "New list") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]//button[contains(text(), "Add a card")]',

}

export default class ListWrapper {
  get rootEl() {
    return $('div.Sb_QqNKeadm2oq')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }

  displayedListTitle(listTitle) {
    return this.rootEl.$(`//h2[contains(text(), "${listTitle}") 
      and @data-testid="list-name"]`)
  }
}
