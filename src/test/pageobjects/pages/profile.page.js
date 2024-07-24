import Header from '../components/common/header.component.js';
import AccountMenu from '../components/common/accountMenu.component.js';
import {browser} from '@wdio/globals';
import ProfileDataContainerComponent
  from '../components/userProfile/profileDataContainer.component.js';
import HeaderMemberDetail
  from '../components/userProfile/headerMemberDetail.component.js';
import FlagGroup from '../components/userProfile/flagGroup.component.js';

export default class ProfilePage {
  constructor() {
    this.header = new Header();
    this.accountMenu = new AccountMenu();
    this.profileDataContainer = new ProfileDataContainerComponent();
    this.headerMemberDetail = new HeaderMemberDetail();
    this.flagGroup = new FlagGroup();
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2');
  }

  async getUsername() {
    return await this.headerMemberDetail.item('username').getText();
  }

  async updateUsername(newUsername) {
    await this.profileDataContainer.item('usernameInputField')
        .setValue(newUsername);
    await this.profileDataContainer.item('saveButton').click();
    await this.flagGroup.item('savedCheckbox').waitForDisplayed();
  }

  async revertUsername(originalUsername) {
    await this.profileDataContainer.item('usernameInputField')
        .setValue(originalUsername);
    await this.profileDataContainer.item('saveButton').click();
    await this.flagGroup.item('savedCheckbox').waitForDisplayed();
  }
}
