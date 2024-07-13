
import {$} from '@wdio/globals'

const selectors = {
  createNewBoardButton: 'li[data-testid="create-board-tile"]',
}

export default class Workspaces {
  get rootEl() {
    return $('div.workspace-boards-page-layout')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
