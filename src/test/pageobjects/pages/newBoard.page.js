
import {browser} from '@wdio/globals'
import BoardSettingsMenu from '../components/newBoard/boardSettingsMenu.component.js'
import BoardHeader from '../components/newBoard/boardHeader.component.js'
import CloseBoardPopOver from '../components/newBoard/closeBoardPopOver.component.js'


export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu()
    this.boardHeader = new BoardHeader()
    this.closeBoardPopover = new CloseBoardPopOver()
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
