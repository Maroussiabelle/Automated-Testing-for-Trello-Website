import {$} from '@wdio/globals'


const selectors = {
  accountButton: '#header > div.hQdzCqwE1c7MY1 > div:nth-child(5) > button',
}

export default class Header2 {
  get rootEl() {
    return $('nav#header[data-testid="authenticated-header"]')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
