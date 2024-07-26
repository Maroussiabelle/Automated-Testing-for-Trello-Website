import {$} from '@wdio/globals';
import {TEST_DATA} from '../../../data/test.data.js';

const selectors = {
  searchResult: `//div[@data-testid="trello-hover-preview-popper-container"]//span[text()="${TEST_DATA.boardTitle}"]`,

};

export default class SearchDialogWrapper {
  get rootEl() {
    return $('div[data-test-id="search-dialog-dialog-wrapper"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
