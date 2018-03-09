import { Component } from '@angular/core';

import { FindPage } from '../find/find';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FindPage;
  tab2Root = MessagesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
