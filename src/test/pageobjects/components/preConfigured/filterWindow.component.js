

import {$} from '@wdio/globals'


const selectors = {
  keywordInputField: 'input[aria-placeholder="Enter a keyword…"]',
}

export default class FilterWindow {
  get rootEl() {
    return $('div.q2PzD_Dkq1FVX3.pt-0')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}

