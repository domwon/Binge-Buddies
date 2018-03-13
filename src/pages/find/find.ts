import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchedProfilePage } from '../matched-profile/matched-profile';

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {

  profileCompleted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.getItem('profileCompleted') == 'false') {
      this.profileCompleted = false;
    } else {
      this.profileCompleted = true;
    }

  }

  completeProfile() {
    console.log(this.profileCompleted);
    this.profileCompleted = true;
    localStorage.setItem('profileCompleted', 'true');
  }

  openRobert() {
    this.navCtrl.push(MatchedProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }

  ionViewWillEnter() {
    if (localStorage.getItem('profileCompleted') == 'true') {
      this.profileCompleted = true;
    } else {
      this.profileCompleted = false;
    }
  }
  
}
