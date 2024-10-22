import {Then, When} from '@wdio/cucumber-framework';
import pages from '../pageobjects/pages/index.js';
import {TEST_DATA} from '../data/test.data.js';

When(/^the user clicks on the search bar$/, async () => {
  await pages('dashboard').header.getElement('searchFieldSkeleton').click();
});

When(/^types the name of the board in the search bar$/, async () => {
  await pages('dashboard').header.getElement('searchField').setValue(TEST_DATA.boardForSearch);
  await pages('dashboard').searchDialogWrapper.waitForSearchResult(TEST_DATA.boardForSearch, 5000);
});

Then(/^the board with the specified name should appear in the search results$/, async () => {
  const isBoardDisplayed = await pages('dashboard').searchDialogWrapper.isSearchResultDisplayed(TEST_DATA.boardForSearch);
  expect(isBoardDisplayed).toBe(true);
});
