import {$} from '@wdio/globals';

const selectors = {
  emailField: 'input#username',
  continueBtn: '#login-submit > span',
  passwordField: 'input#password',
  loginBtn: 'span.css-178ag6o',

};

export default class LoginFormComponent {
  get rootEl() {
    return $('#WhiteboxContainer > section');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
