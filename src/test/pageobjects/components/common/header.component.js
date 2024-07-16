import {$} from '@wdio/globals'


const selectors = {
  accountButton: '#header > div.hQdzCqwE1c7MY1 > div:nth-child(5) > button',
  searchFieldDiv: 'div.QdftuzIZzhGiAU',
  searchField: 'input[data-test-id="search-dialog-input"]',
}

export default class Header {
  get rootEl() {
    return $('nav#header')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
