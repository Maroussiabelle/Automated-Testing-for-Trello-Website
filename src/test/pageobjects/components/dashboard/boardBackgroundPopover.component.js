import {$} from '@wdio/globals';

const selectors = {
  seeMoreBackgroundPhotosBtn:
      '//h1[text()="Photos"]/following-sibling::button[text()="See more"]',
  selectMickHauptMountainBackgroundBtn:
      '//a[contains(text(),' +
      ' "Mick Haupt")]//ancestor::div[@class="jobpuSsxR75JMo"]',
  backBtn: 'button.Uz5Itgv85sjPQ_',
  closePopoverBtn:
      'h2[title="Board background"] + button[data-testid="popover-close"]',
};

export default class BoardBackgroundPopover {
  get rootEl() {
    return $('section.rX4pAv5sWHFNjp.js-react-root[data-elevation="2"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
