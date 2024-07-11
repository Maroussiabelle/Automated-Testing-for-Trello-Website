import Header from '../components/header.component.js'
import AccountMenu from '../components/accountMenu.component.js'
import {browser} from '@wdio/globals'
import ProfileDataContainerComponent
  from '../components/profileDataContainer.component.js'
import HeaderMemberDetail from '../components/headerMemberDetail.component.js'
import FlagGroup from '../components/flagGroup.component.js'

export default class ProfilePage {
  constructor() {
    this.header = new Header()
    this.accountMenu = new AccountMenu()
    this.profileDataContainer = new ProfileDataContainerComponent()
    this.headerMemberDetail = new HeaderMemberDetail()
    this.flagGroup = new FlagGroup()
  }
  async open() {
    await browser.url('https://trello.com/u/jstestswdio2')
  }
}
