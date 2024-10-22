import {Then, When as when} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {expect as chaiExpect} from 'chai';
import {TEST_DATA} from '../data/test.data.js';

when(/^the user navigates to their profile$/, async () => {
  await pages('dashboard').header.getElement('accountButton').scrollIntoView();
  await pages('dashboard').header.getElement('accountButton').click();
});

when(/^clicks the Edit Profile Info button$/, async () => {
  await pages('dashboard').accountMenu.getElement('profileAndVisibilityButton').click();
});

when(/^updates their username$/, async () => {
  await pages('profile').profileDataContainer.getElement('usernameInputField').setValue(TEST_DATA.newUsername);
});

when(/^clicks the Save button$/, async () => {
  await pages('profile').profileDataContainer.getElement('saveButton').click();
});
Then(/^their profile information should be updated successfully$/, async () => {
  const isNewUserNameDisplayed = await pages('profile').profileContent.displayedUserName(TEST_DATA.newUsername).waitForDisplayed();

  chaiExpect(isNewUserNameDisplayed).to.be.true;

  await pages('profile').revertUsername(TEST_DATA.originalUsername);
});
