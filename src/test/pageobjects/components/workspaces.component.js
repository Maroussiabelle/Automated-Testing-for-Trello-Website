
import {$} from '@wdio/globals'

const selectors = {
  createNewBoardButton: 'li[data-testid="create-board-tile"]',
  // displayedBoardTitle: 'div.board-tile-details-name',
  displayedBoardTitle: 'div.LinesEllipsis',
  createdBoardIcon: 'a.board-tile',
}

export default class Workspaces {
  get rootEl() {
    return $('div.all-boards')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
