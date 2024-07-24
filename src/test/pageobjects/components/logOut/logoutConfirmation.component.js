import {$} from '@wdio/globals';

const selectors = {
  confirmLogOut: '(//span[contains(@class, "css-178ag6o") and contains(text(), "Log out")]',

};

export default class LogoutConfirmationComponent {
  get rootEl() {
    return $('section.css-qj62pw');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
