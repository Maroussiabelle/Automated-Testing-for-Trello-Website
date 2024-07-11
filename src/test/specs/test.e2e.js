import TrelloHomePage from '../pageobjects/pages/TrelloHome.page.js'
import LoginPage from '../pageobjects/pages/login.page.js'
import {browser} from '@wdio/globals'


const trelloHomepage = new TrelloHomePage()
const loginPage = new LoginPage()

describe('Trello site functionality', () => {
  it('should open Trello homepage and login as a registered user', async () => {
    await trelloHomepage.open()
    await trelloHomepage.header.item('loginButton').click()
    await loginPage.login(process.env.TRELLO_EMAIL, process.env.PASSWORD)
    await browser.pause(5000)
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toBe('https://trello.com/u/jstestswdio2/boards')
  })
})

