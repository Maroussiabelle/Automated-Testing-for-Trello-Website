import {$} from '@wdio/globals';
import BasePage from './base.page.js';

export default class TrelloHomePage extends BasePage {
  constructor() {
    super('/');
  }

  get loginBtn() {
    return $('a[data-uuid$="login"]');
  }
}
