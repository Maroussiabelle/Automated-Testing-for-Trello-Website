
import {$} from '@wdio/globals'
import {TEST_DATA} from '../../data/test.data.js'

const selectors = {
  // eslint-disable-next-line max-len
  selectMountainBackgroundBtn: `button.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc[style*="${TEST_DATA.backgroundMountainImageId}"]`,
  boardTitleInputField:
      'input.nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb.VkPAAkbpkKnPst',
  createBoardBtn: 'button[data-testid="create-board-submit-button"]',


}

export default class CreateBoardMenu {
  get rootEl() {
    return $('section.rX4pAv5sWHFNjp.js-react-root')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
