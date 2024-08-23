import BaseComponent from '../common/base.component.js';

export default class SearchDialogWrapper extends BaseComponent {
  constructor() {
    super('div[data-test-id="search-dialog-dialog-wrapper"]');
  }

  getSearchResultByText(text) {
    return this.rootEl.$(`//div[@data-testid="trello-hover-preview-popper-container"]//span[text()="${text}"]`);
  }

  async waitForSearchResult(text, timeout) {
    const element = this.getSearchResultByText(text);
    await element.waitForDisplayed({timeout});
  }

  async isSearchResultDisplayed(text) {
    const element = this.getSearchResultByText(text);
    return await element.isDisplayed();
  }
}
