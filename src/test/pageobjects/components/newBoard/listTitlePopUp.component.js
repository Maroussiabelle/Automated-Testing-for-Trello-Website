

import {$} from '@wdio/globals'


const selectors = {
  listTitleInputField: 'textarea[data-testid="list-name-textarea"]',
  addListBtn: 'button.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc',

}

export default class ListTitlePopUp {
  get rootEl() {
    return $('form.vVqwaYKVgTygrk')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
