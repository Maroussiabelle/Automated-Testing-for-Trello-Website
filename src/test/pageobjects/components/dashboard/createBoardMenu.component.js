import {$} from '@wdio/globals';

const selectors = {

  boardBackgroundsBtn: 'span.nch-icon.A3PtEe1rGIm_yL.neoUEAwI0GETBQ.LCBkZyEuShKn0r',
  boardTitleInputField:
      'input.nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb.VkPAAkbpkKnPst',
  createBoardBtn: 'button[data-testid="create-board-submit-button"]',
};

export default class CreateBoardMenu {
  get rootEl() {
    return $('section.rX4pAv5sWHFNjp.js-react-root');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
