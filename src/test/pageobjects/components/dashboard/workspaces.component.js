
import {$} from '@wdio/globals'

const selectors = {
  createNewBoardButton: 'li[data-testid="create-board-tile"]',
  //  createdBoardIcon: 'a.board-tile',
  searchBoardsBar: 'input#search',
}

export default class Workspaces {
  get rootEl() {
    return $('div.all-boards')
    // return $('div.tabbed-pane-main-col-wrapper.js-content.is-full-width')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
