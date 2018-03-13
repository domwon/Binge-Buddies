import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatchedProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matched-profile',
  templateUrl: 'matched-profile.html',
})
export class MatchedProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  addRobert() {
    this.toastCtrl.create({
      message: 'A buddy request was sent to Robert!',
      duration: 3000,
      position: 'bottom'
    }).present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchedProfilePage');
  }

}
