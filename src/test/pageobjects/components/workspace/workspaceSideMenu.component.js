import {$} from '@wdio/globals';

const selectors = {
  displayedWorkspaceTitle: 'a[data-testid="workspace-detail-name"] p',

};

export default class WorkspaceSideMenu {
  get rootEl() {
    return $('div[data-testid="current-workspace-expanded"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
