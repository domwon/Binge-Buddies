import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MyShowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-shows',
  templateUrl: 'my-shows.html',
})
export class MyShowsPage {
  gotVisible: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    if (localStorage.getItem('gotAdded') == 'true') {
      this.gotVisible = false;
    }
  }

  addShow() {
    this.gotVisible = false;
    this.toastCreate('Game of Thrones added to Watchlist!');
    localStorage.setItem('gotAdded', 'true');
    
  }

  showError() {
    this.toastCreate('ERROR: Only Game of Thrones can be added.');
  }

  toastCreate(toastmessage) {
    this.toastCtrl.create({
      message: toastmessage,
      duration: 2000,
      position: 'bottom'
    }).present();
  }

  ionViewWillEnter() {
    if(localStorage.getItem('gotAdded') == 'true') {
      console.log('Bazinga');
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyShowsPage');
  }
}