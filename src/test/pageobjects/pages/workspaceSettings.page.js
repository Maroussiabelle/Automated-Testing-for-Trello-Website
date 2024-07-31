import WorkspaceDetails from '../components/workspace/workspaceDetails.component.js';
import {browser} from '@wdio/globals';
import {Key} from 'webdriverio';
import WorkspaceSideMenu from '../components/workspace/workspaceSideMenu.component.js';

export default class WorkspaceSettingsPage {
  constructor() {
    this.workspaceDetails = new WorkspaceDetails();
    this.workspaceSideMenu = new WorkspaceSideMenu();
  }

  async updateWorkspaceNameAndDescription(editedWorkspaceName, testWorkspaceDescription) {
    await this.workspaceDetails.item('editWorkspaceBtn').click();
    await this.workspaceDetails.item('workspaceNameInputField').setValue(editedWorkspaceName);
    await this.workspaceDetails.item('descriptionInputField').setValue(testWorkspaceDescription);
    await this.workspaceDetails.item('saveButton').click();
  }

  async revertChangeofWorkspaceNameAndDescription(originalWorkspaceName) {
    await this.workspaceDetails.item('editWorkspaceBtn').click();
    await this.workspaceDetails.item('workspaceNameInputField').setValue(originalWorkspaceName);
    await this.workspaceDetails.item('descriptionInputField').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys(Key.Delete);
    await this.workspaceDetails.item('saveButton').click();
  }
}
