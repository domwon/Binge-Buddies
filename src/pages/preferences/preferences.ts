import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  
  distance: number = 50;
  episode: any = {
    upper: 2,
    lower: -2,
    upperPlus: '',
    lowerPlus: ''
  };
  duration: any = {
    upper: 2,
    lower: 0,
    upperPlus: ''
  };
  preferencesCompleted: boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkEpisodeValue () {
    // Limit lower range of upper knob to 0
    if (this.episode.upper < 0) {
      this.episode.upper = 0;

    }

    // Limit upper range of lower knob to 0
    if (this.episode.lower > 0) {
      this.episode.lower = 0;

    }

    // Add + symbol when upper or lower limit is hit
    if (this.episode.upper == 3) {
      this.episode.upperPlus = "+";
    }
    
    if (this.episode.lower == -3) {
      this.episode.lowerPlus = "+";
    }
  }

  checkDurationValue () {
    if (this.duration.upper == 5) {
      this.duration.upperPlus = "+";
    }
  }

  savePreferences () {
    this.preferencesCompleted = true;
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }


}
