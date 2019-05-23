(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.main-label {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi1sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <a mat-icon-button routerLink=\"/terminfindung\">\r\n    <mat-icon>code</mat-icon>\r\n  </a>\r\n  <a routerLink=\"/terminfindung\" class=\"main-label\">\r\n    d2gather\r\n  </a>\r\n  &nbsp;| Bringt uns zusammen\r\n\r\n  <!-- This fills the remaining space of the current row -->\r\n  <span class=\"fill-remaining-space\"></span>\r\n\r\n  <a mat-icon-button routerLink=\"/profil\" matTooltip=\"Profil\">\r\n    <mat-icon>person</mat-icon>\r\n  </a>\r\n</mat-toolbar>\r\n\r\n<div class=\"content-container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hackathon-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _terminfindung_terminfindung_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terminfindung/terminfindung.component */ "./src/app/terminfindung/terminfindung.component.ts");
/* harmony import */ var _terminplanung_terminplanung_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terminplanung/terminplanung.component */ "./src/app/terminplanung/terminplanung.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _terminfindung_termindetails_termindetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terminfindung/termindetails/termindetails.component */ "./src/app/terminfindung/termindetails/termindetails.component.ts");
/* harmony import */ var _termine_termine_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./termine/termine.service */ "./src/app/termine/termine.service.ts");
/* harmony import */ var _profil_profil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profil/profil.service */ "./src/app/profil/profil.service.ts");
/* harmony import */ var _persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./persistenz/local-storage.service */ "./src/app/persistenz/local-storage.service.ts");
/* harmony import */ var _tags_tag_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tags/tag.service */ "./src/app/tags/tag.service.ts");
/* harmony import */ var _tags_tag_auswahl_tag_auswahl_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tags/tag-auswahl/tag-auswahl.component */ "./src/app/tags/tag-auswahl/tag-auswahl.component.ts");
/* harmony import */ var _terminfindung_termin_dokumente_termin_dokumente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./terminfindung/termin-dokumente/termin-dokumente.component */ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.ts");
/* harmony import */ var _terminfindung_teilnehmer_teilnehmer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terminfindung/teilnehmer/teilnehmer.component */ "./src/app/terminfindung/teilnehmer/teilnehmer.component.ts");
/* harmony import */ var _terminfindung_termin_info_box_termin_info_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./terminfindung/termin-info-box/termin-info-box.component */ "./src/app/terminfindung/termin-info-box/termin-info-box.component.ts");





















var appRoutes = [
    { path: 'profil', component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_11__["ProfilComponent"] },
    { path: 'terminfindung', component: _terminfindung_terminfindung_component__WEBPACK_IMPORTED_MODULE_8__["TerminfindungComponent"] },
    { path: 'terminplanung', component: _terminplanung_terminplanung_component__WEBPACK_IMPORTED_MODULE_9__["TerminplanungComponent"] },
    { path: '**', redirectTo: 'terminfindung' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_11__["ProfilComponent"],
                _tags_tag_auswahl_tag_auswahl_component__WEBPACK_IMPORTED_MODULE_17__["TagAuswahlComponent"],
                _terminfindung_termindetails_termindetails_component__WEBPACK_IMPORTED_MODULE_12__["TermindetailsComponent"],
                _terminfindung_termin_dokumente_termin_dokumente_component__WEBPACK_IMPORTED_MODULE_18__["TerminDokumente"],
                _terminfindung_terminfindung_component__WEBPACK_IMPORTED_MODULE_8__["TerminfindungComponent"],
                _terminfindung_termin_info_box_termin_info_box_component__WEBPACK_IMPORTED_MODULE_20__["TerminInfoBoxComponent"],
                _terminplanung_terminplanung_component__WEBPACK_IMPORTED_MODULE_9__["TerminplanungComponent"],
                _terminfindung_teilnehmer_teilnehmer_component__WEBPACK_IMPORTED_MODULE_19__["TeilnehmerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, {
                    useHash: true
                })
            ],
            providers: [
                _persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_15__["LocalStorageService"],
                _profil_profil_service__WEBPACK_IMPORTED_MODULE_14__["ProfilService"],
                _tags_tag_service__WEBPACK_IMPORTED_MODULE_16__["TagService"],
                _termine_termine_service__WEBPACK_IMPORTED_MODULE_13__["TermineService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _terminfindung_termindetails_termindetails_component__WEBPACK_IMPORTED_MODULE_12__["TermindetailsComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/persistenz/local-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/persistenz/local-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.localStorage = window.localStorage;
    }
    LocalStorageService.prototype.put = function (key, content) {
        this.localStorage.setItem(key, JSON.stringify(content));
    };
    LocalStorageService.prototype.get = function (key) {
        var itemAsString = this.localStorage.getItem(key);
        if (!itemAsString)
            return undefined;
        return JSON.parse(itemAsString);
    };
    LocalStorageService.prototype.getKeys = function () {
        var keys = [];
        for (var i = 0; i < this.localStorage.length; i++) {
            keys.push(this.localStorage.key(i));
        }
        return keys;
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/profil/profil.component.css":
/*!*********************************************!*\
  !*** ./src/app/profil/profil.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profil-form {\r\n  max-width: 40em;\r\n  margin: 2em auto;\r\n}\r\n\r\n.card {\r\n  margin: 0.5em;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO21EQUNpRDtFQUNqRCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbC1mb3JtIHtcclxuICBtYXgtd2lkdGg6IDQwZW07XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/profil/profil.component.html":
/*!**********************************************!*\
  !*** ./src/app/profil/profil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-form\">\r\n  <mat-card class=\"card\">\r\n    <mat-card-title>Meine Interessen</mat-card-title>\r\n  \r\n    <mat-card-content>\r\n      <app-tag-auswahl [(gewaehlteTags)]=\"gewaehlteTags\"\r\n        (gewaehlteTagsChange)=\"onTagAuswahlChanged()\"></app-tag-auswahl>\r\n    </mat-card-content>\r\n  \r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let tag of gewaehlteTags\">\r\n        {{ tag.tag }}\r\n  \r\n        <!-- This fills the remaining space of the current row -->\r\n        <span class=\"fill-remaining-space\"></span>\r\n  \r\n        <button mat-icon-button (click)=\"entfernenTag(tag)\">\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-card>\r\n  \r\n  <mat-card class=\"card\">\r\n    <mat-card-title>Meine Benachrichtigungen</mat-card-title>\r\n  \r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let benachrichtigung of benachrichtigungen\">\r\n        {{ benachrichtigung }}\r\n                  \r\n        <!-- This fills the remaining space of the current row -->\r\n        <span class=\"fill-remaining-space\"></span>\r\n  \r\n        <mat-button-toggle-group multiple>\r\n          <mat-button-toggle><mat-icon>mail</mat-icon></mat-button-toggle>\r\n          <mat-button-toggle><mat-icon>smartphone</mat-icon></mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-card>\r\n  \r\n  <div class=\"action-container card\">\r\n    <button mat-raised-button color=\"primary\">\r\n      <mat-icon>save</mat-icon> Speichern\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.service */ "./src/app/profil/profil.service.ts");
/* harmony import */ var _tags_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tags/tag.service */ "./src/app/tags/tag.service.ts");




var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(tagService, profilService) {
        this.tagService = tagService;
        this.profilService = profilService;
        this.gewaehlteTags = [];
        this.benachrichtigungen = ['Agile', 'Fußball', 'Hackathon'];
        this.gewaehlteTags = this.profilService.getProfilangaben()
            .tags.map(function (t) { return tagService.getTags().find(function (tag) { return tag.tag === t; }); }).filter(function (x) { return !!x; });
    }
    ProfilComponent.prototype.entfernenTag = function (tag) {
        var index = this.gewaehlteTags.indexOf(tag);
        if (index < 0)
            return;
        this.gewaehlteTags.splice(index, 1);
        this.onTagAuswahlChanged();
    };
    ProfilComponent.prototype.onTagAuswahlChanged = function () {
        this.profilService.setAbonnierteTags(this.gewaehlteTags.map(function (x) { return x.tag; }));
    };
    ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./profil.component.html */ "./src/app/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/profil/profil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tags_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"], _profil_service__WEBPACK_IMPORTED_MODULE_2__["ProfilService"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./src/app/profil/profil.service.ts":
/*!******************************************!*\
  !*** ./src/app/profil/profil.service.ts ***!
  \******************************************/
/*! exports provided: ProfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilService", function() { return ProfilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _profilangaben__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilangaben */ "./src/app/profil/profilangaben.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../persistenz/local-storage.service */ "./src/app/persistenz/local-storage.service.ts");





var ProfilService = /** @class */ (function () {
    function ProfilService(localStorageService) {
        this.localStorageService = localStorageService;
        this.localStorageKey = 'ProfilService_Profilangaben';
        this.profilChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.profilChanged = this.profilChangedSubject.asObservable();
        var gespeichertesProfil = localStorageService.get(this.localStorageKey);
        this.profil = gespeichertesProfil || new _profilangaben__WEBPACK_IMPORTED_MODULE_2__["Profilangaben"]([]);
    }
    ProfilService.prototype.getProfilangaben = function () {
        return this.profil;
    };
    ProfilService.prototype.abonnierenTag = function (tag) {
        this.profil.tags.push(tag);
        this.save();
    };
    ProfilService.prototype.entfernenTag = function (tag) {
        var index = this.profil.tags.indexOf(tag);
        if (index < 0)
            return;
        this.profil.tags.splice(index, 1);
        this.save();
    };
    ProfilService.prototype.setAbonnierteTags = function (tags) {
        this.profil.tags = tags;
        this.save();
    };
    ProfilService.prototype.save = function () {
        this.localStorageService.put(this.localStorageKey, this.profil);
    };
    ProfilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], ProfilService);
    return ProfilService;
}());



/***/ }),

/***/ "./src/app/profil/profilangaben.ts":
/*!*****************************************!*\
  !*** ./src/app/profil/profilangaben.ts ***!
  \*****************************************/
/*! exports provided: Profilangaben */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profilangaben", function() { return Profilangaben; });
var Profilangaben = /** @class */ (function () {
    function Profilangaben(tags) {
        this.tags = tags;
    }
    return Profilangaben;
}());



/***/ }),

/***/ "./src/app/tags/tag-auswahl/tag-auswahl.component.html":
/*!*************************************************************!*\
  !*** ./src/app/tags/tag-auswahl/tag-auswahl.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-form-field (click)=\"tagAutocompleteTrigger.openPanel()\" class=\"tag-suchfeld\">\r\n    <input type=\"search\" matInput placeholder=\"Suche\"\r\n      [(ngModel)]=\"autoCompleteEingabe\"\r\n      [matAutocomplete]=\"tagAutocomplete\"\r\n      #tagAutocompleteTrigger=\"matAutocompleteTrigger\" />\r\n  </mat-form-field>\r\n\r\n  <mat-chip-list style=\"display:inline-block;\">\r\n    <mat-chip *ngFor=\"let tag of getTagVorschlaege()\"\r\n      class=\"clickable\"\r\n      (click)=\"auswaehlenTag(tag)\">\r\n      {{ tag.tag }}\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n\r\n  <mat-autocomplete #tagAutocomplete=\"matAutocomplete\" (optionSelected)=\"auswaehlenTagAusAutocomplete($event)\">\r\n    <mat-option *ngFor=\"let option of getTagAutocomplete()\" [value]=\"option\">{{option.tag}}</mat-option>\r\n  </mat-autocomplete>\r\n</div>"

/***/ }),

/***/ "./src/app/tags/tag-auswahl/tag-auswahl.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tags/tag-auswahl/tag-auswahl.component.ts ***!
  \***********************************************************/
/*! exports provided: TagAuswahlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagAuswahlComponent", function() { return TagAuswahlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tags/tag.service.ts");



var TagAuswahlComponent = /** @class */ (function () {
    function TagAuswahlComponent(tagService) {
        this.tagService = tagService;
        this.tagVorschlaege = [];
        this.gewaehlteTags = [];
        this.gewaehlteTagsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tagVorschlaege = this.tagService.getTags();
    }
    TagAuswahlComponent.prototype.getTagVorschlaege = function () {
        var bereitsGewaehlteTypes = this.gewaehlteTags.map(function (x) { return x.type; });
        var bereitsGewaehlteTags = this.gewaehlteTags.map(function (x) { return x.tag; });
        return this.tagVorschlaege.filter(function (x) { return !bereitsGewaehlteTypes.includes(x.type) && (x.parentTag == undefined || bereitsGewaehlteTags.includes(x.parentTag)); });
    };
    TagAuswahlComponent.prototype.getTagAutocomplete = function () {
        var _this = this;
        var eingabe = (this.autoCompleteEingabe && this.autoCompleteEingabe.toString() || '').toLowerCase();
        var vorschlaege = this.tagVorschlaege
            .filter(function (x) { return !_this.gewaehlteTags.includes(x); });
        if (eingabe) {
            vorschlaege = vorschlaege.filter(function (x) { return x.tag.toLowerCase().indexOf(eingabe) >= 0; });
        }
        return vorschlaege;
    };
    TagAuswahlComponent.prototype.auswaehlenTag = function (tag) {
        this.gewaehlteTags.push(tag);
        this.gewaehlteTagsChange.emit(this.gewaehlteTags);
    };
    TagAuswahlComponent.prototype.auswaehlenTagAusAutocomplete = function (e) {
        var _this = this;
        this.auswaehlenTag(e.option.value);
        setTimeout(function () { return _this.autoCompleteEingabe = ''; }, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagAuswahlComponent.prototype, "gewaehlteTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagAuswahlComponent.prototype, "gewaehlteTagsChange", void 0);
    TagAuswahlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-auswahl',
            template: __webpack_require__(/*! ./tag-auswahl.component.html */ "./src/app/tags/tag-auswahl/tag-auswahl.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]])
    ], TagAuswahlComponent);
    return TagAuswahlComponent;
}());



/***/ }),

/***/ "./src/app/tags/tag.service.ts":
/*!*************************************!*\
  !*** ./src/app/tags/tag.service.ts ***!
  \*************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_democontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.democontent */ "./src/app/tags/tags.democontent.ts");



var TagService = /** @class */ (function () {
    function TagService() {
        this.tags = _tags_democontent__WEBPACK_IMPORTED_MODULE_2__["DemoContentTags"];
    }
    TagService.prototype.getTags = function () {
        return this.tags;
    };
    TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/tags/tag.ts":
/*!*****************************!*\
  !*** ./src/app/tags/tag.ts ***!
  \*****************************/
/*! exports provided: Tag, TagType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagType", function() { return TagType; });
var Tag = /** @class */ (function () {
    function Tag(type, tag, parentTag) {
        this.type = type;
        this.tag = tag;
        this.parentTag = parentTag;
    }
    return Tag;
}());

var TagType;
(function (TagType) {
    TagType[TagType["Standort"] = 0] = "Standort";
    TagType[TagType["Kategorie"] = 1] = "Kategorie";
    TagType[TagType["Unterkategorie"] = 2] = "Unterkategorie";
})(TagType || (TagType = {}));


/***/ }),

/***/ "./src/app/tags/tags.democontent.ts":
/*!******************************************!*\
  !*** ./src/app/tags/tags.democontent.ts ***!
  \******************************************/
/*! exports provided: SPORT, ESSEN, MUSIK, REDEN, TECHNIK, AGILE, AFTERWORK, DemoContentTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPORT", function() { return SPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESSEN", function() { return ESSEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIK", function() { return MUSIK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDEN", function() { return REDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECHNIK", function() { return TECHNIK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGILE", function() { return AGILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTERWORK", function() { return AFTERWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoContentTags", function() { return DemoContentTags; });
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag */ "./src/app/tags/tag.ts");

var SPORT = 'Sport & Bewegung';
var ESSEN = 'Essen & Trinken';
var MUSIK = 'Musik';
var REDEN = 'Reden & Austausch';
var TECHNIK = 'Technik';
var AGILE = 'Agile';
var AFTERWORK = 'Afterwork';
var DemoContentTags = [
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, MUSIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Kategorie, AFTERWORK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Fußball', SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Paddeln', SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Laufen', SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Bowling', SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Bierbrauen', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Kochkurs', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#SchnitzelChallenge', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Band', MUSIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Chor', MUSIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#JazzCombo', MUSIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#InnovativesBüro', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Bücherclub', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Hackathon', TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Hackathon', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Hackathon', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#RaspberryPie', TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#LEGO-Mindstorms', TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Prototyping', TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#AgileCoffe', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#DesignThinking', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Innovationsschmiede', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Stammtisch', AFTERWORK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Beertasting', AFTERWORK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#SchnitzelChallenge', AFTERWORK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#WebAnaytyics', TECHNIK),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#WebAnaytyics', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#AgileCoffee', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#AgileCoffee', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#BewegtePause', SPORT),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#BewegtePause', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#ServiceDsign', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#ServiceDesign', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#UX', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#UX', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Kanban', AGILE),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Kanban', REDEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Salat', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Buffet', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Mittagessen', ESSEN),
    new _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"](_tag__WEBPACK_IMPORTED_MODULE_0__["TagType"].Unterkategorie, '#Shanty', MUSIK)
];


/***/ }),

/***/ "./src/app/termine/termin.ts":
/*!***********************************!*\
  !*** ./src/app/termine/termin.ts ***!
  \***********************************/
/*! exports provided: Termin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Termin", function() { return Termin; });
var Termin = /** @class */ (function () {
    function Termin(titel, beginn, ende, serie, terminreihe, beschreibung, standort, format, tags, teilnehmer, freieplaetze) {
        this.titel = titel;
        this.beginn = beginn;
        this.ende = ende;
        this.serie = serie;
        this.terminreihe = terminreihe;
        this.beschreibung = beschreibung;
        this.standort = standort;
        this.format = format;
        this.teilnehmer = teilnehmer;
        this.freieplaetze = freieplaetze;
        this.tags = tags || [];
    }
    return Termin;
}());



/***/ }),

/***/ "./src/app/termine/termine.democontent.ts":
/*!************************************************!*\
  !*** ./src/app/termine/termine.democontent.ts ***!
  \************************************************/
/*! exports provided: DemoContentTermine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoContentTermine", function() { return DemoContentTermine; });
var DemoContentTermine = [
    {
        titel: 'Hackathon',
        beschreibung: 'Bist Du bereit die Herausforderung anzunehmen? Dataport organisiert den ersten hausinternen Hackathon, in dem Du im Team zeigen kannst, was du drauf hast. Ihr könnt Eure Ideen zu einem interessanten Thema einfach mal umsetzen. An zwei Tagen wird diskutiert, entworfen, designt, gecodet und präsentiert. Hier ist nicht nur Softwareentwicklung gefragt, es können von Dir - unabhängig Deiner Aufgabe bei Dataport – verschiedene Rollen eingenommen werden. \n Developer – Du codest gerne und möchtest Ideen in ein Produkt verwandeln? Dann kannst Du hier loslegen. \nDesigner – Du möchtest dem Produkt ein cooles Aussehen verpassen und es dennoch benutzerfreundlich gestalten? Dann kannst Du hier zeigen wie es geht. \nInnovator – Du hast kreative Ideen? Dann unterstütze Dein Team bei der Ausarbeitung eines Konzeptes und habe Umsetzung im Blick. \nPresenter – Du bist ein Marketing-Talent und stehst gerne vor Publikum? Dann überleg Dir eine Strategie das Ergebnis Deines Teams zu präsentieren und überzeug die Jury von Eurem Produkt. \nReporter – Du wolltest schon immer mal ein Reporter sein? Dann begleite den Hackathon mit der Kamera, berichte im Live Blog, führe Interviews durch oder schreibe Artikel. \nEs ist ein Experiment, von dem wir gemeinsam lernen und Erfahrung sammeln wollen. \nJeder ist willkommen!',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 22, 9),
        ende: new Date(2019, 4, 23, 18, 0),
        ort: 'Falckensteiner Str. 2, Geb. 48b, Raum FS.015',
        serie: '',
        terminreihe: '',
        standort: 'Friedrichsort',
        format: 'Workshop',
        teilnehmer: '40',
        freieplaetze: '',
        mitbringen: 'Laptop',
        tags: ['Agile', 'Reden & Austausch', 'Technik', '#Hackathon']
    },
    {
        titel: 'Fußball',
        beschreibung: 'Seit Februar 2019 gibt es die Betriebssportgruppe Fußball. Wir sind ein Mix aus Jung und Alt und bei uns spielt es keine Rolle, ob man aktiv Fußball spielt oder einfach nur Spaß an der Sportart hat. Bei uns steht der Spaß im Vordergrund, allerdings darf auch der nötige Ehrgeiz nicht fehlen. Wir freuen uns immer über neue Gesichter.',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 24, 18, 0),
        ende: new Date(2019, 4, 24, 19, 0),
        ort: 'Treffen um 17.45 Uhr vorm Eingang des Betriebsrestaurants beim THW-Leistungszentrum in Altenholz',
        serie: 'wöchentlich',
        terminreihe: '',
        standort: 'Altenholz',
        format: 'Betriebssport',
        teilnehmer: '30',
        freieplaetze: '12',
        mitbringen: '',
        tags: ['Sport & Bewegung', '#Fußball']
    },
    {
        titel: 'Austausch Kanban',
        beschreibung: 'Mein Team arbeitet seit 3 Monaten mit der Kanban-Methode und ich würde mich gern mit anderen Kanban-Anwendern austauschen.',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 27, 13, 0),
        ende: new Date(2019, 4, 27, 13, 30),
        ort: 'Billtraße 87, Meetingraum 431a (Skype-Konferenz #3456)',
        serie: '',
        terminreihe: '',
        standort: 'Hamburg',
        format: 'Gespräch',
        teilnehmer: '2',
        freieplaetze: '',
        mitbringen: '',
        tags: ['Reden & Austausch', 'Agile', '#Kanban']
    },
    {
        titel: 'Bierbrauen',
        beschreibung: 'Selber Bier brauen - das geht! Ich zeige euch, wie einfach man selbst zu einem feinen Gebräu kommt, das mit Einheitsplörre nichts zu tun hat.',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 28, 10, 30),
        ende: new Date(2019, 4, 28, 16, 0),
        ort: 'Pankower Straße 1, bei Stefan Müller',
        serie: '',
        terminreihe: '',
        standort: 'Berlin',
        format: 'Workshop',
        teilnehmer: '8',
        freieplaetze: '10',
        mitbringen: '10 EUR pro Teilnehmer',
        tags: ['Afterwork', 'Essen & Trinken', '#Bierbrauen']
    },
    {
        titel: 'WebAnalytics',
        beschreibung: 'Webalaytics Praxisdemonstration - ich zeige euch, wie wir WebAnalytics für die Analyse der Nutzung unserer Onlineplattform einsetzen. \nFragen stellen und Diskutieren erwünscht!',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 29, 9, 0),
        ende: new Date(2019, 4, 29, 10, 0),
        ort: 'Falckensteiner Str. 2, Geb. 48b, Raum AS17',
        serie: '',
        terminreihe: '',
        standort: 'Friedrichsort',
        format: 'Praxisworkshop',
        teilnehmer: '8',
        freieplaetze: '',
        mitbringen: '',
        tags: ['Technik', 'Reden & Austausch', '#WebAnaytyics']
    },
    {
        titel: 'Salat Buffet',
        beschreibung: 'Einmal wöchentlich treffen wir uns mittags in der Projektküche für einen gesunden Mittagstisch mit schöner Aussicht und netter Gesellschaft - wer teilnehmen will, bringt bitte eine Salatzutat mit, für Salatsacucen ist gesorgt!',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 30, 17, 15),
        ende: new Date(2019, 4, 30, 19, 30),
        ort: 'Falckensteiner Str. 2, Geb. 48b, Raum FS.418',
        serie: 'wöchentlich',
        terminreihe: '',
        standort: 'Friedrichsort',
        format: 'Austausch',
        teilnehmer: '6',
        freieplaetze: '1',
        mitbringen: 'Salatzutaten',
        tags: ['Essen & Trinken', '#Salat', '#Buffet', '#Mittagessen']
    },
    {
        titel: 'moveIT - Bewegte Pause',
        beschreibung: 'Den Kopf zwischendurch mal frei bekommen, frische Luft schnappen, Gleichgesinnte aus anderen Dataport Bereichen kennenlernen - einfach mitmachen und ausprobieren!',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 31, 12, 0),
        ende: new Date(2019, 4, 31, 12, 20),
        ort: 'Treffpunkt vor der Kantine',
        serie: 'wöchentlich',
        terminreihe: '',
        standort: 'Hamburg',
        format: 'Bewegung',
        teilnehmer: '5',
        freieplaetze: '',
        mitbringen: '',
        tags: ['Sport & Bewegung', 'Reden & Austausch', '#BewegtePause']
    },
    {
        titel: 'Fußball',
        beschreibung: 'Seit Februar 2019 gibt es die Betriebssportgruppe Fußball. Wir sind ein Mix aus Jung und Alt und bei uns spielt es keine Rolle, ob man aktiv Fußball spielt oder einfach nur Spaß an der Sportart hat. Bei uns steht der Spaß im Vordergrund, allerdings darf auch der nötige Ehrgeiz nicht fehlen. Wir freuen uns immer über neue Gesichter.',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 4, 31, 18, 0),
        ende: new Date(2019, 4, 31, 19, 0),
        ort: 'Treffen um 17.45 Uhr vorm Eingang des Betriebsrestaurants beim THW-Leistungszentrum in Altenholz',
        serie: 'wöchentlich',
        terminreihe: '',
        standort: 'Altenholz',
        format: 'Betriebssport',
        teilnehmer: '30',
        freieplaetze: '21',
        mitbringen: '',
        tags: ['Sport & Bewegung', '#Fußball']
    },
    {
        titel: 'Shantychor',
        beschreibung: 'Shanties sind Arbeitsgesänge an Bord der Segelschiffe, wo es absolut wichtig war, dass viele Tätigkeiten von den Seeleuten gemeinsam im Gleichtakt vorgenommen werden mussten. Für die unterschiedlichen Arbeiten gab es demzufolge dann auch unterschiedliche Shanty-Arten. Der Ursprung liegt aber nachweislich schon in der Antike, wo das Singen an Bord gleichzeitig religiösen Charakter hatte, um die Götter um Beistand auf den gefährlichen Fahrten mit den kleinen Schiffen zu bitten. Im späten Mittelalter kam durch die Sklaverei auch afrikanisches Liedgut hinzu.\n Hier am Standort Hamburg haben wir vor mehr als 4 Jahren mit 10 Sängern einen Shanty-Chor gegründet und sind mittelerise auf 20 Sängerinnen und Sänger angewachsen. Wir üben einfache, aber effektvolle Shanties mit Akkordeonbegleitung, mit denen wir auch schon auf dem Hafengeburtstag aufgetreten sind. Bei uns kommt aber auch der Spaß nicht zu kurz, und wir freuen uns über weitere Mitsänderinnen und -sänger, Notenkenntnisse sind nicht erforlderlich!',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 5, 1, 13, 30),
        ende: new Date(2019, 5, 1, 14, 30),
        ort: 'Stellwerk, Harburger Straße 2, Probenraum 3',
        serie: 'alle zwei Wochen',
        terminreihe: '',
        standort: 'Hamburg',
        format: 'Hobby',
        teilnehmer: '17',
        freieplaetze: '',
        mitbringen: '',
        tags: ['Musik', '#Shanty']
    },
    {
        titel: 'Digitale Klamüserei Nr. 3: Storyboarding',
        beschreibung: 'Agile Produktentiwicklung zum Ausprobieren! \n\r Werkzeuge und Methoden rund um Design Thinking, Service Design und UX.)',
        // Jahr, Monat (0-basiert! 4 = Mai) , Tag, Stunde, Minute
        beginn: new Date(2019, 5, 2, 9),
        ende: new Date(2019, 5, 2, 18, 0),
        ort: 'Raum AS03',
        serie: '',
        terminreihe: '(Terminreihe)',
        standort: 'Altenholz',
        format: 'Workshop',
        teilnehmer: '18',
        freieplaetze: '2',
        mitbringen: 'Neugier',
        tags: ['Agile', 'Reden & Austausch', '#DesignThinking', '#ServiceDesign', '#UX']
    }
];


/***/ }),

/***/ "./src/app/termine/termine.service.ts":
/*!********************************************!*\
  !*** ./src/app/termine/termine.service.ts ***!
  \********************************************/
/*! exports provided: TermineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermineService", function() { return TermineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _termine_democontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termine.democontent */ "./src/app/termine/termine.democontent.ts");
/* harmony import */ var _persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../persistenz/local-storage.service */ "./src/app/persistenz/local-storage.service.ts");





var TermineService = /** @class */ (function () {
    function TermineService(localStorage) {
        this.localStorage = localStorage;
        this.DokumentLocalStorageKeyPrefix = 'TermineService_Dokument_';
        this.termineChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.termine = _termine_democontent__WEBPACK_IMPORTED_MODULE_3__["DemoContentTermine"];
        this.termineChanged = this.termineChangedSubject.asObservable();
    }
    TermineService.prototype.getTermine = function () {
        return this.termine;
    };
    TermineService.prototype.getTerminDokumente = function (termin) {
        var prefix = this.DokumentLocalStorageKeyPrefix + "_" + termin.titel + "_";
        return this.localStorage.getKeys()
            .filter(function (k) { return k.indexOf(prefix) === 0; })
            .map(function (x) { return x.substring(prefix.length); });
    };
    TermineService.prototype.loadDokument = function (termin, name) {
        var prefix = this.DokumentLocalStorageKeyPrefix + "_" + termin.titel + "_";
        return this.localStorage.get(prefix + name);
    };
    TermineService.prototype.saveDokument = function (termin, name, dataUrl) {
        var prefix = this.DokumentLocalStorageKeyPrefix + "_" + termin.titel + "_";
        this.localStorage.put(prefix + name, dataUrl);
    };
    TermineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_persistenz_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], TermineService);
    return TermineService;
}());



/***/ }),

/***/ "./src/app/terminfindung/teilnehmer/teilnehmer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/terminfindung/teilnehmer/teilnehmer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teilnehmer {\r\n    line-height: 24px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.teilnehmer .mat-icon {\r\n    position: absolute; \r\n}\r\n\r\n.teilnehmer .teilnehmertext {\r\n    margin-left: 28px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluZmluZHVuZy90ZWlsbmVobWVyL3RlaWxuZWhtZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90ZXJtaW5maW5kdW5nL3RlaWxuZWhtZXIvdGVpbG5laG1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlaWxuZWhtZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4udGVpbG5laG1lciAubWF0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxufVxyXG5cclxuLnRlaWxuZWhtZXIgLnRlaWxuZWhtZXJ0ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/terminfindung/teilnehmer/teilnehmer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/terminfindung/teilnehmer/teilnehmer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teilnehmer\">\r\n    <mat-icon>people</mat-icon>\r\n    <span class=\"teilnehmertext\">{{ termin.teilnehmer || 0 }} Teilnehmer\r\n        <span *ngIf=\"termin.freieplaetze\">/ {{ termin.freieplaetze}} freie Plätze</span>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "./src/app/terminfindung/teilnehmer/teilnehmer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/terminfindung/teilnehmer/teilnehmer.component.ts ***!
  \******************************************************************/
/*! exports provided: TeilnehmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeilnehmerComponent", function() { return TeilnehmerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/termine/termin */ "./src/app/termine/termin.ts");



var TeilnehmerComponent = /** @class */ (function () {
    function TeilnehmerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__["Termin"])
    ], TeilnehmerComponent.prototype, "termin", void 0);
    TeilnehmerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./teilnehmer.component.html */ "./src/app/terminfindung/teilnehmer/teilnehmer.component.html"), selector: 'app-teilnehmer', styles: [__webpack_require__(/*! ./teilnehmer.component.css */ "./src/app/terminfindung/teilnehmer/teilnehmer.component.css")] })
    ], TeilnehmerComponent);
    return TeilnehmerComponent;
}());



/***/ }),

/***/ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/terminfindung/termin-dokumente/termin-dokumente.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-drop-zone {\r\n  margin: 0.25em;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.loading-spinner {\r\n  margin: 2em auto;\r\n}\r\n\r\n.termin-dokumente {\r\n  overflow: auto;\r\n  height: 20.75em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW4tZG9rdW1lbnRlL3Rlcm1pbi1kb2t1bWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW4tZG9rdW1lbnRlL3Rlcm1pbi1kb2t1bWVudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWRyb3Atem9uZSB7XHJcbiAgbWFyZ2luOiAwLjI1ZW07XHJcbn1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubG9hZGluZy1zcGlubmVyIHtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcblxyXG4udGVybWluLWRva3VtZW50ZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMC43NWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/terminfindung/termin-dokumente/termin-dokumente.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"file-drop-zone\" *ngIf=\"!isLoading\">\r\n      <file-drop dropZoneLabel=\"Dokument hierhin ziehen\" dropZoneClassName=\"small-drop-zone\" contentClassName=\"small-drop-zone-content\"\r\n        (onFileDrop)=\"dropped($event)\">\r\n      </file-drop>\r\n  </div>\r\n\r\n  <div *ngIf=\"isLoading\" class=\"loading-spinner-container\">\r\n    <mat-spinner class=\"loading-spinner\" [diameter]=\"50\"></mat-spinner>\r\n  </div>\r\n\r\n  <div class=\"termin-dokumente\">\r\n    <mat-action-list>\r\n      <mat-list-item class=\"clickable\" *ngFor=\"let dokument of dokumente\" (click)=\"download(dokument)\">\r\n        {{ dokument }}\r\n  \r\n        <!-- This fills the remaining space of the current row -->\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <mat-icon>get_app</mat-icon>\r\n      </mat-list-item>\r\n    </mat-action-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/terminfindung/termin-dokumente/termin-dokumente.component.ts ***!
  \******************************************************************************/
/*! exports provided: TerminDokumente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminDokumente", function() { return TerminDokumente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/termine/termin */ "./src/app/termine/termin.ts");
/* harmony import */ var src_app_termine_termine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/termine/termine.service */ "./src/app/termine/termine.service.ts");




var TerminDokumente = /** @class */ (function () {
    function TerminDokumente(terminService) {
        this.terminService = terminService;
        this.isLoading = false;
        this.dokumente = [];
    }
    TerminDokumente.prototype.ngOnInit = function () {
        this.refreshDokumenteListe();
    };
    TerminDokumente.prototype.refreshDokumenteListe = function () {
        this.dokumente = this.terminService.getTerminDokumente(this.termin);
    };
    TerminDokumente.prototype.dropped = function (event) {
        var _this = this;
        this.isLoading = true;
        var timeoutDone = false;
        var uploadDone = false;
        // Künstliches "2 Sekunden laden" für echtes Upload Gefühl
        setTimeout(function () {
            timeoutDone = true;
            checkLoading();
        }, 1500);
        var checkLoading = function () {
            if (timeoutDone && uploadDone) {
                _this.isLoading = false;
            }
        };
        event.files.forEach(function (x) {
            if (x.fileEntry.isFile) {
                var file_1 = x.fileEntry;
                file_1.file(function (f) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.terminService.saveDokument(_this.termin, file_1.name, reader.result);
                        _this.refreshDokumenteListe();
                        uploadDone = true;
                        checkLoading();
                    };
                    reader.readAsDataURL(f);
                });
            }
        });
    };
    TerminDokumente.prototype.download = function (file) {
        var dataUrl = this.terminService.loadDokument(this.termin, file);
        console.log(dataUrl);
        // https://stackoverflow.com/questions/3916191/download-data-url-file
        var a = document.createElement("a");
        a.href = dataUrl;
        a.setAttribute("download", file);
        a.click();
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__["Termin"])
    ], TerminDokumente.prototype, "termin", void 0);
    TerminDokumente = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termin-dokumente',
            template: __webpack_require__(/*! ./termin-dokumente.component.html */ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.html"),
            styles: [__webpack_require__(/*! ./termin-dokumente.component.css */ "./src/app/terminfindung/termin-dokumente/termin-dokumente.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_termine_termine_service__WEBPACK_IMPORTED_MODULE_3__["TermineService"]])
    ], TerminDokumente);
    return TerminDokumente;
}());



/***/ }),

/***/ "./src/app/terminfindung/termin-info-box/termin-info-box.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/terminfindung/termin-info-box/termin-info-box.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-color: #e0e0e0;\r\n  padding: 0.2em 0.5em;\r\n  border-radius: 5px;\r\n  margin: 0.1em;\r\n}\r\n\r\n.icon-text {\r\n  line-height: 24px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.icon-text .mat-icon {\r\n  position: absolute; \r\n}\r\n\r\n.icon-text span {\r\n  margin-left: 28px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW4taW5mby1ib3gvdGVybWluLWluZm8tYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW4taW5mby1ib3gvdGVybWluLWluZm8tYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAuMWVtO1xyXG59XHJcblxyXG4uaWNvbi10ZXh0IHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaWNvbi10ZXh0IC5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxufVxyXG5cclxuLmljb24tdGV4dCBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMjhweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/terminfindung/termin-info-box/termin-info-box.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/terminfindung/termin-info-box/termin-info-box.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography container\">\r\n  <div class=\"icon-text\">\r\n    <mat-icon>access_time</mat-icon>\r\n    <span>\r\n        {{ termin.beginn | date: 'dd.MM.yyyy HH:mm' }}\r\n        -\r\n        {{ termin.ende | date: getEndeDatumsformat(termin) }}\r\n    </span>\r\n  </div>\r\n  <div class=\"icon-text\">\r\n    <mat-icon>home</mat-icon>\r\n    <span>{{ termin.standort }} {{ termin.ort }}</span>\r\n  </div>\r\n  <app-teilnehmer [termin]=\"termin\"></app-teilnehmer>\r\n</div>"

/***/ }),

/***/ "./src/app/terminfindung/termin-info-box/termin-info-box.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/terminfindung/termin-info-box/termin-info-box.component.ts ***!
  \****************************************************************************/
/*! exports provided: TerminInfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminInfoBoxComponent", function() { return TerminInfoBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/termine/termin */ "./src/app/termine/termin.ts");



var TerminInfoBoxComponent = /** @class */ (function () {
    function TerminInfoBoxComponent() {
    }
    /**
     * Formatierung für Ende-Datum eines Termin ermitteln.
     * Ist der Termin nicht mehrtägig, interessiert beim Ende-Datum nur die Uhrzeit.
     * @param termin
     */
    TerminInfoBoxComponent.prototype.getEndeDatumsformat = function (termin) {
        var beginnDatum = termin.beginn.getFullYear() + "-" + termin.beginn.getMonth() + "-" + termin.beginn.getDate();
        var endeDatum = termin.ende.getFullYear() + "-" + termin.ende.getMonth() + "-" + termin.ende.getDate();
        return beginnDatum == endeDatum ? 'HH:mm' : 'dd.MM.yyyy HH:mm';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_termine_termin__WEBPACK_IMPORTED_MODULE_2__["Termin"])
    ], TerminInfoBoxComponent.prototype, "termin", void 0);
    TerminInfoBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termin-info-box',
            template: __webpack_require__(/*! ./termin-info-box.component.html */ "./src/app/terminfindung/termin-info-box/termin-info-box.component.html"),
            styles: [__webpack_require__(/*! ./termin-info-box.component.css */ "./src/app/terminfindung/termin-info-box/termin-info-box.component.css")]
        })
    ], TerminInfoBoxComponent);
    return TerminInfoBoxComponent;
}());



/***/ }),

/***/ "./src/app/terminfindung/termindetails/termindetails.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/terminfindung/termindetails/termindetails.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".termin-details-container {\r\n  min-height: 15em;\r\n  margin-top: 0.4em;\r\n}\r\n\r\n.tab-content {\r\n  margin: 0.1em;\r\n}\r\n\r\n.termin-detail-beschreibung {\r\n  overflow: auto;\r\n  height: 25em;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.termin-tabs {\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.icon-text {\r\n  line-height: 24px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.icon-text .mat-icon {\r\n  position: absolute; \r\n}\r\n\r\n.icon-text span {\r\n  margin-left: 28px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW5kZXRhaWxzL3Rlcm1pbmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW5kZXRhaWxzL3Rlcm1pbmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXJtaW4tZGV0YWlscy1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDE1ZW07XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbn1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgbWFyZ2luOiAwLjFlbTtcclxufVxyXG5cclxuLnRlcm1pbi1kZXRhaWwtYmVzY2hyZWlidW5nIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IDI1ZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGVybWluLXRhYnMge1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXHJcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuXHJcbi5pY29uLXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLXRleHQgLm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59XHJcblxyXG4uaWNvbi10ZXh0IHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyOHB4OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/terminfindung/termindetails/termindetails.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/terminfindung/termindetails/termindetails.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"title\">{{ termin.titel }}</h2>\r\n\r\n<mat-dialog-content>\r\n  <app-termin-info-box [termin]=\"termin\"></app-termin-info-box>\r\n  <div class=\"termin-details-container mat-typography\">\r\n    <mat-chip-list style=\"display:inline-block;\">\r\n      <mat-chip *ngFor=\"let tag of termin.tags\"\r\n        [color]=\"istTagAbonniert(tag) ? 'accent' : 'default'\" selected\r\n        (click)=\"toggleTagAbo(tag)\" class=\"clickable\">\r\n        {{ tag }}\r\n  \r\n      <mat-icon *ngIf=\"!istTagAbonniert(tag)\">rss_feed</mat-icon>\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n\r\n    <mat-tab-group class=\"termin-tabs\">\r\n      <mat-tab label=\"Beschreibung\">\r\n        <div class=\"tab-content\">\r\n          <div class=\"termin-detail-beschreibung\">\r\n            <div *ngFor=\"let zeile of getTerminBeschreibungZeilen()\">\r\n              {{ zeile }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Dokumente\">\r\n        <div class=\"tab-content\">\r\n          <app-termin-dokumente [termin]=\"termin\"></app-termin-dokumente>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions *ngIf=\"!anmeldungIsLoading\">\r\n  <button mat-button mat-raised-button color=\"primary\" (click)=\"toggleAnmeldung()\" *ngIf=\"!istAngemeldet\">Teilnehmen</button>\r\n  \r\n  <div class=\"icon-text mat-typography\" *ngIf=\"istAngemeldet\">\r\n    <mat-icon>check</mat-icon>\r\n    <span>Angemeldet&nbsp;&nbsp;</span>\r\n  </div>\r\n  <span *ngIf=\"istAngemeldet\" class=\"mat-typography\">\r\n    <button mat-button mat-raised-button (click)=\"toggleAnmeldung()\">Abmelden</button>\r\n  </span>\r\n  \r\n  <!-- This fills the remaining space of the current row -->\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button mat-icon-button mat-raised-button color=\"primary\"><mat-icon>camera_alt</mat-icon></button>\r\n</mat-dialog-actions>\r\n\r\n<div *ngIf=\"anmeldungIsLoading\">\r\n  <mat-spinner [diameter]=\"40\" style=\"margin:0.5em auto 0 auto;\"></mat-spinner>\r\n</div>"

/***/ }),

/***/ "./src/app/terminfindung/termindetails/termindetails.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/terminfindung/termindetails/termindetails.component.ts ***!
  \************************************************************************/
/*! exports provided: TermindetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermindetailsComponent", function() { return TermindetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_profil_profil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/profil/profil.service */ "./src/app/profil/profil.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var TermindetailsComponent = /** @class */ (function () {
    function TermindetailsComponent(profilService, snackbar) {
        this.profilService = profilService;
        this.snackbar = snackbar;
        this.istAngemeldet = false;
        this.anmeldungIsLoading = false;
    }
    TermindetailsComponent.prototype.istTagAbonniert = function (tag) {
        return this.profilService.getProfilangaben().tags.includes(tag);
    };
    TermindetailsComponent.prototype.toggleTagAbo = function (tag) {
        var _this = this;
        var istAbonniert = this.istTagAbonniert(tag);
        var toggle = function () {
            if (istAbonniert) {
                _this.profilService.entfernenTag(tag);
            }
            else {
                _this.profilService.abonnierenTag(tag);
            }
            istAbonniert = !istAbonniert;
        };
        toggle();
        var message = !istAbonniert
            ? "Das Abo f\u00FCr das Tag " + tag + " wurde beendet."
            : "Das Tag " + tag + " wurde abonniert.";
        var snackbar = this.snackbar.open(message, 'Rückgängig', {
            duration: 5000
        });
        snackbar.onAction().subscribe(function () {
            toggle();
        });
    };
    TermindetailsComponent.prototype.getTerminBeschreibungZeilen = function () {
        return this.termin.beschreibung.split('\n');
    };
    TermindetailsComponent.prototype.anmelden = function () {
        this.istAngemeldet = true;
    };
    TermindetailsComponent.prototype.abmelden = function () {
        this.istAngemeldet = false;
    };
    TermindetailsComponent.prototype.toggleAnmeldung = function () {
        var _this = this;
        this.istAngemeldet = !this.istAngemeldet;
        this.anmeldungIsLoading = true;
        setTimeout(function () {
            _this.anmeldungIsLoading = false;
        }, 1000);
    };
    TermindetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./termindetails.component.html */ "./src/app/terminfindung/termindetails/termindetails.component.html"),
            styles: [__webpack_require__(/*! ./termindetails.component.css */ "./src/app/terminfindung/termindetails/termindetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_profil_profil_service__WEBPACK_IMPORTED_MODULE_2__["ProfilService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], TermindetailsComponent);
    return TermindetailsComponent;
}());



/***/ }),

/***/ "./src/app/terminfindung/terminfindung.component.css":
/*!***********************************************************!*\
  !*** ./src/app/terminfindung/terminfindung.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".termin-item {\r\n  margin: 1em 0.5em;\r\n  display: inline-block;\r\n  width: 20em;\r\n  height: 10em;\r\n  background-size: 100% 100%;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.5em;\r\n}\r\n\r\n.termin-item .mat-card-subtitle {\r\n  color: white;\r\n}\r\n\r\n.termin-item.afterwork {\r\n  background-image: url(\"/assets/kacheln/AfterWork.jpg\");\r\n}\r\n\r\n.termin-item.Musik {\r\n  background-image: url(\"/assets/kacheln/Musik.jpg\");\r\n}\r\n\r\n.termin-item.Agile {\r\n  background-image: url(\"/assets/kacheln/Developer.jpg\");\r\n}\r\n\r\n.termin-item.sport {\r\n  background-image: url(\"/assets/kacheln/walking.jpg\");\r\n}\r\n\r\n.termin-item.essen {\r\n  background-image: url(\"/assets/kacheln/Essen-Trinken.jpg\");\r\n}\r\n\r\n.termin-item.reden {\r\n  background-image: url(\"/assets/kacheln/Reden.jpg\");\r\n}\r\n\r\n.termin-item.Technik {\r\n  background-image: url(\"/assets/kacheln/IT_Technik.jpg\");\r\n}\r\n\r\n.termin-item .teilnehmer {\r\n  position: absolute;\r\n  bottom: 20px;\r\n}\r\n\r\n.termin-item .cardSubtitle, .termin-item .cardTitle {\r\n  background: rgba(0, 0, 0, 0.2);\r\n  padding-left: 4px;\r\n  margin-left: -4px;\r\n}\r\n\r\n.termin-item .cardTitle {\r\n  margin-bottom: 4px;\r\n  padding-bottom: 8px;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n}\r\n\r\n.termin-item .cardSubtitle {\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.ergebnisliste {\r\n  padding: 0 1em;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.toolbar-row-mit-tags {\r\n  height: auto;\r\n  min-height: 64px;\r\n}\r\n\r\n.tag-suchfeld {\r\n  height: 64px;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.standort-auswahl {\r\n  font-size: 14px;\r\n}\r\n\r\n.neuesEvent {\r\n  font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluZmluZHVuZy90ZXJtaW5maW5kdW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbmZpbmR1bmcvdGVybWluZmluZHVuZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1pbi1pdGVtIHtcclxuICBtYXJnaW46IDFlbSAwLjVlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgaGVpZ2h0OiAxMGVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMC4xZW0gMC4xZW0gMC41ZW07XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbSAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlcm1pbi1pdGVtLmFmdGVyd29yayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9rYWNoZWxuL0FmdGVyV29yay5qcGdcIik7XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbS5NdXNpayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9rYWNoZWxuL011c2lrLmpwZ1wiKTtcclxufVxyXG5cclxuLnRlcm1pbi1pdGVtLkFnaWxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2thY2hlbG4vRGV2ZWxvcGVyLmpwZ1wiKTtcclxufVxyXG5cclxuLnRlcm1pbi1pdGVtLnNwb3J0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2thY2hlbG4vd2Fsa2luZy5qcGdcIik7XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbS5lc3NlbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9rYWNoZWxuL0Vzc2VuLVRyaW5rZW4uanBnXCIpO1xyXG59XHJcblxyXG4udGVybWluLWl0ZW0ucmVkZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMva2FjaGVsbi9SZWRlbi5qcGdcIik7XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbS5UZWNobmlrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2thY2hlbG4vSVRfVGVjaG5pay5qcGdcIik7XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbSAudGVpbG5laG1lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRlcm1pbi1pdGVtIC5jYXJkU3VidGl0bGUsIC50ZXJtaW4taXRlbSAuY2FyZFRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbn1cclxuXHJcbi50ZXJtaW4taXRlbSAuY2FyZFRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnRlcm1pbi1pdGVtIC5jYXJkU3VidGl0bGUge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZXJnZWJuaXNsaXN0ZSB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcblxyXG4udG9vbGJhci1yb3ctbWl0LXRhZ3Mge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGFnLXN1Y2hmZWxkIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc3RhbmRvcnQtYXVzd2FobCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmV1ZXNFdmVudCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/terminfindung/terminfindung.component.html":
/*!************************************************************!*\
  !*** ./src/app/terminfindung/terminfindung.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Suchfilter -->\r\n<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <mat-button-toggle-group multiple class=\"standort-auswahl\" (change)=\"standortAuswahlChanged($event)\">\r\n      <mat-button-toggle *ngFor=\"let standort of standorte\" [value]=\"standort\">{{ standort }}</mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"fill-remaining-space\"></span>\r\n\r\n    <a mat-button mat-raised-button color=\"primary\" routerLink=\"/terminplanung\" matTooltip=\"Neues Event\" class=\"neuesEvent\">\r\n      <mat-icon>add_circle</mat-icon> Event\r\n    </a>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row class=\"toolbar-row-mit-tags\">\r\n    <app-tag-auswahl\r\n      [(gewaehlteTags)]=\"gewaehlteTags\"\r\n      (gewaehlteTagsChange)=\"suchenTermine()\"></app-tag-auswahl>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row *ngIf=\"gewaehlteTags.length\" class=\"toolbar-row-mit-tags\">\r\n    Ihre Suche: &nbsp;\r\n    <mat-chip-list style=\"display:inline-block;\">\r\n      <mat-chip *ngFor=\"let tag of gewaehlteTags\">\r\n        {{ tag.tag }}\r\n\r\n        <mat-icon (click)=\"abswaehlenTag(tag)\" class=\"clickable\">clear</mat-icon>\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<!-- Ergebnisliste -->\r\n<div class=\"ergebnisliste\">\r\n  <mat-card class=\"termin-item clickable\" [ngClass]=\"kategorieClass(termin)\" *ngFor=\"let termin of gefundeneTermine\"\r\n    (click)=\"anzeigenTerminDetails(termin)\" >\r\n    <mat-card-title class=\"cardTitle\">\r\n      {{ termin.titel }}\r\n      <mat-icon *ngIf=\"termin.serie || termin.terminreihe\">repeat</mat-icon>\r\n    </mat-card-title>\r\n    <mat-card-subtitle class=\"cardSubtitle\">\r\n      {{ termin.beginn | date: 'dd.MM.yyyy HH:mm' }}\r\n      -\r\n      {{ termin.ende | date: getEndeDatumsformat(termin) }},\r\n      {{ termin.standort }}<span *ngIf=\"termin.serie\">, {{ termin.serie}}</span>\r\n    </mat-card-subtitle>\r\n    <mat-card-content>\r\n    </mat-card-content>\r\n    <mat-card-footer class=\"teilnehmer\">\r\n        <app-teilnehmer [termin]=\"termin\"></app-teilnehmer>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/terminfindung/terminfindung.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/terminfindung/terminfindung.component.ts ***!
  \**********************************************************/
/*! exports provided: TerminfindungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminfindungComponent", function() { return TerminfindungComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _termindetails_termindetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termindetails/termindetails.component */ "./src/app/terminfindung/termindetails/termindetails.component.ts");
/* harmony import */ var _termine_termine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../termine/termine.service */ "./src/app/termine/termine.service.ts");
/* harmony import */ var _profil_profil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profil/profil.service */ "./src/app/profil/profil.service.ts");
/* harmony import */ var _tags_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tags/tag.service */ "./src/app/tags/tag.service.ts");
/* harmony import */ var _tags_tags_democontent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tags/tags.democontent */ "./src/app/tags/tags.democontent.ts");








var TerminfindungComponent = /** @class */ (function () {
    function TerminfindungComponent(tagService, termineService, profilService, dialog) {
        this.tagService = tagService;
        this.termineService = termineService;
        this.profilService = profilService;
        this.dialog = dialog;
        this.standorte = ['Hamburg', 'Altenholz', 'Friedrichsort', 'Halle', 'Magdeburg', 'Bremen', 'Rostock', 'Lüneburg'];
        this.gefundeneTermine = [];
        this.ausgewaehlteStandorte = [];
        this.gewaehlteTags = [];
        this.gewaehlteTags = this.profilService.getProfilangaben()
            .tags.map(function (t) { return tagService.getTags().find(function (tag) { return tag.tag === t; }); }).filter(function (x) { return !!x; });
        this.suchenTermine();
    }
    TerminfindungComponent.prototype.anzeigenTerminDetails = function (termin) {
        var terminDetailsComponent = this.dialog.open(_termindetails_termindetails_component__WEBPACK_IMPORTED_MODULE_3__["TermindetailsComponent"], { width: '98%', maxWidth: '35em' }).componentInstance;
        terminDetailsComponent.termin = termin;
    };
    /**
     * Formatierung für Ende-Datum eines Termin ermitteln.
     * Ist der Termin nicht mehrtägig, interessiert beim Ende-Datum nur die Uhrzeit.
     * @param termin
     */
    TerminfindungComponent.prototype.getEndeDatumsformat = function (termin) {
        var beginnDatum = termin.beginn.getFullYear() + "-" + termin.beginn.getMonth() + "-" + termin.beginn.getDate();
        var endeDatum = termin.ende.getFullYear() + "-" + termin.ende.getMonth() + "-" + termin.ende.getDate();
        return beginnDatum == endeDatum ? 'HH:mm' : 'dd.MM.yyyy HH:mm';
    };
    TerminfindungComponent.prototype.standortAuswahlChanged = function (e) {
        this.ausgewaehlteStandorte = e.value;
        this.suchenTermine();
    };
    TerminfindungComponent.prototype.suchenTermine = function () {
        var _this = this;
        var termine = this.termineService.getTermine();
        if (this.ausgewaehlteStandorte.length) {
            termine = termine.filter(function (t) { return _this.ausgewaehlteStandorte.includes(t.standort); });
        }
        if (this.gewaehlteTags.length) {
            var tags_1 = this.gewaehlteTags.map(function (x) { return x.tag; });
            termine = termine.filter(function (t) { return tags_1.every(function (tag) { return t.tags.concat(t.format).includes(tag); }); });
        }
        this.gefundeneTermine = termine;
    };
    TerminfindungComponent.prototype.abswaehlenTag = function (tag) {
        var index = this.gewaehlteTags.indexOf(tag);
        if (index < 0)
            return;
        this.gewaehlteTags.splice(index, 1);
        this.suchenTermine();
    };
    TerminfindungComponent.prototype.kategorieClass = function (termin) {
        switch (termin.tags[0]) {
            case _tags_tags_democontent__WEBPACK_IMPORTED_MODULE_7__["SPORT"]:
                return 'sport';
            case _tags_tags_democontent__WEBPACK_IMPORTED_MODULE_7__["ESSEN"]:
                return 'essen';
            case _tags_tags_democontent__WEBPACK_IMPORTED_MODULE_7__["REDEN"]:
                return 'reden';
            case _tags_tags_democontent__WEBPACK_IMPORTED_MODULE_7__["AFTERWORK"]:
                return 'afterwork';
        }
        return termin.tags[0];
    };
    TerminfindungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./terminfindung.component.html */ "./src/app/terminfindung/terminfindung.component.html"),
            styles: [__webpack_require__(/*! ./terminfindung.component.css */ "./src/app/terminfindung/terminfindung.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tags_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagService"],
            _termine_termine_service__WEBPACK_IMPORTED_MODULE_4__["TermineService"],
            _profil_profil_service__WEBPACK_IMPORTED_MODULE_5__["ProfilService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TerminfindungComponent);
    return TerminfindungComponent;
}());



/***/ }),

/***/ "./src/app/terminplanung/terminplanung.component.css":
/*!***********************************************************!*\
  !*** ./src/app/terminplanung/terminplanung.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".termin-form {\r\n  max-width: 40em;\r\n  margin: 2em auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWlucGxhbnVuZy90ZXJtaW5wbGFudW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGVybWlucGxhbnVuZy90ZXJtaW5wbGFudW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybWluLWZvcm0ge1xyXG4gIG1heC13aWR0aDogNDBlbTtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/terminplanung/terminplanung.component.html":
/*!************************************************************!*\
  !*** ./src/app/terminplanung/terminplanung.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"termin-form\">\r\n  <mat-card-title>\r\n    Neuer Termin\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n\r\n    <div>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Titel\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Beginn\">\r\n      </mat-form-field>\r\n      &nbsp;\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Ende\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Standort\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Ort\">\r\n      </mat-form-field>\r\n\r\n      <div>\r\n        <button mat-raised-button color=\"primary\">\r\n          <mat-icon>check</mat-icon> Erstellen\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/terminplanung/terminplanung.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/terminplanung/terminplanung.component.ts ***!
  \**********************************************************/
/*! exports provided: TerminplanungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminplanungComponent", function() { return TerminplanungComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TerminplanungComponent = /** @class */ (function () {
    function TerminplanungComponent() {
    }
    TerminplanungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./terminplanung.component.html */ "./src/app/terminplanung/terminplanung.component.html"),
            styles: [__webpack_require__(/*! ./terminplanung.component.css */ "./src/app/terminplanung/terminplanung.component.css")]
        })
    ], TerminplanungComponent);
    return TerminplanungComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\hackathon\hackathon-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map