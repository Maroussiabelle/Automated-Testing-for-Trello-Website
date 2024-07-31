import {$} from '@wdio/globals';

export default class SearchDialogWrapper {
  get rootEl() {
    return $('div[data-test-id="search-dialog-dialog-wrapper"]');
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
