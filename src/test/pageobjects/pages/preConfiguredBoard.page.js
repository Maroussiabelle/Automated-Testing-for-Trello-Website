
import {browser} from '@wdio/globals'
import Board from '../components/preConfigured/board.component.js'
import ListTitlePopUp from '../components/preConfigured/listTitlePopUp.component.js'
import ListWrapper from '../components/preConfigured/listWrapper.component.js'
import CardComposer from '../components/preConfigured/cardComposer.component.js'
import ListActionsMenu from '../components/preConfigured/listActionsMenu.component.js'
import CardDetailWindowComponent from '../components/preConfigured/cardDetailWindow.component.js'
import {TEST_DATA} from '../../data/test.data.js'
import BoardHeader from '../components/newBoard/boardHeader.component.js'
import FilterWindow from '../components/preConfigured/filterWindow.component.js'

export default class PreConfiguredBoardPage {
  constructor() {
    this.board = new Board()
    this.listTitlePopUp = new ListTitlePopUp()
    this.listForCards = new ListWrapper('List for cards')
    this.newList = new ListWrapper('New list')
    this.cardComposer = new CardComposer()
    this.listActionsMenu = new ListActionsMenu()
    this.cardDetailWindow = new CardDetailWindowComponent()
    this.boardHeader = new BoardHeader()
    this.filterWindow = new FilterWindow()
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

  async deleteCard(cardName) {
    await this.listForCards.card(cardName).click()
    await this.cardDetailWindow.item('archiveCardButton').click()
    await this.cardDetailWindow.item('deleteCardButton').click()
  }
}
