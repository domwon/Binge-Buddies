import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FindPage } from '../pages/find/find';
import { MessagesPage } from '../pages/messages/messages';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PreferencesPage } from '../pages/preferences/preferences';
import { MatchedProfilePage } from '../pages/matched-profile/matched-profile';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { MyShowsPage } from '../pages/my-shows/my-shows';


@NgModule({
  declarations: [
    MyApp,
    FindPage,
    MessagesPage,
    MatchedProfilePage,
    WatchlistPage,
    MyShowsPage,
    ProfilePage,
    PreferencesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // Tabs config
      tabsHideOnSubPages: true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindPage,
    MessagesPage,
    PreferencesPage,
    WatchlistPage,
    MyShowsPage,
    MatchedProfilePage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
