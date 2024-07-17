
import {$, browser} from '@wdio/globals'
import BoardSettingsMenu from '../components/newBoard/boardSettingsMenu.component.js'
import BoardHeader from '../components/newBoard/boardHeader.component.js'
import CloseBoardPopOver from '../components/newBoard/closeBoardPopOver.component.js'
import Board from '../components/newBoard/board.component.js'
import ListTitlePopUp from '../components/newBoard/listTitlePopUp.component.js'
import {TEST_DATA} from '../../data/test.data.js'
import ListWrapper from '../components/newBoard/listWrapper.component.js'


export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu()
    this.boardHeader = new BoardHeader()
    this.closeBoardPopover = new CloseBoardPopOver()
    this.board = new Board()
    this.listTitlePopUp = new ListTitlePopUp()
    this.listWrapper = new ListWrapper()
  }
  async open() {
    await browser.url('https://trello.com/b/JCuRTS0a/new-board')
  }

  async deleteBoard() {
    await this.boardHeader.item('menuBtn').click()
    await this.boardSettingsMenu.item('closeBoardBtn').click()
    await this.closeBoardPopover.item('closeBtn').click()
    await this.boardSettingsMenu.item('permanentlyDeleteBoardBtn').click()
  }
}


