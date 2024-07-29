import {$} from '@wdio/globals';
import {TEST_DATA} from '../../../data/test.data.js';

const selectors = {
  displayedUsername: `span*=${TEST_DATA.newUsername}`,

};

export default class ProfileContent {
  get rootEl() {
    return $('div#content');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
