
import {$} from '@wdio/globals'


const selectors = {
  addAlistBtn: 'button.frrHNIWnTojsww.CSwccJ0PrMROzz.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc',
  // addAlistBtn:
  //  'button.frrHNIWnTojsww.CSwccJ0PrMROzz.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc',

}

export default class Board {
  get rootEl() {
    return $('div.WC6fBZ3Z4IYlvP')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}

