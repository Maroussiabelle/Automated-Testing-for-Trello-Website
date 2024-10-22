import {TEST_DATA} from '../data/test.data.js';
import {$, browser} from '@wdio/globals';
import {assert, expect as chaiExpect, should} from 'chai';
import pages from '../pageobjects/pages/index.js';

should();

describe('Trello site functionality tests', () => {
  before('open Trello homepage and login as registered user', async () => {
    await pages('trelloHomepage').open();
    await pages('trelloHomepage').loginBtn.click();
    await pages('login').login(process.env.TRELLO_EMAIL, process.env.PASSWORD);

    try {
      await pages('dashboard').header.getElement('accountButton').waitForDisplayed();
    } catch (e) {
      const dismissButton = $('button[id="mfa-promote-dismiss"]');
      if (await dismissButton.waitForDisplayed()) {
        await dismissButton.click();
      } else {
        throw e;
      }
    }
  });

  it('should navigate to user boards page after login', async () => {
    const currentUrl = await browser.getUrl();

    assert.equal(currentUrl, 'https://trello.com/u/jstestswdio2/boards', 'The current URL should match the expected URL');
  });

  it('should update the username in the user userProfile', async () => {
    try {
      await pages('dashboard').openProfileAndVisibilitySettings();
      await pages('profile').updateUsername(TEST_DATA.newUsername);
      const isNewUserNameDisplayed = await pages('profile').profileContent.displayedUserName(TEST_DATA.newUsername).isDisplayed();

      chaiExpect(isNewUserNameDisplayed).to.be.true;
    } finally {
      await pages('profile').revertUsername(TEST_DATA.originalUsername);
    }
  });

  it('should create a new board with the specified background and title', async () => {
    await pages('dashboard').open(TEST_DATA.originalUsername);
    const backgroundId = await pages('dashboard').createBoardAndGetBackgroundId();
    const displayedBoardTitle = await pages('newBoard').boardHeader.getElement('displayedBoardTitle').getText();
    chaiExpect(displayedBoardTitle).equal(TEST_DATA.boardTitle);
    await pages('newBoard').verifyBoardBackgroundCorrect(backgroundId);

    await pages('newBoard').deleteBoard();
  });

  it('should search for a board with a specified title', async () => {
    await pages('dashboard').performBoardSearch();
    await pages('dashboard').searchDialogWrapper.waitForSearchResult(TEST_DATA.boardForSearch, 5000);
    const isBoardDisplayed = await pages('dashboard').searchDialogWrapper.isSearchResultDisplayed(TEST_DATA.boardForSearch);

    expect(isBoardDisplayed).toBe(true);
  });

  it('should create a new list on an existing board', async () => {
    await pages('preConfiguredBoard').open();
    await pages('preConfiguredBoard').addList('New list');
    await pages('preConfiguredBoard').newList.getListTitle('New list').waitForDisplayed();

    await pages('preConfiguredBoard').deleteList();
  });

  it('should create a new card in a list on an existing board', async () => {
    await pages('preConfiguredBoard').open();
    await pages('preConfiguredBoard').addCard();

    const isCardDisplayed = await pages('preConfiguredBoard').cardComposer.isCardDisplayed(TEST_DATA.cardTitle);
    expect(isCardDisplayed).toBe(true);

    await pages('preConfiguredBoard').deleteCard(TEST_DATA.cardTitle);
  });

  it('should filter cards on an existing board', async () => {
    await pages('preConfiguredBoard').open();
    await pages('preConfiguredBoard').filterCards();

    expect(pages('preConfiguredBoard').listForCards.getCardByName(TEST_DATA.cardForFilterTest)).toBeDisplayed();
  });

  it('should edit workspace details', async () => {
    await pages('dashboard').open(TEST_DATA.originalUsername);
    await pages('dashboard').boardSectionHeader.getElement('settingsBtn').click();
    await pages('workspaceSettings').updateWorkspaceNameAndDescription(TEST_DATA.editedWorkspaceName, TEST_DATA.testWorkspaceDescription);

    await pages('workspaceSettings').workspaceSideMenu.getElement('editedWorkspaceTitle').waitForDisplayed();

    await pages('workspaceSettings').workspaceDetails.getElement('workspaceDescription').waitForDisplayed();

    await pages('workspaceSettings').revertChangeofWorkspaceNameAndDescription(TEST_DATA.originalWorkspaceName);
  });
});
