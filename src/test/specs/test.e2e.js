import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import {browser} from '@wdio/globals'
import DashboardPage from '../pageobjects/pages/dashboard.page.js'
import ProfilePage from '../pageobjects/pages/profile.page.js'


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
    await dashboardPage.header.item('accountButton').click()
    await dashboardPage.accountMenu.item('profileAndVisibilityButton').click()
    await profilePage.profileDataContainer.item('usernameInputField')
        .setValue('jstestswdio2_updated')
    await profilePage.profileDataContainer.item('saveButton').click()
    await profilePage.flagGroup.item('savedCheckbox').waitForDisplayed()
    const newUsername = await profilePage.headerMemberDetail.item('username')
        .getText()

    expect(newUsername).toEqual('@jstestswdio2_updated')
    await profilePage.cleanUp()
  })
})

