import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import DashboardPage from '../pageobjects/pages/dashboard.page.js'
import ProfilePage from '../pageobjects/pages/profile.page.js'
import {TEST_DATA} from '../data/test.data.js'
import NewBoardPage from '../pageobjects/pages/newBoard.page.js'
import {browser} from '@wdio/globals'
import LogOutPage from '../pageobjects/pages/logOut.page.js'


const trelloHomepage = new TrelloHomePage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const profilePage = new ProfilePage()
const newBoardPage = new NewBoardPage()
const logoutPage = new LogOutPage()


describe('Trello site functionality tests', () => {
  before('open Trello homepage and login as registered user', async () => {
    await trelloHomepage.open()
    await trelloHomepage.loginBtn.click()
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD)
    // await browser.pause(3000)
    await dashboardPage.header.item('accountButton').waitForDisplayed()
  })

  // afterEach('delete created board and log out', async function() {
  //   if (this.currentTest.title.includes('@board')) {
  //     await newBoardPage.deleteBoard()
  //   }
  //   // await dashboardPage.header.item('accountButton').click()
  //   // await dashboardPage.accountMenu.item('logOutButton').click()
  //   // await logoutPage.logout.item('confirmLogOut').click()
  // })

  it('should navigate to user boards page after login', async () => {
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  })

  it('should update the username in the user userProfile', async () => {
    await dashboardPage.openProfileAndVisibilitySettings()
    await profilePage.updateUsername(TEST_DATA.newUsername)
    const updatedUsername = await profilePage.getUsername()
    expect(updatedUsername).toEqual('@jstestswdio2_updated')
    await profilePage.revertUsername(TEST_DATA.originalUsername)
  })

  it('should create a new @board with the specified background and title', async () => {
    await dashboardPage.open()
    await dashboardPage.createBoard()
    const displayedBoardTitle = await newBoardPage.
        boardHeader.item('displayedBoardTitle').getText()
    expect(displayedBoardTitle).toEqual(TEST_DATA.boardTitle)
    await dashboardPage.verifyBoardBackgroundCorrect()
    await dashboardPage.open()
  })

  it('should search for a @board with a specified title', async () => {
    await dashboardPage.open()
    await dashboardPage.header.item('searchFieldDiv').click()
    await dashboardPage.header.item('searchField').setValue(TEST_DATA.boardTitle)
    await browser.keys('Enter')
    await dashboardPage.workspaces.item('searchResult').waitForDisplayed()
    const foundBoardTitle =
      await dashboardPage.workspaces.item('searchResult').getText()
    expect(foundBoardTitle).toEqual(TEST_DATA.boardTitle)
  })


  it('should create a new list on a @board', async () => {
    await dashboardPage.open()
    await dashboardPage.createBoard()
    await newBoardPage.addList(TEST_DATA.listTitle)
    const isListDisplayed =
        await newBoardPage.listWrapper.displayedListTitle('New list')
            .waitForDisplayed()
    expect(isListDisplayed).toBe(true)
    // TO DO: add error message
  })

  it('should create a new card in a list on a previously created board', async () => {
    await browser.url('https://trello.com/b/cq9d5jJp/new-board')
    await newBoardPage.board.item('boardHeader').click()
    await newBoardPage.listWrapper.item('addNewCardBtn').click()
    await newBoardPage.cardCompopser.item('cardTitleInputField').click()
    await newBoardPage.cardCompopser.item('cardTitleInputField').setValue(TEST_DATA.cardTitle)
    await newBoardPage.cardCompopser.item('addCardBtn').click()
    await newBoardPage.cardCompopser.item('displayedCard').waitForExist()
    await newBoardPage.deleteBoard()
  })
})

