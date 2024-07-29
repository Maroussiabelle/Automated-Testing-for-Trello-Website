import {$} from '@wdio/globals';
import {TEST_DATA} from '../../../data/test.data.js';

const selectors = {
  editedWorkspaceTitle: `.//a[@data-testid="workspace-detail-name"]/p[contains(text(), "${TEST_DATA.editedWorkspaceName}")]`,
};

export default class WorkspaceSideMenu {
  get rootEl() {
    return $('//div[@data-testid="current-workspace-expanded"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
