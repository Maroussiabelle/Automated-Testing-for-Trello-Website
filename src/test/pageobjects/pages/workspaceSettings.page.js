import {browser} from '@wdio/globals';
import {Key} from 'webdriverio';
import BasePage from './base.page.js';

import {WorkspaceDetails, WorkspaceSideMenu} from '../components/index.js';

export default class WorkspaceSettingsPage extends BasePage {
  constructor() {
    super('/w/userworkspace42598426/account');
    this.workspaceDetails = new WorkspaceDetails();
    this.workspaceSideMenu = new WorkspaceSideMenu();
  }

  async updateWorkspaceNameAndDescription(editedWorkspaceName, testWorkspaceDescription) {
    // await this.open();
    await this.workspaceDetails.getElement('editWorkspaceBtn').click();
    await this.workspaceDetails.getElement('workspaceNameInputField').setValue(editedWorkspaceName);
    await this.workspaceDetails.getElement('descriptionInputField').setValue(testWorkspaceDescription);
    await this.workspaceDetails.getElement('saveButton').click();
  }

  async revertChangeofWorkspaceNameAndDescription(originalWorkspaceName) {
    await this.workspaceDetails.getElement('editWorkspaceBtn').click();
    await this.workspaceDetails.getElement('workspaceNameInputField').setValue(originalWorkspaceName);
    await this.workspaceDetails.getElement('descriptionInputField').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys(Key.Delete);
    await this.workspaceDetails.getElement('saveButton').click();
  }
}
