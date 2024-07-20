
import {$} from '@wdio/globals'


const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  displayedCard: '//a[@class="NdQKKfeqJDDdX3" and contains(text(), "Test card")]',
  addCardBtn: 'button.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc',
}

export default class CardComposer {
  get rootEl() {
    return $('//li[@class="bi0h3HALKXjfDq"]//h2[contains(text(), "List for cards") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
