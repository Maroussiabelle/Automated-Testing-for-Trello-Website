
import {$} from '@wdio/globals'

const selectors = {
  createNewBoardButton: 'li[data-testid="create-board-tile"]',
  //  createdBoardIcon: 'a.board-tile',
  searchBoardsBar: 'input#search',
  searchResult: '.j6gdubt3tCF3U1 div[data-testid="persist-recent-search"] div.css-90uwn0 span',
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
