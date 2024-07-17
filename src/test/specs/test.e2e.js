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

  it('should create a new board with the specified background and title',
      async () => {
        await dashboardPage.open()
        await dashboardPage.createBoard()
        const displayedBoardTitle = await newBoardPage.
            boardHeader.item('displayedBoardTitle').getText()
        expect(displayedBoardTitle).toEqual(TEST_DATA.boardTitle)
        await dashboardPage.verifyBoardBackgroundCorrect()
        // await newBoardPage.deleteBoard()
        // await dashboardPage.open()
      })

  // it('should search for a board with a specified title', async () => {
  //   await dashboardPage.open()
  //   await dashboardPage.header.item('searchFieldDiv').click()
  //   await dashboardPage.header.item('searchField')
  //       .setValue(TEST_DATA.boardTitle)
  //   await browser.keys('Enter')
  //   await browser.debug()
  // })
  //
  it('should create a new list on a board', async () => {
    // await newBoardPage.board.item('addAlistBtn').waitForDisplayed()
    //  await newBoardPage.board.item('addAlistBtn').click()
    await newBoardPage.listTitlePopUp.item('listTitleInputField').
        setValue(TEST_DATA.listTitle)
    await newBoardPage.listTitlePopUp.item('addListBtn').click()
    await newBoardPage.listWrapper.item('displayedListTitle').waitForDisplayed()
    const displayedListTitle = await newBoardPage.listWrapper
        .item('displayedListTitle').getText()
    expect(displayedListTitle).toEqual(TEST_DATA.listTitle)
  })
})
