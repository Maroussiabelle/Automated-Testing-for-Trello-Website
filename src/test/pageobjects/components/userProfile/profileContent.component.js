import {$} from '@wdio/globals';

export default class ProfileContent {
  constructor(userName) {
    this.userName = userName;
  }

  get rootEl() {
    return $('div#content');
  }

  displayedUserName(userName) {
    return this.rootEl.$(`span*=${userName}`);
  }
}
