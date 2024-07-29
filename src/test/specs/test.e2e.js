import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js';
import LoginPage from '../pageobjects/pages/login.page.js';
import DashboardPage from '../pageobjects/pages/dashboard.page.js';
import ProfilePage from '../pageobjects/pages/profile.page.js';
import {TEST_DATA} from '../data/test.data.js';
import NewBoardPage from '../pageobjects/pages/newBoard.page.js';
import {$, browser} from '@wdio/globals';
import PreConfiguredBoardPage from '../pageobjects/pages/preConfiguredBoard.page.js';
import WorkspaceSettingsPage from '../pageobjects/pages/workspaceSettings.page.js';
// import {assert} from 'chai';
// import {expect} from 'chai';
// import * as chai from 'chai';
// chai.should();

const trelloHomepage = new TrelloHomePage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const profilePage = new ProfilePage();
const newBoardPage = new NewBoardPage();
const preConfiguredBoardPage = new PreConfiguredBoardPage();
const workspaceSettingsPage = new WorkspaceSettingsPage();

describe('Trello site functionality tests', () => {
  before('open Trello homepage and login as registered user', async () => {
    await trelloHomepage.open();
    await trelloHomepage.loginBtn.click();
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD);

    try {
      await dashboardPage.header.item('accountButton').waitForDisplayed();
    } catch (e) {
      const dismissButton = $('button[id="mfa-promote-dismiss"]');
      if (await dismissButton.waitForDisplayed()) {
        await dismissButton.click();
      } else {
        throw e;
      }
    }
  });

  // it('should navigate to user boards page after login', async () => {
  //   const currentUrl = await browser.getUrl();
  //
  //   expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards');
  //   // assert.equal(currentUrl, 'https://trello.com/u/jstestswdio2/boards', 'The current URL should match the expected URL');
  // });
  //
  // it('should update the username in the user userProfile', async () => {
  //   await dashboardPage.openProfileAndVisibilitySettings();
  //   await profilePage.updateUsername(TEST_DATA.newUsername);
  //   const updatedUsername = await profilePage.getUsername();
  //
  //   expect(updatedUsername).toEqual('@jstestswdio2_updated');
  //   await profilePage.revertUsername(TEST_DATA.originalUsername);
  // });

  it('should create a new board with the specified background and title', async () => {
    await dashboardPage.open();
    const backgroundId = await dashboardPage.createBoardAndGetBackgroundId();
    const displayedBoardTitle = await newBoardPage.boardHeader.item('displayedBoardTitle').getText();

    expect(displayedBoardTitle).toEqual(TEST_DATA.boardTitle);
    await newBoardPage.verifyBoardBackgroundCorrect(backgroundId);

    await newBoardPage.deleteBoard();
  });

  // it('should search for a board with a specified title', async () => {
  //   await dashboardPage.open();
  //   await dashboardPage.searchBoard();
  //   await dashboardPage.searchDialogWrapper.item('searchResult').waitForDisplayed();
  //   const isBoardFound = await dashboardPage.searchDialogWrapper.item('searchResult').isDisplayed();
  //   expect(isBoardFound).toBe(true);
  // });
  //
  // it('should create a new list on an existing board', async () => {
  //   await preConfiguredBoardPage.open();
  //   await preConfiguredBoardPage.addList('New list');
  //   const isListDisplayed = await preConfiguredBoardPage.newList.displayedListTitle('New list').waitForExist();
  //
  //   expect(isListDisplayed).toBe(true);
  //   await preConfiguredBoardPage.deleteList();
  // });
  //
  // it('should create a new card in a list on an existing board', async () => {
  //   await preConfiguredBoardPage.open();
  //   await preConfiguredBoardPage.addCard();
  //   const isCardDisplayed = await preConfiguredBoardPage.cardComposer.item('displayedCard').waitForExist();
  //
  //   expect(isCardDisplayed).toBe(true);
  //   await preConfiguredBoardPage.deleteCard(TEST_DATA.cardTitle);
  // });
  //
  // it('should filter cards on an existing board', async () => {
  //   await preConfiguredBoardPage.filterCards();
  //
  //   expect(preConfiguredBoardPage.listForCards.card(TEST_DATA.cardForFilterTest)).toBeDisplayed();
  // });
  //
  // it('should edit workspace details', async () => {
  //   const editedWorkspaceName = 'Edited workspace name';
  //   const testWorkspaceDescription = 'added description for test workspace';
  //   const originalWorkspaceName = 'Trello Workspace';
  //
  //   await dashboardPage.open();
  //   await dashboardPage.boardSectionHeader.item('settingsBtn').click();
  //   await workspaceSettingsPage.updateWorkspaceNameAndDescription(editedWorkspaceName, testWorkspaceDescription);
  //
  //   const displayedWorkspaceTitle = await workspaceSettingsPage.workspaceHeader.item('workspaceTitle').getText();
  //   expect(displayedWorkspaceTitle).toEqual(editedWorkspaceName);
  //   const displayedWorkspaceDescription = await workspaceSettingsPage.workspaceHeader.item('workspaceDescription').getText();
  //   expect(displayedWorkspaceDescription).toEqual(testWorkspaceDescription);
  //   await workspaceSettingsPage.revertChangeofWorkspaceNameAndDescription(originalWorkspaceName);
  // });
});
