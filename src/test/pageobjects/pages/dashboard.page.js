import Header from '../components/header.component.js'
import {$, browser} from '@wdio/globals'
import AccountMenu from '../components/accountMenu.component.js'
import Workspaces from '../components/workspaces.component.js'
import CreateBoardMenu from '../components/createBoardMenu.component.js'
import {TEST_DATA} from '../../data/test.data.js'
import BoardBackgroundPopover from '../components/boardBackgroundPopover.component.js'


export default class DashboardPage {
  constructor() {
    this.header = new Header()
    this.accountMenu = new AccountMenu()
    this.workspaces = new Workspaces()
    this.createBoardMenu = new CreateBoardMenu()
    this.boardBackgroundPopover = new BoardBackgroundPopover()
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2/boards')
  }
  async openProfileAndVisibilitySettings() {
    await this.header.item('accountButton').click()
    await this.accountMenu.item('profileAndVisibilityButton').click()
  }

  async createBoard() {
    await this.workspaces.item('createNewBoardButton').click()
    await this.createBoardMenu.item('boardBackgroundsBtn').click()
    await this.boardBackgroundPopover.item('seeMoreBackgroundPhotosBtn').click()
    await this.boardBackgroundPopover.
        item('selectMickHauptMountainBackgroundBtn').click()
    await this.boardBackgroundPopover.item('backBtn').click()
    await this.boardBackgroundPopover.item('closePopoverBtn').click()
    await this.createBoardMenu.item('boardTitleInputField').
        setValue(TEST_DATA.boardTitle)
    await this.createBoardMenu.item('createBoardBtn').click()
  }

  async getBoardTitle() {
    return this.workspaces.item('displayedBoardTitle').getText()
  }

  async verifyBoardBackgroundCorrect() {
    await $(`//div[@id="trello-root" and contains(@style, "${TEST_DATA.backgroundMountainImageId}")]`)
        .waitForDisplayed()
  }
}
