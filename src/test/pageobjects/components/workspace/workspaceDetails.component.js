import {$} from '@wdio/globals';
import {TEST_DATA} from '../../../data/test.data.js';

const selectors = {
  editWorkspaceBtn: 'span[data-testid="EditIcon"]',
  workspaceNameInputField: 'input[data-testid="workspace-display-name"]',
  descriptionInputField: 'textarea[name="desc"]',
  saveButton: 'button[type="submit"]',
  workspaceDescription: `.//p[contains(text(), "${TEST_DATA.testWorkspaceDescription}")]`,
};

export default class WorkspaceDetails {
  get rootEl() {
    return $('//div[@class="js-current-details"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
