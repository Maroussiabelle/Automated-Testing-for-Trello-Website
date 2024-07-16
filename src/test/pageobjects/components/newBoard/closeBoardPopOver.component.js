import {$} from '@wdio/globals'


const selectors = {
  closeBtn: 'input.js-confirm.full.nch-button.nch-button--danger',
}

export default class CloseBoardPopOver {
  get rootEl() {
    return $('div.pop-over.is-shown')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
