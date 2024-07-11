import Header from '../components/header.component.js'
import {browser} from '@wdio/globals'
import AccountMenu from '../components/accountMenu.component.js'


export default class DashboardPage {
  constructor() {
    this.header = new Header()
    this.accountMenu = new AccountMenu()
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2/boards')
  }
  async openProfileAndVisibilitySettings() {
    await this.header.item('accountButton').click()
    await this.accountMenu.item('profileAndVisibilityButton').click()
  }
}
