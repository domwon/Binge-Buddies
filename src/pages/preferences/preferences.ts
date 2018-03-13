import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  
  meFoodMeals: false;
  meFoodSnacks: false;
  meFoodNone: false;
  buddyFoodMeals: false;
  buddyFoodSnacks: false;
  buddyFoodNone: false;
  meDrinksAlc: false;
  meDrinksReg: false;
  meDrinksNone: false;
  buddyDrinksAlc: false;
  buddyDrinksReg: false;
  buddyDrinksNone: false;
  distance: number = 50;
  meTalkingYes: false;
  meTalkingNo: false;
  buddyTalkingYes: false;
  buddyTalkingNo: false;
  mePhoneYes: false;
  mePhoneNo: false;
  buddyPhoneYes: false;
  buddyPhoneNo: false;
  meCanBring: false;
  buddyCanBring: false;
  episode: any = {
    upper: 2,
    lower: -2,
    upperPlus: ' ',
    lowerPlus: ' '
  };
  duration: any = {
    upper: 2,
    lower: 0,
    upperPlus: ' '
  };
  avaMorning: false;
  avaAfternoon: false;
  avaEvening: false;
  avaNight: false;
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
  preferencesCompleted: boolean = false;
  callback: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    if (localStorage.getItem('preferencesCompleted') == 'true') {
      this.preferences = this.navParams.get('preferences');
      this.meFoodMeals = this.preferences.meFood[0];
      this.meFoodSnacks = this.preferences.meFood[1];
      this.meFoodNone = this.preferences.meFood[2];
      this.buddyFoodMeals = this.preferences.buddyFood[0];
      this.buddyFoodSnacks = this.preferences.buddyFood[1];
      this.buddyFoodNone = this.preferences.buddyFood[2];
      this.meDrinksAlc = this.preferences.meDrink[0];
      this.meDrinksReg = this.preferences.meDrink[1];
      this.meDrinksNone = this.preferences.meDrink[2];
      this.buddyDrinksAlc = this.preferences.buddyDrink[0];
      this.buddyDrinksReg = this.preferences.buddyDrink[1];
      this.buddyDrinksNone = this.preferences.buddyDrink[2];
      this.distance = this.preferences.distance[0];
      this.meTalkingYes = this.preferences.meTalking[0];
      this.meTalkingNo = this.preferences.meTalking[1];
      this.buddyTalkingYes = this.preferences.buddyTalking[0];
      this.buddyTalkingNo = this.preferences.buddyTalking[1];
      this.mePhoneYes = this.preferences.mePhone[0];
      this.mePhoneNo = this.preferences.mePhone[1];
      this.buddyPhoneYes = this.preferences.buddyPhone[0];
      this.buddyPhoneNo = this.preferences.buddyPhone[1];
      this.episode = {
        upper: this.preferences.episode[0],
        lower: this.preferences.episode[1],
        upperPlus: this.preferences.episode[2],
        lowerPlus: this.preferences.episode[3]
      };
      this.duration = {
        upper: this.preferences.duration[0],
        lower: this.preferences.duration[1],
        upperPlus: this.preferences.duration[2]
      };
      this.avaMorning = this.preferences.availability[0];
      this.avaAfternoon = this.preferences.availability[1];
      this.avaEvening = this.preferences.availability[2];
      this.avaNight = this.preferences.availability[3];
    }
    this.preferences = {
      meFood: [this.meFoodMeals, this.meFoodSnacks, this.meFoodNone],
      buddyFood: [this.buddyFoodMeals, this.buddyFoodSnacks, this.buddyFoodNone],
      meDrink: [this.meDrinksAlc, this.meDrinksReg, this.meDrinksNone],
      buddyDrink: [this.buddyDrinksAlc, this.buddyDrinksReg, this.buddyDrinksNone],
      distance: [this.distance],
      meTalking: [this.meTalkingYes, this.meTalkingNo],
      buddyTalking: [this.buddyTalkingYes, this.buddyTalkingNo],
      mePhone: [this.mePhoneYes, this.mePhoneNo],
      buddyPhone: [this.buddyPhoneYes, this.buddyPhoneNo],
      episode: [this.episode.upper, this.episode.lower, this.episode.upperPlus, this.episode.lowerPlus],
      duration: [this.duration.upper, this.duration.lower, this.duration.lowerPlus],
      availability: [this.avaMorning, this.avaAfternoon, this.avaEvening, this.avaNight]
    };
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

  isEmptyObj(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  toastCreate(toastMsg) {
    this.toastCtrl.create({
      message: toastMsg,
      duration: 2000,
      position: 'bottom'
    }).present();
  }

  savePreferences () {

    this.preferences = {
      meFood: [this.meFoodMeals, this.meFoodSnacks, this.meFoodNone],
      buddyFood: [this.buddyFoodMeals, this.buddyFoodSnacks, this.buddyFoodNone],
      meDrink: [this.meDrinksAlc, this.meDrinksReg, this.meDrinksNone],
      buddyDrink: [this.buddyDrinksAlc, this.buddyDrinksReg, this.buddyDrinksNone],
      distance: [this.distance],
      meTalking: [this.meTalkingYes, this.meTalkingNo],
      buddyTalking: [this.buddyTalkingYes, this.buddyTalkingNo],
      mePhone: [this.mePhoneYes, this.mePhoneNo],
      buddyPhone: [this.buddyPhoneYes, this.buddyPhoneNo],
      episode: [this.episode.upper, this.episode.lower, this.episode.upperPlus, this.episode.lowerPlus],
      duration: [this.duration.upper, this.duration.lower, this.duration.lowerPlus],
      availability: [this.avaMorning, this.avaAfternoon, this.avaEvening, this.avaNight]
    };
    if (this.filledOut()) {
      
      this.callback = this.navParams.get("callback");
      this.callback(this.preferences).then(() => {
        this.navCtrl.pop();
      });
      localStorage.setItem('preferencesCompleted', 'true');
      this.toastCreate('Preferences saved!');
    } else {
      localStorage.setItem('preferencesCompleted', 'false');
      this.toastCreate('Please fill out all preferences!');
    }
    
  }

  filledOut() { // Loop through preferences return true if they are all defined
    console.log(this.preferences);
    for(var prop in this.preferences) {
      console.log(prop + this.preferences[prop].filter(v => v).length);
      if (this.preferences[prop].filter(v => v).length < 1) {
        return false;
      }
      
    }
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }

  ionViewWillEnter() {
    
  }
}
