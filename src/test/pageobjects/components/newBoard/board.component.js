
import {$} from '@wdio/globals'


const selectors = {
  addAlistBtn:
      'button.frrHNIWnTojsww.CSwccJ0PrMROzz.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc',
  addNewCardBtn: '//li[@class="bi0h3HALKXjfDq"]//h2[contains(text(), "New list") and @data-testid="list-name"]' +
      '//ancestor::li[@class="bi0h3HALKXjfDq"]//button[contains(text(), "Add a card")]',
  boardHeader: 'h1.HKTtBLwDyErB_o',
}

export default class Board {
  get rootEl() {
    return $('div#content')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}

