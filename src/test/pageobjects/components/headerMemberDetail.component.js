import {$} from '@wdio/globals'


const selectors = {
  username: 'span.M7DuYRS8ksp5f8',
}

export default class HeaderMemberDetail {
  get rootEl() {
    return $('div.tabbed-pane-header-member-detail-redesign')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
