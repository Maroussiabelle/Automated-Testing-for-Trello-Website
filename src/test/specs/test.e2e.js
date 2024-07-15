import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import {browser} from '@wdio/globals'
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

  it('should navigate to user boards page after login', async () => {
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  })

  // it('should update the username in the user profile', async () => {
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
        const displayedBoardTitle = await newBoardPage.
            boardHeader.item('displayedBoardTitle').getText()
        expect(displayedBoardTitle).toEqual(TEST_DATA.boardTitle)
        await dashboardPage.verifyBoardBackgroundCorrect()
        await newBoardPage.closeBoard()
        // await dashboardPage.open()
      })

  // it('should search for a board with a specified title',
  //     async () => {
  //       await dashboardPage.open()
  //       await dashboardPage.workspaces.
  //           item('searchBoardsBar').setValue(TEST_DATA.boardTitle)
  //       await browser.keys('Enter')
  //     })
})

//
