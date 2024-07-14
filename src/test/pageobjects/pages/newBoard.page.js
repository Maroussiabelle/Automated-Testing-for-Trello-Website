
import {$, browser} from '@wdio/globals'
import BoardSettingsMenu from '../components/boardSettingsMenu.component.js'


export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu()
  }
  async open() {
    await browser.url('https://trello.com/b/JCuRTS0a/new-board')
  }

  get menuButton() {
    return $('#content > div > div > div.board-main-content > ' +
        'div.board-header.u-clearfix.js-board-header > ' +
        'div > span.leC8WfkzmokiUl > button.frrHNIWnTojsww.GDunJzzgFqQY_3.' +
        'bxgKMAm3lq5BpA.HAVwIqCeMHpVKh.SEj5vUdI3VvxDc > span > span')
  }

  async closeBoard() {
    await this.menuButton.click()
    await this.boardSettingsMenu.item('closeBoardBtn').click()
  }
}
