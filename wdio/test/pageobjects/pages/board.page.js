import {$, browser} from '@wdio/globals';
import {TEST_DATA} from '../../data/test.data.js';
import BasePage from './base.page.js';
import {
  Board,
  BoardHeader,
  BoardSettingsMenu,
  CardComposer,
  CardDetailWindowComponent,
  CloseBoardPopOver,
  FilterWindow,
  ListActionsMenu,
  ListTitlePopUp,
  ListWrapper,
} from '../components/index.js';
import DeleteBoardPopOver from '../components/newBoard/deleteBoardPopOver.component.js';

export default class BoardPage extends BasePage {
  constructor(boardUrl) {
    super(boardUrl);
    this.board = new Board();
    this.listTitlePopUp = new ListTitlePopUp();
    this.listForCards = new ListWrapper('List for cards');
    this.newList = new ListWrapper('New list');
    this.cardComposer = new CardComposer();
    this.listActionsMenu = new ListActionsMenu();
    this.cardDetailWindow = new CardDetailWindowComponent();
    this.boardHeader = new BoardHeader();
    this.filterWindow = new FilterWindow();
    this.boardSettingsMenu = new BoardSettingsMenu();
    this.closeBoardPopover = new CloseBoardPopOver();
    this.deleteBoardPopover = new DeleteBoardPopOver();
  }

  async addList(title) {
    await this.board.getElement('addAlistBtn').click();
    await this.listTitlePopUp.getElement('listTitleInputField').setValue(title);
    await browser.keys('Enter');
  }

  async deleteList() {
    await browser.pause(1000);
    await this.newList.getElement('listEditMenuBtn').click();
    await this.listActionsMenu.getElement('archiveThisListBtn').click();
  }

  async addCard() {
    await this.listForCards.getElement('addNewCardBtn').click();
    await this.cardComposer.getElement('cardTitleInputField').setValue(TEST_DATA.cardTitle);
    await this.cardComposer.getElement('addCardBtn').click();
  }
  async deleteCard(cardName) {
    await browser.pause(1000);
    await this.listForCards.getCardByName(cardName).click();
    await this.cardDetailWindow.getElement('archiveCardButton').click();
    await this.cardDetailWindow.getElement('deleteCardButton').click();
  }
  async filterCards() {
    await this.boardHeader.getElement('filterCardsBtn').click();
    await this.filterWindow.getElement('keywordInputField').click();
    await this.filterWindow.getElement('keywordInputField').setValue('filter');
  }

  async deleteBoard() {
    await this.boardHeader.getElement('menuBtn').click();
    await this.boardSettingsMenu.getElement('closeBoardBtn').click();
    await this.closeBoardPopover.getElement('closeBtn').click();
    await this.boardSettingsMenu.getElement('permanentlyDeleteBoardBtn').click();
    await this.deleteBoardPopover.getElement('confirmDeleteBtn').click();
  }

  async verifyBoardBackgroundCorrect(backgroundId) {
    await $(`//div[@id="trello-root" and contains(@style, "${backgroundId}")]`).waitForDisplayed();
  }
}
