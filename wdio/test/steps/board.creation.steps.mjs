import {Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {browser} from '@wdio/globals';
import {expect as chaiExpect} from 'chai';
import {TEST_DATA} from '../data/test.data.js';

const obj = {};

When(/^the user clicks on the Create new board button$/, async () => {
  await pages('dashboard').header.getElement('createButton').click();
  await pages('dashboard').headerCreateMenuPopOver.getElement('createNewBoardButton').click();
});

When(/^selects a background and gives the board a title$/, async () => {
  const backgroundImage = await pages('dashboard').headerCreateMenuPopOver.getElement('boardBackgroundImage').getCSSProperty('background-image');
  const url = new URL(backgroundImage.value.slice(5, -2));
  await pages('dashboard').headerCreateMenuPopOver.getElement('boardTitleInputField').setValue(TEST_DATA.boardTitle);
  obj.backgroundId = url.pathname.slice(1);
});

When(/^Presses enter$/, async () => {
  await browser.keys('Enter');
});

Then(/^a new board should be created and displayed on the dashboard$/, async () => {
  const displayedBoardTitle = await pages('newBoard').boardHeader.getElement('displayedBoardTitle').getText();
  chaiExpect(displayedBoardTitle).equal(TEST_DATA.boardTitle);
  await pages('newBoard').verifyBoardBackgroundCorrect(obj.backgroundId);

  await pages('newBoard').deleteBoard();
});

// Given(/^the 123$/, async ()  => {
//   // await browser.url("file:///home/maria/Projects/wdio-trello-task/123.html");
//   await pages('trelloHomepage').open();
//   await pages('trelloHomepage').loginBtn.click();
// });
//
// Given(/^the 456/, async ()  => {
//   await browser.pause(1000);
//   await $('button').click();
//   await browser.pause(2000);
//   console.log("==================================");
//   console.log("456");
//   console.log("==================================");
// });
//
// Given(/^the 789/, async ()  => {
//   await browser.pause(1000);
//   await $('button').click();
//   await browser.pause(2000);
//   console.log("==================================");
//   console.log("789");
//   console.log("==================================");
// });
//
// BeforeAll(async () => {
//   console.log("==================================");
//   console.log("BeforeAll");
//   console.log("==================================");
// });
