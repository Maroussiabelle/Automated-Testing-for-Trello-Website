import {Given, Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {browser} from '@wdio/globals';

Given(/^the user is signed in and on a specific board$/, async () => {
  await pages('preConfiguredBoard').open();
});
When(/^the user clicks the Add a list button$/, async () => {
  await pages('preConfiguredBoard').board.getElement('addAlistBtn').click();
});
When(/^enters a title for the list$/, async () => {
  await pages('preConfiguredBoard').listTitlePopUp.getElement('listTitleInputField').setValue('New list');
});
When(/^presses the Enter key$/, async () => {
  await browser.keys('Enter');
});
Then(/^a new list should be created and displayed on the board$/, async () => {
  await pages('preConfiguredBoard').newList.getListTitle('New list').waitForDisplayed();

  await pages('preConfiguredBoard').deleteList();
});
