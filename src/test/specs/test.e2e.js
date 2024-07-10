import TrelloHomePage from '../pageobjects/pages/TrelloHome.page.js'

const trelloHomepage = new TrelloHomePage()

describe('My Login application', () => {
  it('should open Trello hompage', async () => {
    await trelloHomepage.open()
  })
})

