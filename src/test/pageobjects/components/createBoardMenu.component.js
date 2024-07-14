
import {$} from '@wdio/globals'

const selectors = {
  // eslint-disable-next-line max-len
  selectPurpleBackgroundBtn: 'button.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc[style*="/assets/8ab3b35f3a786bb6cdac.svg"]',
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
