import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import {browser} from '@wdio/globals'
import DashboardPage from '../pageobjects/pages/dashboard.page.js'
import ProfilePage from '../pageobjects/pages/profile.page.js'
import {TEST_DATA} from '../data/test.data.js'


const trelloHomepage = new TrelloHomePage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const profilePage = new ProfilePage()


describe('Trello site functionality', () => {
  before('should open homepage and login', async () => {
    await trelloHomepage.open()
    await trelloHomepage.loginBtn.click()
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD)
    await dashboardPage.header.item('accountButton').waitForDisplayed()
  })

  it('should open Trello homepage and login as a registered user', async () => {
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  })


  it('should edit user profile information by updating username', async () => {
    await dashboardPage.openProfileAndVisibilitySettings()
    await profilePage.updateUsername(TEST_DATA.newUsername)
    const updatedUsername = await profilePage.getUsername()
    expect(updatedUsername).toEqual('@jstestswdio2_updated')
    await profilePage.revertUsername(TEST_DATA.originalUsername)
  })
})

