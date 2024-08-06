import BasePage from './base.page.js';
import {LoginFormComponent} from '../components/index.js';

export default class LoginPage extends BasePage {
  constructor() {
    super('/login');
    this.loginForm = new LoginFormComponent();
  }

  async login(email, password) {
    await this.loginForm.getElement('emailField').setValue(email);
    await this.loginForm.getElement('loginBtn').click();
    await this.loginForm.getElement('passwordField').waitForDisplayed();
    await this.loginForm.getElement('passwordField').waitForEnabled();
    await this.loginForm.getElement('passwordField').setValue(password);
    await this.loginForm.getElement('loginBtn').click();
  }
}
