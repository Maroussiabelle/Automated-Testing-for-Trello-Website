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
    try {
      await this.cookieBanner.click()
      await this.rejectAllBtn.click()
    } catch (ignored) {
    }
  }
}
