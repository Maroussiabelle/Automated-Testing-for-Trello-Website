import Header from '../components/common/header.component.js';
import {browser} from '@wdio/globals';
import AccountMenu from '../components/common/accountMenu.component.js';
import Workspaces from '../components/dashboard/workspaces.component.js';
import CreateBoardMenu from '../components/dashboard/createBoardMenu.component.js';
import {TEST_DATA} from '../../data/test.data.js';
import BoardBackgroundPopover from '../components/dashboard/boardBackgroundPopover.component.js';
import SearchDialogWrapper from '../components/dashboard/searchDialogWrapper.component.js';
import BoardSectionHeader from '../components/dashboard/boardSectionHeader.component.js';
import HeaderCreateMenuPopOverComponent from '../components/dashboard/headerCreateMenuPopOver.component.js';

export default class DashboardPage {
  constructor() {
    this.header = new Header();
    this.accountMenu = new AccountMenu();
    this.workspaces = new Workspaces();
    this.createBoardMenu = new CreateBoardMenu();
    this.boardBackgroundPopover = new BoardBackgroundPopover();
    this.searchDialogWrapper = new SearchDialogWrapper();
    this.boardSectionHeader = new BoardSectionHeader();
    this.headerCreateMenuPopOver = new HeaderCreateMenuPopOverComponent();
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2/boards');
  }
  async openProfileAndVisibilitySettings() {
    await this.header.item('accountButton').scrollIntoView();
    await this.header.item('accountButton').click();
    await this.accountMenu.item('profileAndVisibilityButton').click();
  }

  async createBoard() {
    await this.header.item('createButton').click();
    await this.headerCreateMenuPopOver.item('createNewBoardButton').click();
    await this.createBoardMenu.item('boardBackgroundsBtn').click();
    await this.boardBackgroundPopover.item('seeMoreBackgroundPhotosBtn').click();
    await this.boardBackgroundPopover.
        item('selectMickHauptMountainBackgroundBtn').click();
    await this.boardBackgroundPopover.item('backBtn').click();
    await this.boardBackgroundPopover.item('closePopoverBtn').click();
    await this.createBoardMenu.item('boardTitleInputField').
        setValue(TEST_DATA.boardTitle);
    await browser.keys('Enter');
  }
  async searchBoard() {
    await this.header.item('searchFieldDiv').waitForDisplayed();
    await this.header.item('searchFieldDiv').click();
    await this.header.item('searchField').setValue(TEST_DATA.boardTitle);
  }

  async getBoardTitle() {
    return this.workspaces.item('displayedBoardTitle').getText();
  }
}
