import {$} from '@wdio/globals';

const selectors = {
  addAlistBtn:
      'button.frrHNIWnTojsww.CSwccJ0PrMROzz.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc',
  boardHeader: 'h1.HKTtBLwDyErB_o',
};

export default class Board {
  get rootEl() {
    return $('div#content');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
