import BaseComponent from '../common/base.component.js';

const selectors = {
  savedCheckbox: 'span[data-testid="CheckCircleIcon"]',
};

export default class FlagGroup extends BaseComponent {
  constructor() {
    super('div#FlagGroup', selectors);
  }
}
