import Header from '../components/common/header.component.js';
import {browser} from '@wdio/globals';
import AccountMenu from '../components/common/accountMenu.component.js';
import {TEST_DATA} from '../../data/test.data.js';
import SearchDialogWrapper from '../components/dashboard/searchDialogWrapper.component.js';
import BoardSectionHeader from '../components/dashboard/boardSectionHeader.component.js';
import HeaderCreateMenuPopOverComponent from '../components/dashboard/headerCreateMenuPopOver.component.js';

export default class DashboardPage {
  constructor() {
    this.header = new Header();
    this.accountMenu = new AccountMenu();
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

  async createBoardAndGetBackgroundId() {
    await this.header.item('createButton').click();
    await this.headerCreateMenuPopOver.item('createNewBoardButton').click();
    const backgroundImage = await this.headerCreateMenuPopOver.item('boardBackgroundImage').getCSSProperty('background-image');
    const url = new URL(backgroundImage.value.slice(5, -2));
    const backgroundId = url.pathname.slice(1);
    await this.headerCreateMenuPopOver.item('boardTitleInputField').setValue(TEST_DATA.boardTitle);
    await browser.keys('Enter');
    return backgroundId;
  }

  async performBoardSearch() {
    await this.header.item('searchFieldSkeleton').click();
    await this.header.item('searchField').setValue(TEST_DATA.boardForSearch);
  }
}
