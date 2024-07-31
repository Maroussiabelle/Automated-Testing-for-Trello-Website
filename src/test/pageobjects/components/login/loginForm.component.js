import {$} from '@wdio/globals';

const selectors = {
  emailField: 'input#username',
  passwordField: 'input#password',
  loginBtn: 'button#login-submit',

};

export default class LoginFormComponent {
  get rootEl() {
    return $('#WhiteboxContainer > section');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
