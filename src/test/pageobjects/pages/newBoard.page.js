import BoardSettingsMenu from '../components/newBoard/boardSettingsMenu.component.js';
import BoardHeader from '../components/newBoard/boardHeader.component.js';
import CloseBoardPopOver from '../components/newBoard/closeBoardPopOver.component.js';
import {$} from '@wdio/globals';

export default class NewBoardPage {
  constructor() {
    this.boardSettingsMenu = new BoardSettingsMenu();
    this.boardHeader = new BoardHeader();
    this.closeBoardPopover = new CloseBoardPopOver();
  }

  async deleteBoard() {
    await this.boardHeader.item('menuBtn').click();
    await this.boardSettingsMenu.item('closeBoardBtn').click();
    await this.closeBoardPopover.item('closeBtn').click();
    await this.boardSettingsMenu.item('permanentlyDeleteBoardBtn').click();
  }

  async verifyBoardBackgroundCorrect(backgroundId) {
    await $(`//div[@id="trello-root" and contains(@style, "${backgroundId}")]`).waitForDisplayed();
  }
}