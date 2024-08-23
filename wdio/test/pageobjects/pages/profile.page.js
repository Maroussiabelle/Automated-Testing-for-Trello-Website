import BasePage from './base.page.js';
import {Header, ProfileDataContainerComponent, FlagGroup, ProfileContent} from '../components/index.js';
import {TEST_DATA} from '../../data/test.data.js';

export default class ProfilePage extends BasePage {
  constructor() {
    super(`/u/${TEST_DATA.originalUsername}`);
    this.header = new Header();
    this.profileDataContainer = new ProfileDataContainerComponent();
    this.flagGroup = new FlagGroup();
    this.profileContent = new ProfileContent();
  }
  async updateUsername(newUsername) {
    await this.profileDataContainer.getElement('usernameInputField')
        .setValue(newUsername);
    await this.profileDataContainer.getElement('saveButton').click();
    await this.flagGroup.getElement('savedCheckbox').waitForDisplayed();
  }

  async revertUsername(originalUsername) {
    await this.profileDataContainer.getElement('usernameInputField')
        .setValue(originalUsername);
    await this.profileDataContainer.getElement('saveButton').click();
    await this.flagGroup.getElement('savedCheckbox').waitForDisplayed();
  }
}
