import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { PreferencesPage } from '../preferences/preferences';
import { WatchlistPage } from '../watchlist/watchlist';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  preferencesCompleted: boolean = false;
  watchlistCompleted: boolean = false;

  preferences: {
    meFood: any,
    buddyFood: any,
    meDrink: any,
    buddyDrink: any,
    distance: any,
    meTalking: any,
    buddyTalking: any,
    mePhone: any,
    buddyPhone: any,
    episode: any,
    duration: any,
    availability: any,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    if (localStorage.getItem('gotAdded') == 'true') {
      this.watchlistCompleted = true;
    }
  }

  editWatchlist () {
    this.navCtrl.push(WatchlistPage, {
      callback: this.myCallbackFunction,
      preferences: this.preferences
    });
  }

  editPreferences () {
    this.navCtrl.push(PreferencesPage, {
      callback: this.myCallbackFunction,
      preferences: this.preferences
    });
  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      console.log('In callback:', _params);
      this.preferences = _params;
      resolve();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter() {
    if (localStorage.getItem('preferencesCompleted') == 'true') {
      this.preferencesCompleted = true;
    } else {
      this.preferencesCompleted = false;
    }
    if (localStorage.getItem('watchlistCompleted') == 'true') {
      this.watchlistCompleted = true;
    } else {
      this.watchlistCompleted = false;
    }

    if (localStorage.getItem('watchlistCompleted') == 'true' && localStorage.getItem('preferencesCompleted') == 'true') {
      localStorage.setItem('profileCompleted', 'true');
    } else {
      localStorage.setItem('profileCompleted', 'false');
    }

    console.log('Preferences Completed: ' + localStorage.getItem('preferencesCompleted'));
    console.log('Watchlist Completed: ' + localStorage.getItem('watchlistCompleted'));
    console.log('Profile Completed: ' + localStorage.getItem('profileCompleted'));
  }

  ionViewWillLeave() {
   
  }
}