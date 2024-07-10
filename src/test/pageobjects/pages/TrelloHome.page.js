import {browser} from '@wdio/globals'


export default class TrelloHomePage {
  async open() {
    await browser.url('https://trello.com/')
  }
}
