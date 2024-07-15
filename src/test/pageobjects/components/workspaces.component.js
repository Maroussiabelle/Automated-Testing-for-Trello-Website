
import {$} from '@wdio/globals'

const selectors = {
  createNewBoardButton: 'li[data-testid="create-board-tile"]',
  createdBoardIcon: 'a.board-tile',
  searchBoardsBar: 'input[placeholder="Search"]',
}

export default class Workspaces {
  get rootEl() {
    return $('div.all-boards')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
