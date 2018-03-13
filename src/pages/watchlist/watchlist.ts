import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MyShowsPage } from '../my-shows/my-shows';

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchlistPage {

  gotVisible: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    if (localStorage.getItem('gotAdded') == "true") {
      this.gotVisible = true;
    }
  }

  deleteShow() {
    this.gotVisible = false;
    this.toastCreate();
    localStorage.setItem('gotAdded', 'false');
  }

  toastCreate() {
    this.toastCtrl.create({
      message: 'Game of Thrones removed from Watchlist!',
      duration: 2000,
      position: 'bottom'
    }).present();
  }

  openMyShows() {
    this.navCtrl.push(MyShowsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  ionViewDidEnter() {
    if (localStorage.getItem('gotAdded') == 'true') {
      this.gotVisible = true;
    }
  }

  ionViewWillLeave() {
    if(this.gotVisible == true) {
      localStorage.setItem('watchlistCompleted', 'true');
    } else {
      localStorage.setItem('watchlistCompleted', 'false');
    }
  }
}
