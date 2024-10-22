import {Given, Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {$, browser} from '@wdio/globals';
import {assert} from 'chai';
import {TEST_DATA} from '../data/test.data.js';

Given(/^the user navigates to the login page$/, async () => {
  await pages('trelloHomepage').open();
  await pages('trelloHomepage').loginBtn.click();
});
When(/^the user submits username and password$/, async () => {
  await pages('login').login(process.env.TRELLO_EMAIL, process.env.PASSWORD);

  try {
    await pages('dashboard').header.getElement('accountButton').waitForDisplayed();
  } catch (e) {
    const dismissButton = $('button[id="mfa-promote-dismiss"]');
    if (await dismissButton.waitForDisplayed()) {
      await dismissButton.click();
      await pages('dashboard').header.getElement('accountButton').waitForDisplayed();
    } else {
      throw e;
    }
  }
});
Then(/^the user should be redirected to their Trello dashboard$/, async () => {
  await pages('dashboard').open(TEST_DATA.originalUsername);
  const currentUrl = await browser.getUrl();
  assert.equal(currentUrl, 'https://trello.com/u/jstestswdio2/boards', 'The current URL should match the expected URL');
});

Given(/^the user is on their Trello dashboard$/, async () => {
  await pages('dashboard').open(TEST_DATA.originalUsername);
});
