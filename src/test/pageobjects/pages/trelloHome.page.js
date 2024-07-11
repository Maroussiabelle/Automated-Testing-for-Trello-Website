import {browser} from '@wdio/globals'
import Header from '../components/header.component.js'


export default class TrelloHomePage {
  async open() {
    await browser.url('https://trello.com/')
  }

  constructor() {
    this.header = new Header()
  }
}
