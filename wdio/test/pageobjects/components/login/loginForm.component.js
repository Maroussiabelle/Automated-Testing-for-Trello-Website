import BaseComponent from '../common/base.component.js';

const selectors = {
  emailField: 'input#username',
  passwordField: 'input#password',
  loginBtn: 'button#login-submit',
};

export default class LoginFormComponent extends BaseComponent {
  constructor() {
    super('#WhiteboxContainer > section', selectors);
  }
}
