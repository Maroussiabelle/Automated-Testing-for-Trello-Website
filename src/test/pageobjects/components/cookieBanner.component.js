import {$} from '@wdio/globals'

export default class CookieBanner {
  get cookieBanner() {
    return $('#onetrust-banner-sdk')
  }

  get rejectAllBtn() {
    return $('#onetrust-reject-all-handler')
  }

  get acceptAllBtn() {
    return $('#onetrust-accept-btn-handler')
  }

  async tryClose() {
    /* eslint-disable no-unused-vars, no-empty */
    try {
      await this.cookieBanner.click()
      await this.rejectAllBtn.click()
    } catch (ignored) {
    }
    /* eslint-enable no-unused-vars, no-empty */
  }
}
