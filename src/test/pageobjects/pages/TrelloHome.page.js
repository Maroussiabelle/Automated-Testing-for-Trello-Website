import {browser} from '@wdio/globals'
import Header from '../components/header.component.js'
import CookieBanner from '../components/cookieBanner.component.js'


export default class TrelloHomePage {
  async open() {
    await browser.url('https://trello.com/')
  }

  constructor() {
    this.header = new Header()
    this.cookieBanner = new CookieBanner()
  }
}
