import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import DashboardPage from '../pageobjects/pages/dashboard.page.js'
import ProfilePage from '../pageobjects/pages/profile.page.js'
import {TEST_DATA} from '../data/test.data.js'
import NewBoardPage from '../pageobjects/pages/newBoard.page.js'


const trelloHomepage = new TrelloHomePage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const profilePage = new ProfilePage()
const newBoardPage = new NewBoardPage()


describe('Trello site functionality tests', () => {
  before('open Trello homepage and login as registered user', async () => {
    await trelloHomepage.open()
    await trelloHomepage.loginBtn.click()
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD)
    await dashboardPage.header.item('accountButton').waitForDisplayed()
  })

  // it('should navigate to user boards page after login', async () => {
  //   const currentUrl = await browser.getUrl()
  //   expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  // })

  // it('should update the username in the user userProfile', async () => {
  //   await dashboardPage.openProfileAndVisibilitySettings()
  //   await profilePage.updateUsername(TEST_DATA.newUsername)
  //   const updatedUsername = await profilePage.getUsername()
  //   expect(updatedUsername).toEqual('@jstestswdio2_updated')
  //   await profilePage.revertUsername(TEST_DATA.originalUsername)
  // })

  it('should create a new board with the specified background and title',
      async () => {
        await dashboardPage.open()
        await dashboardPage.createBoard()
        // const displayedBoardTitle = await newBoardPage.
        //     boardHeader.item('displayedBoardTitle').getText()
        // expect(displayedBoardTitle).toEqual(TEST_DATA.boardTitle)
        // await dashboardPage.verifyBoardBackgroundCorrect()
        // await newBoardPage.deleteBoard()
        // await dashboardPage.open()
      })

  // it('should search for a board with a specified title', async () => {
  //   await dashboardPage.open()
  // await dashboardPage.header.item('searchFieldDiv').click()
  // await dashboardPage.header.item('searchField')
  //     .setValue(TEST_DATA.boardTitle)
  // await browser.keys('Enter')
  // await dashboardPage.workspaces.item('searchResult').waitForDisplayed()
  // const foundBoardTitle =
  //     await dashboardPage.workspaces.item('searchResult').getText()
  // expect(foundBoardTitle).toEqual(TEST_DATA.boardTitle)
  // })
  //
  it('should create a new list on a board', async () => {
    if (await newBoardPage.board.item('addAlistBtn').isDisplayed()) {
      await newBoardPage.board.item('addAlistBtn').click()
      await newBoardPage.addList()
    } else {
      await newBoardPage.listTitlePopUp.item('listTitleInputField').click()
      await newBoardPage.listTitlePopUp.item('addListBtn').click()
    }
    // await newBoardPage.listWrapper.item('displayedListTitle').waitForDisplayed()
    const displayedListTitle =
        await newBoardPage.listWrapper.item('displayedListTitle').getText()
    expect(displayedListTitle).toEqual(TEST_DATA.listTitle)
  })

  // it('should create a new card in a list', async () => {
  //   await newBoardPage.listWrapper.item('addCardBtn').click()
  //   await newBoardPage.cardCompopser.item('cardTitleInputField').
  //       setValue(TEST_DATA.cardTitle)
  //   await newBoardPage.cardCompopser.item('addCardBtn').click()
  //   // await newBoardPage.cardCompopser.item('displayedCard').getText()
  //   const displayedCardTitle = await newBoardPage.cardCompopser.item('displayedCardTitle').getText()
  //   expect(displayedCardTitle).toBe(TEST_DATA.cardTitle)
  // Then a new card should be created and displayed in the list
  // })
})
