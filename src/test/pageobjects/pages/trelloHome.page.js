import {$, browser} from '@wdio/globals';

// getTrelloForFreeButton: '.kTwZBr.lhSFdZ',

export default class TrelloHomePage {
  async open() {
    await browser.url('https://trello.com/');
  }

  get loginBtn() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }
}
