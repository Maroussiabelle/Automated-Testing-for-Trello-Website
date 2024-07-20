
import {$} from '@wdio/globals'


const selectors = {
  archiveThisListBtn: './/button[@class="gJDsPins_eYkBM" and @data-testid="list-actions-archive-list-button"]',
  archiveAllCardsInThisListBtn: '//span[@class="BmRHtH7FIX0jcL" and contains(text(), "Archive all cards in this list")]',
}

export default class ListActionsMenu {
  get rootEl() {
    return $('section.rX4pAv5sWHFNjp.js-react-root')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
