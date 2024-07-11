import TrelloHomePage from '../pageobjects/pages/trelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import {browser} from '@wdio/globals'
import DashboardPage from '../pageobjects/pages/dashboard.page.js'


const trelloHomepage = new TrelloHomePage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Trello site functionality', () => {
  it('should open Trello homepage and login as a registered user', async () => {
    await trelloHomepage.open()
    await trelloHomepage.loginBtn.click()
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD)
    await dashboardPage.header.item('accountButton').waitForDisplayed()
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  })
})

