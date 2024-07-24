import {$} from '@wdio/globals';

const selectors = {
  editWorkspaceBtn: 'span[data-testid="EditIcon"]',
  workspaceTitle: 'h2.SiP6d2d_8FAAkC',
  workspaceDescription: 'div.W44URgoh0fSdK1.MneRKcZGdfz2QD',
};

export default class WorkspaceHeaderComponent {
  get rootEl() {
    return $('div.KmsqIheILmD3vF');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
