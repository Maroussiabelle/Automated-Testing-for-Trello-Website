
import {browser} from '@wdio/globals'
import Board from '../components/newBoard/board.component.js'
import ListTitlePopUp from '../components/newBoard/listTitlePopUp.component.js'
import ListWrapper from '../components/newBoard/listWrapper.component.js'
import CardComposer from '../components/newBoard/cardComposer.component.js'

export default class PreConfiguredBoardPage {
  constructor() {
    this.board = new Board()
    this.listTitlePopUp = new ListTitlePopUp()
    this.listWrapper = new ListWrapper()
    this.cardComposer = new CardComposer()
  }

  async open() {
    await browser.url('https://trello.com/b/cq9d5jJp/new-board')
  }


  async addList(title) {
    await this.board.item('boardHeader').click()
    await this.board.item('addAlistBtn').click()
    await this.listTitlePopUp.item('listTitleInputField').
        setValue(title)
    await browser.keys('Enter')
  }
}
