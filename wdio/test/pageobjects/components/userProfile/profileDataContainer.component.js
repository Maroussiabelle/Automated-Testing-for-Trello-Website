import BaseComponent from '../common/base.component.js';

const selectors = {
  usernameInputField: 'input#username',
  saveButton: 'button[type="submit"]',
};

export default class ProfileDataContainerComponent extends BaseComponent {
  constructor() {
    super('[data-testid="profile-tab-container"]', selectors);
  }
}
