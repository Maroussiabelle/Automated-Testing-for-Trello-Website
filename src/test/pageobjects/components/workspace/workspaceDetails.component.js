import {$} from '@wdio/globals';

const selectors = {
  editWorkspaceBtn: 'span[data-testid="EditIcon"]',
  workspaceNameInputField: 'input[data-testid="workspace-display-name"]',
  descriptionInputField: 'textarea[name="desc"]',
  saveButton: 'button[type="submit"]',
  description: 'textarea#desc',
};

export default class WorkspaceDetails {
  get rootEl() {
    return $('div.js-current-details');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
