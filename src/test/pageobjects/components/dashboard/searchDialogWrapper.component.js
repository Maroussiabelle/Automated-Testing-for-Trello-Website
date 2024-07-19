
import {$} from '@wdio/globals'

const selectors = {
  searchResult: 'div[data-testid="persist-recent-search"] div.css-90uwn0 span',
}

export default class SearchDialogWrapper {
  get rootEl() {
    return $('div[data-test-id="search-dialog-dialog-wrapper"]')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
