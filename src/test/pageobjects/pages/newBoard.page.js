
import {$, browser} from '@wdio/globals'
import BoardSettingsMenu from '../components/newBoard/boardSettingsMenu.component.js'
import BoardHeader from '../components/newBoard/boardHeader.component.js'
import CloseBoardPopOver from '../components/newBoard/closeBoardPopOver.component.js'
import Board from '../components/newBoard/board.component.js'
import ListTitlePopUp from '../components/newBoard/listTitlePopUp.component.js'
import ListWrapper from '../components/newBoard/listWrapper.component.js'
import CardComposer from '../components/newBoard/cardComposer.component.js'


export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu()
    this.boardHeader = new BoardHeader()
    this.closeBoardPopover = new CloseBoardPopOver()
    this.board = new Board()
    this.listTitlePopUp = new ListTitlePopUp()
    this.listWrapper = new ListWrapper()
    this.cardCompopser = new CardComposer()
  }
  async open() {
    await browser.url('https://trello.com/b/cq9d5jJp/new-board')
  }

  async deleteBoard() {
    await this.boardHeader.item('menuBtn').click()
    await this.boardSettingsMenu.item('closeBoardBtn').click()
    await this.closeBoardPopover.item('closeBtn').click()
    await this.boardSettingsMenu.item('permanentlyDeleteBoardBtn').click()
  }

  async addList(title) {
    await this.board.item('boardHeader').click()
    await this.board.item('addAlistBtn').click()
    await this.listTitlePopUp.item('listTitleInputField').
        setValue(title)
    await browser.keys('Enter')
  }
}


