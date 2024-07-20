

import {$} from '@wdio/globals'


const selectors = {
  addNewCardBtn: './/button[contains(text(), "Add a card")]',
  listEditMenuBtn: './/button[@data-testid="list-edit-menu-button"]',
}


export default class ListWrapper {
  constructor(listName) {
    this.listName = listName
  }

  // get rootEl() {
  //   return $('//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]')
  // }

  get rootEl() {
    return $(`//h2[contains(text(), "${this.listName}") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]`)
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }

  displayedListTitle(listTitle) {
    return this.rootEl.$(`//h2[contains(text(), "${listTitle}") 
      and @data-testid="list-name"]`)
  }
}
