import {Given, Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {TEST_DATA} from '../data/test.data.js';

Given(/^the user is signed in and on a specific board with lists$/, async () => {
  await pages('preConfiguredBoard').open();
});
When(/^the user clicks the Add a card button in a list$/, async () => {
  await pages('preConfiguredBoard').listForCards.getElement('addNewCardBtn').click();
});
When(/^enters a title for the card$/, async () => {
  await pages('preConfiguredBoard').cardComposer.getElement('cardTitleInputField').setValue(TEST_DATA.cardTitle);
});
When(/^clicks the Add Card button$/, async () => {
  await pages('preConfiguredBoard').cardComposer.getElement('addCardBtn').click();
});
Then(/^a new card should be created and displayed in the list$/, async () => {
  const isCardDisplayed = await pages('preConfiguredBoard').cardComposer.isCardDisplayed(TEST_DATA.cardTitle);
  expect(isCardDisplayed).toBe(true);

  await pages('preConfiguredBoard').deleteCard(TEST_DATA.cardTitle);
});

Given(/^the user is signed in and on a specific board with multiple cards$/, async () => {
  await pages('preConfiguredBoard').open();
});
When(/^the user clicks the Filter Cards button$/, async () => {
  await pages('preConfiguredBoard').boardHeader.getElement('filterCardsBtn').click();
});
When(/^selects specific filter criteria$/, async () => {
  await pages('preConfiguredBoard').filterWindow.getElement('keywordInputField').click();
  await pages('preConfiguredBoard').filterWindow.getElement('keywordInputField').setValue('filter');
});
Then(/^the cards matching the filter criteria should be displayed on the board$/, async () => {
  expect(await pages('preConfiguredBoard').listForCards.getCardByName(TEST_DATA.cardForFilterTest)).toBeDisplayed();
});
