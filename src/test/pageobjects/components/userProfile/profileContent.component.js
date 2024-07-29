import {$} from '@wdio/globals';

const selectors = {

};

export default class ProfileContent {
  get rootEl() {
    return $('div#content');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
