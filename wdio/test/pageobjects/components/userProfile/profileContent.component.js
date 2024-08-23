import BaseComponent from '../common/base.component.js';

export default class ProfileContent extends BaseComponent {
  constructor(userName) {
    super('div#content');
    this.userName = userName;
  }

  displayedUserName(userName) {
    return this.rootEl.$(`span*=${userName}`);
  }
}
