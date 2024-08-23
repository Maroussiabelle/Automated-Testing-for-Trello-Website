import DashboardPage from './dashboard.page.js';
import LoginPage from './login.page.js';
import BoardPage from './board.page.js';
import ProfilePage from './profile.page.js';
import TrelloHomePage from './trelloHome.page.js';
import WorkspaceSettingsPage from './workspaceSettings.page.js';
import {TEST_DATA} from '../../data/test.data.js';

const pages = {
  dashboard: new DashboardPage(),
  login: new LoginPage(),
  newBoard: new BoardPage(),
  preConfiguredBoard: new BoardPage(TEST_DATA.preConfiguredBoardUrl),
  profile: new ProfilePage(),
  trelloHomepage: new TrelloHomePage(),
  workspaceSettings: new WorkspaceSettingsPage(),
};

export default function getPage(name) {
  return pages[name];
}
