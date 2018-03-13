webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchedProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchedProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchedProfilePage = (function () {
    function MatchedProfilePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    MatchedProfilePage.prototype.addRobert = function () {
        this.toastCtrl.create({
            message: 'A buddy request was sent to Robert!',
            duration: 3000,
            position: 'bottom'
        }).present();
    };
    MatchedProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchedProfilePage');
    };
    MatchedProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matched-profile',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/matched-profile/matched-profile.html"*/'<!--\n  Generated template for the MatchedProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Robert</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="addRobert()">\n            <ion-icon large name="person-add"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n  \n<ion-content padding>\n  <ion-card>\n    <ion-avatar>\n      <img src="./assets/imgs/robert.jpg" class="circle-pic">\n    </ion-avatar>\n    <ion-item>\n        <h2 text-center>Robert Downey Jr</h2>\n        <p text-center class="good">97%</p>\n        <p text-center>\n          <ion-badge color="purple">\n            <ion-icon name="star"> 4.4</ion-icon>\n          </ion-badge>\n        </p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Watchlist</h2>\n    </ion-item>\n    <ion-item no-lines>\n      <p>Game of Thrones</p>\n      <ion-badge color="secondary">S1 E2</ion-badge>\n    </ion-item>\n    <ion-item no-lines>\n      <p>Breaking Bad</p>\n      <ion-badge>S3 E1</ion-badge>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Matched Preferences</h2>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-icon color="secondary" item-start name="car"></ion-icon>\n      <ion-icon color="secondary" item-start name="chatbubbles"></ion-icon>\n      <ion-icon color="secondary" item-start name="people"></ion-icon>\n      <ion-icon color="secondary" item-start name="fastforward"></ion-icon>\n      <ion-icon color="secondary" item-start name="cloudy-night"></ion-icon>\n    </ion-item>\n    \n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Potential Conflicts</h2>\n    </ion-item>\n    <ion-item no-lines>\n      <p>they don\'t like to eat meals</p>\n      <ion-icon color="primary" item-start name="restaurant"></ion-icon>\n    </ion-item>\n    <ion-item no-lines>\n      <p>they like to drink</p>\n      <ion-icon color="primary" item-start name="wine"></ion-icon>\n    </ion-item>\n    <ion-item no-lines>\n      <p>they tend to use their phone</p>\n      <ion-icon color="primary" item-start name="phone-portrait"></ion-icon>\n    </ion-item>\n    <ion-item no-lines>\n      <p>they watch 3 - 5 hrs</p>\n      <ion-icon color="primary" item-start name="timer"></ion-icon>\n    </ion-item>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/matched-profile/matched-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MatchedProfilePage);
    return MatchedProfilePage;
}());

//# sourceMappingURL=matched-profile.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="no-scroll">\n  <br>\n  <h2 text-center>You have no buddies :(</h2>\n  <p text-center>Please message someone from the Find page.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyShowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyShowsPage = (function () {
    function MyShowsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.gotVisible = true;
        if (localStorage.getItem('gotAdded') == 'true') {
            this.gotVisible = false;
        }
    }
    MyShowsPage.prototype.addShow = function () {
        this.gotVisible = false;
        this.toastCreate('Game of Thrones added to Watchlist!');
        localStorage.setItem('gotAdded', 'true');
    };
    MyShowsPage.prototype.showError = function () {
        this.toastCreate('ERROR: Only Game of Thrones can be added.');
    };
    MyShowsPage.prototype.toastCreate = function (toastmessage) {
        this.toastCtrl.create({
            message: toastmessage,
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    MyShowsPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('gotAdded') == 'true') {
            console.log('Bazinga');
        }
    };
    MyShowsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyShowsPage');
    };
    MyShowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-shows',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/my-shows/my-shows.html"*/'<!--\n  Generated template for the MyShowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>MyShows</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="gotVisible">\n    <ion-item>\n      <h2>Game of Thrones</h2>\n      <ion-badge color="purple">S1 E2</ion-badge>\n      <button item-end ion-button (click)="addShow()">Add</button>\n    </ion-item>\n  </ion-card>\n  <ion-card >\n    <ion-item>\n      <h2>Parks and Recreation</h2>\n      <ion-badge color="purple">S3 E1</ion-badge>\n      <button item-end ion-button (click)="showError()">Add</button>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Breaking Bad</h2>\n      <ion-badge color="purple">S4 E3</ion-badge>\n      <button item-end ion-button (click)="showError()">Add</button>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>The 100</h2>\n      <ion-badge color="purple">S1 E4</ion-badge>\n      <button item-end ion-button (click)="showError()">Add</button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/my-shows/my-shows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MyShowsPage);
    return MyShowsPage;
}());

//# sourceMappingURL=my-shows.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencesPage = (function () {
    function PreferencesPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.distance = 50;
        this.episode = {
            upper: 2,
            lower: -2,
            upperPlus: '',
            lowerPlus: ''
        };
        this.duration = {
            upper: 2,
            lower: 0,
            upperPlus: ''
        };
        this.preferencesCompleted = false;
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
    PreferencesPage.prototype.checkEpisodeValue = function () {
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
    };
    PreferencesPage.prototype.checkDurationValue = function () {
        if (this.duration.upper == 5) {
            this.duration.upperPlus = "+";
        }
    };
    PreferencesPage.prototype.isEmptyObj = function (obj) {
        return Object.getOwnPropertyNames(obj).length === 0;
    };
    PreferencesPage.prototype.toastCreate = function (toastMsg) {
        this.toastCtrl.create({
            message: toastMsg,
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    PreferencesPage.prototype.savePreferences = function () {
        var _this = this;
        if (this.filledOut()) {
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
            this.callback = this.navParams.get("callback");
            this.callback(this.preferences).then(function () {
                _this.navCtrl.pop();
            });
            localStorage.setItem('preferencesCompleted', 'true');
            this.toastCreate('Preferences saved!');
        }
        else {
            localStorage.setItem('preferencesCompleted', 'false');
            this.toastCreate('Please fill out all preferences!');
        }
    };
    PreferencesPage.prototype.filledOut = function () {
        for (var prop in this.preferences) {
            if (this.preferences[prop].filter(function (v) { return v; }).length < 0) {
                return false;
            }
        }
        return true;
    };
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage.prototype.ionViewWillEnter = function () {
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/preferences/preferences.html"*/'<!--\n  Generated template for the PreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Preferences</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card padding>\n    <h2 text-center>Please check all that apply.</h2>\n  </ion-card>\n  <ion-card>\n    <ion-item no-lines padding>\n        <h2>Food</h2>\n        <ion-icon item-start name="restaurant"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Meals</p>\n        </ion-col>\n        <ion-col>\n          <p>Snacks</p>\n        </ion-col>\n        <ion-col>\n          <p>None</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meFoodMeals"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meFoodSnacks"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meFoodNone"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyFoodMeals"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyFoodSnacks"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyFoodNone"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Drink</h2>\n      <ion-icon item-start name="wine"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Alcoholic</p>\n        </ion-col>\n        <ion-col>\n          <p>Regular</p>\n        </ion-col>\n        <ion-col>\n          <p>None</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meDrinksAlc"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meDrinksReg"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meDrinksNone"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyDrinksAlc"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyDrinksReg"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyDrinksNone"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Distance</h2>\n      <ion-icon item-start name="car"></ion-icon>\n      <ion-badge>{{distance}} mi</ion-badge>\n    </ion-item>\n    <ion-range min="0" max="100" [(ngModel)]="distance" color="primary">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>100</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Talking</h2>\n      <ion-icon item-start name="chatbubbles"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Yes</p>\n        </ion-col>\n        <ion-col>\n          <p>No</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meTalkingYes">Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meTalkingNo">No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyTalkingYes">Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyTalkingNo">No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Phones</h2>\n      <ion-icon item-start name="phone-portrait"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Yes</p>\n        </ion-col>\n        <ion-col>\n          <p>No</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="mePhoneYes">Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="mePhoneNo">No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyPhoneYes">Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyPhoneNo">No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Other People</h2>\n      <ion-icon item-start name="people"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n          <ion-col>\n            <p>I want to bring other people</p>\n          </ion-col>\n          <ion-col>\n            <p>Ok if buddy brings other people</p>\n          </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="meCanBring"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="buddyCanBring"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding text-wrap>\n      <h2>Episode Range</h2>\n      <ion-icon item-start name="fastforward"></ion-icon>\n      <p>How far forward and back are you willing to watch with a buddy?</p>\n      <ion-badge>{{-1*episode.lower}}{{episode.lowerPlus}} previous</ion-badge>\n      <ion-badge>{{episode.upper}}{{episode.upperPlus}} in advance</ion-badge>\n    </ion-item>\n    \n    <ion-range dualKnobs="true" [(ngModel)]="episode" min="-3" max="3" step="1" snaps="true" (ionChange)="checkEpisodeValue()">\n      <ion-label range-left>-3+</ion-label>\n      <ion-label range-right>3+</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding text-wrap>\n      <h2>Binge Duration</h2>\n      <ion-icon item-start name="timer"></ion-icon>\n      <ion-badge>{{duration.lower}} - {{duration.upper}}{{duration.upperPlus}} hrs</ion-badge>\n    </ion-item>\n    \n    <ion-range dualKnobs="true" [(ngModel)]="duration" min="0" max="5" step="1" snaps="true" (ionChange)="checkDurationValue()">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>5+</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Availability</h2>\n      <ion-icon item-start name="cloudy-night"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col col-8>\n          <p>Morning (6am - noon)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="avaMorning"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Afternoon (noon - 4pm)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="avaAfternoon"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Evening (4pm - 8pm)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="avaEvening"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Night (8pm - 6am)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="avaNight"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card>\n\n  <button ion-button full (click)="savePreferences()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/preferences/preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preferences_preferences__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watchlist_watchlist__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.preferencesCompleted = false;
        this.watchlistCompleted = false;
        this.myCallbackFunction = function (_params) {
            return new Promise(function (resolve, reject) {
                console.log('In callback:', _params);
                _this.preferences = _params;
                resolve();
            });
        };
        if (localStorage.getItem('gotAdded') == 'true') {
            this.watchlistCompleted = true;
        }
    }
    ProfilePage.prototype.editWatchlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__watchlist_watchlist__["a" /* WatchlistPage */], {
            callback: this.myCallbackFunction,
            preferences: this.preferences
        });
    };
    ProfilePage.prototype.editPreferences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__preferences_preferences__["a" /* PreferencesPage */], {
            callback: this.myCallbackFunction,
            preferences: this.preferences
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('preferencesCompleted') == 'true') {
            this.preferencesCompleted = true;
        }
        else {
            this.preferencesCompleted = false;
        }
        if (localStorage.getItem('watchlistCompleted') == 'true') {
            this.watchlistCompleted = true;
        }
        else {
            this.watchlistCompleted = false;
        }
        if (localStorage.getItem('watchlistCompleted') == 'true' && localStorage.getItem('preferencesCompleted') == 'true') {
            localStorage.setItem('profileCompleted', 'true');
        }
        else {
            localStorage.setItem('profileCompleted', 'false');
        }
        console.log('Preferences Completed: ' + localStorage.getItem('preferencesCompleted'));
        console.log('Watchlist Completed: ' + localStorage.getItem('watchlistCompleted'));
        console.log('Profile Completed: ' + localStorage.getItem('profileCompleted'));
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-avatar>\n      <img src="./assets/imgs/chris.jpeg" class="circle-pic">\n    </ion-avatar>\n    <ion-item>\n      <h2 text-center>Chris</h2>\n      <p text-center>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 4.4</ion-icon>\n        </ion-badge>\n      </p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Watchlist</h2>\n      <button ion-button icon-only item-end (click)="editWatchlist();">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item *ngIf="!watchlistCompleted; else completed_watchlist">\n      <p>Please add some shows.</p>\n    </ion-item>\n    <ng-template #completed_watchlist>\n      <ion-item no-lines>\n        <p>Game of Thrones</p>\n        <ion-badge color="purple">S1 E2</ion-badge>\n      </ion-item>\n    </ng-template>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Preferences</h2>\n      <button ion-button icon-only item-end (click)="editPreferences();">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item *ngIf="!preferencesCompleted; else completed_preferences">\n      <p>Please add your preferences.</p>\n    </ion-item>\n    <ng-template #completed_preferences>\n      <ion-item no-lines>\n        <p>meals, snacks</p>\n        <ion-icon item-start name="restaurant"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>none</p>\n        <ion-icon item-start name="wine"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>10 mi</p>\n        <ion-icon item-start name="car"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>no</p>\n        <ion-icon item-start name="chatbubbles"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>no</p>\n        <ion-icon item-start name="phone-portrait"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>i will bring, they can\'t bring</p>\n        <ion-icon item-start name="people"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>-1 to 2 episodes</p>\n        <ion-icon item-start name="fastforward"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>0 - 2 hrs</p>\n        <ion-icon item-start name="timer"></ion-icon>\n      </ion-item>\n      <ion-item no-lines>\n        <p>evening</p>\n        <ion-icon item-start name="cloudy-night"></ion-icon>\n      </ion-item>\n    </ng-template>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_shows_my_shows__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WatchlistPage = (function () {
    function WatchlistPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.gotVisible = false;
        if (localStorage.getItem('gotAdded') == "true") {
            this.gotVisible = true;
        }
    }
    WatchlistPage.prototype.deleteShow = function () {
        this.gotVisible = false;
        this.toastCreate();
        localStorage.setItem('gotAdded', 'false');
    };
    WatchlistPage.prototype.toastCreate = function () {
        this.toastCtrl.create({
            message: 'Game of Thrones removed from Watchlist!',
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    WatchlistPage.prototype.openMyShows = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_shows_my_shows__["a" /* MyShowsPage */]);
    };
    WatchlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WatchlistPage');
    };
    WatchlistPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('gotAdded') == 'true') {
            this.gotVisible = true;
        }
    };
    WatchlistPage.prototype.ionViewWillLeave = function () {
        if (this.gotVisible == true) {
            localStorage.setItem('watchlistCompleted', 'true');
        }
        else {
            localStorage.setItem('watchlistCompleted', 'false');
        }
    };
    WatchlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-watchlist',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/watchlist/watchlist.html"*/'<!--\n  Generated template for the WatchlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Watchlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="no-scroll">\n  <ion-card *ngIf="gotVisible; else no_shows">\n    <ion-item>\n      <h2>Game of Thrones</h2>\n      <ion-badge color="purple">S1 E2</ion-badge>\n      <button item-end ion-button (click)="deleteShow()">X</button>\n    </ion-item>\n  </ion-card>\n  <ng-template #no_shows>\n    <br>\n    <h2 text-center>You have no shows :(</h2>\n    <p text-center>Tap the \'+\' button to get started.</p>\n  </ng-template>\n  <ion-fab right bottom>\n    <button ion-fab color="primary" icon-only (click)="openMyShows()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/watchlist/watchlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], WatchlistPage);
    return WatchlistPage;
}());

//# sourceMappingURL=watchlist.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/find/find.module": [
		278,
		6
	],
	"../pages/matched-profile/matched-profile.module": [
		279,
		5
	],
	"../pages/messages/messages.module": [
		280,
		4
	],
	"../pages/my-shows/my-shows.module": [
		281,
		3
	],
	"../pages/preferences/preferences.module": [
		282,
		2
	],
	"../pages/profile/profile.module": [
		283,
		1
	],
	"../pages/watchlist/watchlist.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__find_find__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__find_find__["a" /* FindPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__messages_messages__["a" /* MessagesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Find" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Messages" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_find_find__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_matched_profile_matched_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_watchlist_watchlist__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_shows_my_shows__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_find_find__["a" /* FindPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_matched_profile_matched_profile__["a" /* MatchedProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_watchlist_watchlist__["a" /* WatchlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_shows_my_shows__["a" /* MyShowsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    // Tabs config
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/find/find.module#FindPageModule', name: 'FindPage', segment: 'find', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matched-profile/matched-profile.module#MatchedProfilePageModule', name: 'MatchedProfilePage', segment: 'matched-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-shows/my-shows.module#MyShowsPageModule', name: 'MyShowsPage', segment: 'my-shows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/watchlist/watchlist.module#WatchlistPageModule', name: 'WatchlistPage', segment: 'watchlist', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_find_find__["a" /* FindPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_watchlist_watchlist__["a" /* WatchlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_my_shows_my_shows__["a" /* MyShowsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_matched_profile_matched_profile__["a" /* MatchedProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





localStorage.setItem('profileCompleted', 'false');
localStorage.setItem('watchlistCompleted', 'false');
localStorage.setItem('preferencesCompleted', 'false');
localStorage.setItem('gotAdded', 'false');
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matched_profile_matched_profile__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindPage = (function () {
    function FindPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (localStorage.getItem('profileCompleted') == 'false') {
            this.profileCompleted = false;
        }
        else {
            this.profileCompleted = true;
        }
    }
    FindPage.prototype.completeProfile = function () {
        console.log(this.profileCompleted);
        this.profileCompleted = true;
        localStorage.setItem('profileCompleted', 'true');
    };
    FindPage.prototype.openRobert = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__matched_profile_matched_profile__["a" /* MatchedProfilePage */]);
    };
    FindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindPage');
    };
    FindPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('profileCompleted') == 'true') {
            this.profileCompleted = true;
        }
        else {
            this.profileCompleted = false;
        }
    };
    FindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/find/find.html"*/'<!--\n  Generated template for the FindPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Find</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!profileCompleted; else completed_profile">\n    <br>\n    <h2 text-center>Profile Incomplete :(</h2>\n    <p text-center>Please complete your profile before finding buddies.</p>\n    <button ion-button full (click)="completeProfile()">Complete Profile</button>\n  </div>\n  <ng-template #completed_profile>\n    <ion-card (click)="openRobert()">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/robert.jpg">\n        </ion-avatar>\n        <h2>Robert</h2>\n        <p class="good"><b>97%</b></p>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 4.4</ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/jennifer.jpeg">\n        </ion-avatar>\n        <h2>Jennifer</h2>\n        <p class="ok"><b>89%</b></p>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 4.8</ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/will.jpg">\n        </ion-avatar>\n        <h2>Will</h2>\n        <p class="ok"><b>85%</b></p>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 4.3</ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <h2 class="poor">Other Matches Below 80%</h2>\n        <ion-icon name="arrow-up" item-end></ion-icon>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/tom.jpg">\n        </ion-avatar>\n        <h2>Tom</h2>\n        <p class="poor"><b>61%</b></p>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 3.8</ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/imgs/jessica.jpg">\n        </ion-avatar>\n        <h2>Jessica</h2>\n        <p class="poor"><b>55%</b></p>\n        <ion-badge color="purple">\n          <ion-icon name="star"> 4.2</ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-card>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/find/find.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FindPage);
    return FindPage;
}());

//# sourceMappingURL=find.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map