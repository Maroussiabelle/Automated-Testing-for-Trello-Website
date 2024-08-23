import {TEST_DATA} from '../../../data/test.data.js';
import BaseComponent from '../common/base.component.js';

const selectors = {
  editedWorkspaceTitle: `.//a[@data-testid="workspace-detail-name"]/p[contains(text(), "${TEST_DATA.editedWorkspaceName}")]`,
};

export default class WorkspaceSideMenu extends BaseComponent {
  constructor() {
    super('//div[@data-testid="current-workspace-expanded"]', selectors);
  }
}
