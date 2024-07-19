

import {$} from '@wdio/globals'


const selectors = {
  addNewCardBtn: '//li[@class="bi0h3HALKXjfDq"]//h2[contains(text(), "New list") and @data-testid="list-name"]' +
      '//ancestor::li[@class="bi0h3HALKXjfDq"]//button[contains(text(), "Add a card")]',
  listEditMenuBtn: '//li[@class="bi0h3HALKXjfDq"]//button[@data-testid="list-edit-menu-button"]//span[@data-testid="OverflowMenuHorizontalIcon"]',
}

export default class ListWrapper {
  get rootEl() {
    return $('//h2[contains(text(), "New list") and @data-testid="list-name"]//ancestor::li[@data-list-id="669a9805fee30898dc4549b4"]')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }

  displayedListTitle(listTitle) {
    return this.rootEl.$(`//h2[contains(text(), "${listTitle}") 
      and @data-testid="list-name"]`)
  }
}
