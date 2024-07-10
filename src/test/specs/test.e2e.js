import TrelloHomePage from '../pageobjects/pages/TrelloHome.page.js'

const trelloHomepage = new TrelloHomePage()

describe('My Login application', () => {
  it('should open Trello homepage', async () => {
    await trelloHomepage.open()
    await trelloHomepage.cookieBanner.tryClose()
    await trelloHomepage.header.item('loginButton').waitForDisplayed()
    await trelloHomepage.header.item('loginButton').scrollIntoView()
    await trelloHomepage.header.item('loginButton').click()
  })
})

