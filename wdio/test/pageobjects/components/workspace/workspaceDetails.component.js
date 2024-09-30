import {TEST_DATA} from '../../../data/test.data.js';
import BaseComponent from '../common/base.component.js';

const selectors = {
  editWorkspaceBtn: 'span[data-testid="EditIcon"]',
  workspaceNameInputField: 'input[data-testid="workspace-display-name"]',
  descriptionInputField: 'textarea[name="desc"]',
  saveButton: 'button[type="submit"]',
  workspaceDescription: `.//p[contains(text(), "${TEST_DATA.testWorkspaceDescription}")]`,
};

export default class WorkspaceDetails extends BaseComponent {
  constructor() {
    super('div#content', selectors);
  }
}
