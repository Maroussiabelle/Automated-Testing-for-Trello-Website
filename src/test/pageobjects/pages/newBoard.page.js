
import {browser} from '@wdio/globals'
import BoardSettingsMenu from '../components/boardSettingsMenu.component.js'
import BoardHeader from '../components/boardHeader.component.js'
import CloseBoardPopOver from '../components/closeBoardPopOver.component.js'


export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu()
    this.boardHeader = new BoardHeader()
    this.closeBoardPopover = new CloseBoardPopOver()
  }
  async open() {
    await browser.url('https://trello.com/b/JCuRTS0a/new-board')
  }

  async closeBoard() {
    await this.boardHeader.item('menuBtn').click()
    await this.boardSettingsMenu.item('closeBoardBtn').click()
    await this.closeBoardPopover.item('closeBtn').click()
  }
}
