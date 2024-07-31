import {$} from '@wdio/globals';

const selectors = {
  usernameInputField: 'input#username',
  saveButton: 'button[type="submit"]',
};

export default class ProfileDataContainerComponent {
  get rootEl() {
    return $('[data-testid="profile-tab-container"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
