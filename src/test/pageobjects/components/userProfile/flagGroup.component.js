import {$} from '@wdio/globals';

const selectors = {
  savedCheckbox: 'span[data-testid="CheckCircleIcon"]',
};

export default class FlagGroup {
  get rootEl() {
    return $('div#FlagGroup');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
