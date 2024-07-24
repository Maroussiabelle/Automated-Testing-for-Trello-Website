import {$} from '@wdio/globals';

const selectors = {

  closeBoardBtn: 'a.board-menu-navigation-item-link.board-menu-navigation-item-link-v2.js-close-board',
  permanentlyDeleteBoardBtn:
      'button.Bp80TGmc9hQIdE.WG_eo5n8x2vHvI.' +
      'bxgKMAm3lq5BpA.V_9lMAQOdk_AYt.SEj5vUdI3VvxDc',
};

export default class BoardSettingsMenu {
  get rootEl() {
    return $('div.board-menu-content-frame');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
