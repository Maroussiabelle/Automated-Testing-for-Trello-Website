import Header from '../components/common/header.component.js';
import {browser} from '@wdio/globals';
import ProfileDataContainerComponent
  from '../components/userProfile/profileDataContainer.component.js';
import FlagGroup from '../components/userProfile/flagGroup.component.js';
import ProfileContent from '../components/userProfile/profileContent.component.js';

export default class ProfilePage {
  constructor() {
    this.header = new Header();
    this.profileDataContainer = new ProfileDataContainerComponent();
    this.flagGroup = new FlagGroup();
    this.profileContent = new ProfileContent();
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2');
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
