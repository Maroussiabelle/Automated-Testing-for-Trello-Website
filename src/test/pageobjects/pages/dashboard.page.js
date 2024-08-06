import {browser} from '@wdio/globals';
import {TEST_DATA} from '../../data/test.data.js';
import BasePage from './base.page.js';
import {Header, AccountMenu, SearchDialogWrapper, BoardSectionHeader, HeaderCreateMenuPopOverComponent} from '../components/index.js';

export default class DashboardPage extends BasePage {
  constructor() {
    super();
    this.header = new Header();
    this.accountMenu = new AccountMenu();
    this.searchDialogWrapper = new SearchDialogWrapper();
    this.boardSectionHeader = new BoardSectionHeader();
    this.headerCreateMenuPopOver = new HeaderCreateMenuPopOverComponent();
  }

  async open(userName) {
    return browser.url(`/u/${userName}/boards`);
  }

  async openProfileAndVisibilitySettings() {
    await this.header.getElement('accountButton').scrollIntoView();
    await this.header.getElement('accountButton').click();
    await this.accountMenu.getElement('profileAndVisibilityButton').click();
  }

  async createBoardAndGetBackgroundId() {
    await this.header.getElement('createButton').click();
    await this.headerCreateMenuPopOver.getElement('createNewBoardButton').click();
    const backgroundImage = await this.headerCreateMenuPopOver.getElement('boardBackgroundImage').getCSSProperty('background-image');
    const url = new URL(backgroundImage.value.slice(5, -2));
    const backgroundId = url.pathname.slice(1);
    await this.headerCreateMenuPopOver.getElement('boardTitleInputField').setValue(TEST_DATA.boardTitle);
    await browser.keys('Enter');
    return backgroundId;
  }

  async performBoardSearch() {
    await this.header.getElement('searchFieldSkeleton').click();
    await this.header.getElement('searchField').setValue(TEST_DATA.boardForSearch);
  }
}
