webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-messages',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <br>\n  <h2 text-center>You have no buddies :(</h2>\n  <p text-center>Please message someone from the Find page.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function PreferencesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    PreferencesPage.prototype.savePreferences = function () {
        this.preferencesCompleted = true;
        this.navCtrl.pop();
    };
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/preferences/preferences.html"*/'<!--\n  Generated template for the PreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Preferences</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="savePreferences()">Save</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item no-lines padding>\n        <h2>Food</h2>\n        <ion-icon item-start name="restaurant"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Meals</p>\n        </ion-col>\n        <ion-col>\n          <p>Snacks</p>\n        </ion-col>\n        <ion-col>\n          <p>None</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Meals</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Meals</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Drink</h2>\n      <ion-icon item-start name="wine"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Alcoholic</p>\n        </ion-col>\n        <ion-col>\n          <p>Regular</p>\n        </ion-col>\n        <ion-col>\n          <p>None</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Meals</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Meals</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Snacks</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Distance</h2>\n      <ion-icon item-start name="car"></ion-icon>\n      <ion-badge>{{distance}} mi</ion-badge>\n    </ion-item>\n    <ion-range min="0" max="100" [(ngModel)]="distance" color="primary">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>100</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Talking</h2>\n      <ion-icon item-start name="chatbubbles"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Yes</p>\n        </ion-col>\n        <ion-col>\n          <p>No</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Phones</h2>\n      <ion-icon item-start name="phone-portrait"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <p>Yes</p>\n        </ion-col>\n        <ion-col>\n          <p>No</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Buddy\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Other People</h2>\n      <ion-icon item-start name="people"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n          <ion-col>\n            <p>I want to bring other people</p>\n          </ion-col>\n          <ion-col>\n            <p>Ok if buddy brings other people</p>\n          </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-checkbox>Yes</ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox>No</ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding text-wrap>\n      <h2>Episode Range</h2>\n      <ion-icon item-start name="fastforward"></ion-icon>\n      <p>How far forward and back are you willing to watch with a buddy?</p>\n      <ion-badge>{{-1*episode.lower}}{{episode.lowerPlus}} previous</ion-badge>\n      <ion-badge>{{episode.upper}}{{episode.upperPlus}} in advance</ion-badge>\n    </ion-item>\n    \n    <ion-range dualKnobs="true" [(ngModel)]="episode" min="-3" max="3" step="1" snaps="true" (ionChange)="checkEpisodeValue()">\n      <ion-label range-left>-3+</ion-label>\n      <ion-label range-right>3+</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding text-wrap>\n      <h2>Binge Duration</h2>\n      <ion-icon item-start name="timer"></ion-icon>\n      <ion-badge>{{duration.lower}} - {{duration.upper}}{{duration.upperPlus}} hrs</ion-badge>\n    </ion-item>\n    \n    <ion-range dualKnobs="true" [(ngModel)]="duration" min="0" max="5" step="1" snaps="true" (ionChange)="checkDurationValue()">\n      <ion-label range-left>0</ion-label>\n      <ion-label range-right>5+</ion-label>\n    </ion-range>\n  </ion-card>\n\n  <ion-card>\n    <ion-item no-lines padding>\n      <h2>Availability</h2>\n      <ion-icon item-start name="cloudy-night"></ion-icon>\n    </ion-item>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col col-8>\n          <p>Morning (6am - noon)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Afternoon (noon - 4pm)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Evening (4pm - 8pm)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n          <p>Night (8pm - 6am)</p>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/preferences/preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preferences_preferences__ = __webpack_require__(101);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.editPreferences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__preferences_preferences__["a" /* PreferencesPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-avatar>\n      <img src="../assets/imgs/chris.jpeg" class="circle-pic">\n    </ion-avatar>\n    <ion-item>\n      <h2 text-center>Chris</h2>\n      <p text-center>\n        <ion-badge>\n          <ion-icon name="star"> 4.4</ion-icon>\n        </ion-badge>\n      </p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Watchlist</h2>\n      <button ion-button icon-only item-end>\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <p>Please add some shows.</p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Preferences</h2>\n      <button ion-button icon-only item-end (click)="editPreferences();">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <p>Please add your preferences.</p>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/find/find.module": [
		275,
		3
	],
	"../pages/messages/messages.module": [
		276,
		2
	],
	"../pages/preferences/preferences.module": [
		277,
		1
	],
	"../pages/profile/profile.module": [
		278,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__find_find__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(102);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Find" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Messages" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_find_find__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/find/find.module#FindPageModule', name: 'FindPage', segment: 'find', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_find_find__["a" /* FindPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    }
    FindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindPage');
    };
    FindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find',template:/*ion-inline-start:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/find/find.html"*/'<!--\n  Generated template for the FindPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Find</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/robert.jpg">\n      </ion-avatar>\n      <h2>Robert</h2>\n      <p class="good"><b>97%</b></p>\n      <ion-badge>\n        <ion-icon name="star"> 4.4</ion-icon>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/jennifer.jpeg">\n      </ion-avatar>\n      <h2>Jennifer</h2>\n      <p class="ok"><b>89%</b></p>\n      <ion-badge>\n        <ion-icon name="star"> 4.8</ion-icon>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/will.jpg">\n      </ion-avatar>\n      <h2>Will</h2>\n      <p class="ok"><b>85%</b></p>\n      <ion-badge>\n        <ion-icon name="star"> 4.3</ion-icon>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2 class="poor">Other Matches Below 80%</h2>\n      <ion-icon name="arrow-up" item-end></ion-icon>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/tom.jpg">\n      </ion-avatar>\n      <h2>Tom</h2>\n      <p class="poor"><b>61%</b></p>\n      <ion-badge>\n        <ion-icon name="star"> 3.8</ion-icon>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/jessica.jpg">\n      </ion-avatar>\n      <h2>Jessica</h2>\n      <p class="poor"><b>55%</b></p>\n      <ion-badge>\n        <ion-icon name="star"> 4.2</ion-icon>\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/IonicProjects/Binge-Buddies/src/pages/find/find.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FindPage);
    return FindPage;
}());

//# sourceMappingURL=find.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map