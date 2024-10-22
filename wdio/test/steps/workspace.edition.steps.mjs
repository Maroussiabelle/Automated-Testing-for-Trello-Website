import {Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {TEST_DATA} from '../data/test.data.js';

When(/^the user navigates to the workspace settings$/, async () => {
  await pages('dashboard').boardSectionHeader.getElement('settingsBtn').click();
});
When(/^the user updates the workspace name and description and clicks the Save button$/, async () => {
  await pages('workspaceSettings').updateWorkspaceNameAndDescription(TEST_DATA.editedWorkspaceName, TEST_DATA.testWorkspaceDescription);
});
Then(/^the workspace details should be updated successfully$/, async () => {
  await pages('workspaceSettings').workspaceSideMenu.getElement('editedWorkspaceTitle').waitForDisplayed();

  await pages('workspaceSettings').workspaceDetails.getElement('workspaceDescription').waitForDisplayed();

  await pages('workspaceSettings').revertChangeofWorkspaceNameAndDescription(TEST_DATA.originalWorkspaceName);
});
