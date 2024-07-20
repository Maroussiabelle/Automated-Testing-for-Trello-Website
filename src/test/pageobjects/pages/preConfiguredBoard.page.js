
import {browser} from '@wdio/globals'
import Board from '../components/preConfigured/board.component.js'
import ListTitlePopUp from '../components/newBoard/listTitlePopUp.component.js'
import ListWrapper from '../components/newBoard/listWrapper.component.js'
import CardComposer from '../components/newBoard/cardComposer.component.js'
import ListActionsMenu from '../components/newBoard/listActionsMenu.component.js'

export default class PreConfiguredBoardPage {
  constructor() {
    this.board = new Board()
    this.listTitlePopUp = new ListTitlePopUp()
    this.listForCards = new ListWrapper('List for cards')
    this.newList = new ListWrapper('New list')
    this.cardComposer = new CardComposer()
    this.listActionsMenu = new ListActionsMenu()
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

  async deleteList() {
    await browser.pause(1000)
    // await this.listWrapper.item('listEditMenuBtn').waitForClickable({timeout: 3000})
    await this.newList.item('listEditMenuBtn').click()
    await this.listActionsMenu.item('archiveThisListBtn').click()
  }
}
