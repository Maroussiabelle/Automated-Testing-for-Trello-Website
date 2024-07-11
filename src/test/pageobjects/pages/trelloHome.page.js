import {browser} from '@wdio/globals'
import HomepageHeader from '../components/homepageHeader.component.js'


export default class TrelloHomePage {
  async open() {
    await browser.url('https://trello.com/')
  }

  constructor() {
    this.homepageHeader = new HomepageHeader()
  }
}
