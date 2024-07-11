
import LoginFormComponent from '../components/loginForm.component.js'


export default class LoginPage {
  async login(email, password) {
    await this.loginForm.item('emailField').setValue(email)
    await this.loginForm.item('continueBtn').click()
    await this.loginForm.item('passwordField').waitForDisplayed()
    await this.loginForm.item('passwordField').waitForEnabled()
    await this.loginForm.item('passwordField').setValue(password)
    await this.loginForm.item('loginBtn').click()
  }

  constructor() {
    this.loginForm = new LoginFormComponent()
  }
}


