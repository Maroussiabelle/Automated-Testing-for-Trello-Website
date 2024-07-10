import TrelloHomePage from '../pageobjects/pages/TrelloHome.page.js'

const trelloHomepage = new TrelloHomePage()

describe('My Login application', () => {
  it('should open Trello homepage and click login button', async () => {
    await trelloHomepage.open()
    await trelloHomepage.header.item('loginButton').click()
  })
})

