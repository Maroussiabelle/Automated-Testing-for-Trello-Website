import {$} from '@wdio/globals';

export default class BaseComponent {
  constructor(rootSelector, selectors = {}) {
    this.rootSelector = rootSelector;
    this.selectors = selectors;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  getElement(param) {
    const selector = this.selectors[param];
    if (!selector) {
      throw new Error(`Selector ${param} not found`);
    }
    return this.rootEl.$(selector);
  }
}
