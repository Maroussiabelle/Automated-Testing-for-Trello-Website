import {$} from '@wdio/globals'

const selectors = {
  // loginButton: '.caTbTe > .jnMZCI > a',
  loginButton: 'a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]',
  getTrelloForFreeButton: '.kTwZBr.lhSFdZ',
}

export default class Header {
  get rootEl() {
    return $('.BigNavstyles__NavBar-sc-1mttgq7-3.caTbTe')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
