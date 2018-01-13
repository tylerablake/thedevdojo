webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" style=\"padding-top:20px;\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.environmentName = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].name;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_view_post_view_post_component__ = __webpack_require__("../../../../../src/app/components/view-post/view-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_post_list_by_tag_post_list_by_tag_component__ = __webpack_require__("../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_unpublished_post_list_unpublished_post_list_component__ = __webpack_require__("../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules







//Components













//Services




//Guards

//Routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_13__components_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_14__components_post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'posts/unpublished', component: __WEBPACK_IMPORTED_MODULE_18__components_unpublished_post_list_unpublished_post_list_component__["a" /* UnpublishedPostListComponent */] },
    { path: 'posts/create', component: __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__["a" /* PostComponent */] },
    { path: 'posts/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_view_post_view_post_component__["a" /* ViewPostComponent */] },
    { path: 'posts/tag/:tag', component: __WEBPACK_IMPORTED_MODULE_17__components_post_list_by_tag_post_list_by_tag_component__["a" /* PostListByTagComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_view_post_view_post_component__["a" /* ViewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_post_list_by_tag_post_list_by_tag_component__["a" /* PostListByTagComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_unpublished_post_list_unpublished_post_list_component__["a" /* UnpublishedPostListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_post_service__["a" /* PostService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n\n<p>Welcome to the dashboard. Something cool is coming soon!</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  i{\r\n    text-shadow: 3px 3px 16px #343a40 ;\r\n  }\r\n</style>\r\n\r\n<div class=\"jumbotron text-center\">\r\n  <h1>Coming Soon!</h1>\r\n  <p class=\"lead\">Go ahead and register! We'll send a notification out when we go live.</p>\r\n    <div>\r\n      <a class=\"btn btn-info\" [routerLink]=\"['/register']\">Register</a>      \r\n    </div>\r\n    <span></span>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 text-center\">\r\n    <div><i class=\"fa fa-5x fa-comment\" style=\"color:#343a40;\"></i></div>    \r\n    <h3>Blogs</h3>\r\n    <p>Read a wide range of blog posts from fellow developers</p>\r\n  </div>\r\n  <div class=\"col-md-4 text-center\">\r\n    <h3>Tutorials</h3>\r\n    <p>Receive tutorial posts and videos covering various technologies</p>\r\n  </div>\r\n  <div class=\"col-md-4 text-center\">\r\n    <h3>Tips and Tricks</h3>\r\n    <p>Receive tips and tricks to make development more enjoyable</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 text-center\">\r\n      <h3>Mentoring</h3>\r\n      <p>Receive one on one assistance via Slack and Appear</p>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    .error{\n      color:red;\n    }\n  </style>\n\n<h2 class=\"page-header\">Login</h2>\n\n<form (submit)=\"onLoginSubmit(login)\" [formGroup]=\"login\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n    <div class=\"error\" \n    *ngIf=\"login.get('username').hasError('required') && login.get('username').touched\">\n    Username is required\n  </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n    <div class=\"error\" \n    *ngIf=\"login.get('password').hasError('required') && login.get('password').touched\">\n    Password is required\n  </div>\n  </div>\n<input type=\"submit\" [disabled]=\"login.invalid\" class=\"btn btn-info\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
    };
    LoginComponent.prototype.onLoginSubmit = function (login) {
        var _this = this;
        if (login.invalid) {
            return false;
        }
        this.authService.authenticateUser(login.value).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
            else {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('Welcome ' + data.user.username + '!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n  /* Fix some weird double styling getting applied to some navbar buttons, will fix later. */\r\n  .navbar-nav .nav-item+.nav-item{\r\n   margin-left: 0rem; \r\n  }\r\n\r\n</style>\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">The Dev Dojo</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto navbar-left\">\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" style=\"padding-right:10px;\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\" >            \r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button id=\"btnGroupDrop4\" type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Admin</button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop4\">                  \r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/posts/unpublished']\">Unpublished Posts</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/posts']\">Posts</a>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" >\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout ({{usersName}})</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInName.subscribe(function (name) { return _this.updateUserName(name); });
    };
    NavbarComponent.prototype.updateUserName = function (name) {
        this.usersName = name;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.usersName = "";
        this.flashMessagesService.show('You have been logged out.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .tags-wrapper {\n   display: flex;\n   flex-wrap: wrap;\n}\n.card{\n  margin-bottom:10px;\n}\nh2,span, h2 > a, span > a{\n  color:#343a40;\n}\n</style>\n\n<div class=\"container\">    \n    <h2>Posts with a tag of \"{{searchedTag}}\"</h2>\n    <a class=\"btn btn-info\" [routerLink]=\"['/posts/create']\" style=\"margin-bottom:5px;\">Create</a>      \n    <div class=\"card col-md-12\" *ngFor=\"let post of postList;\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\" style=\"font-weight:bold;\"><a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a></h2>  \n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>      \n      </div>\n      <div class=\"tags-wrapper\">\n        <div class=\"tag-holder\" *ngFor=\"let tag of post.tags\">          \n          <span style=\"padding-left:10px;\"><a [routerLink]=\"['/posts/tag', tag]\">#{{tag}}</a></span>          \n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListByTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListByTagComponent = (function () {
    function PostListByTagComponent(postService, activatedRoute) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
    }
    PostListByTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var paramTag = params['tag'];
            _this.postService.getPostsLikeTag(paramTag).subscribe(function (data) {
                _this.postList = data.posts;
                _this.searchedTag = paramTag;
                return data;
            }, function (error) {
                console.log(error);
                return false;
            });
        });
    };
    PostListByTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-list-by-tag',
            template: __webpack_require__("../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post-list-by-tag/post-list-by-tag.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PostListByTagComponent);
    return PostListByTagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .tags-wrapper {\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n  }\r\n  .card{\r\n    margin-bottom:10px;\r\n  }\r\n  h2,span, h2 > a, span > a{\r\n  color:#343a40;\r\n}\r\n  </style>\r\n  \r\n  <div class=\"container\">    \r\n    <a class=\"btn btn-info\" [routerLink]=\"['create']\" style=\"margin-bottom:5px;\">Create</a>      \r\n    <div class=\"card col-md-12\" *ngFor=\"let post of postList;\">\r\n      <div class=\"card-body\">\r\n        <h2 class=\"card-title\" style=\"font-weight:bold;\"><a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a></h2>  \r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>      \r\n      </div>\r\n      <div class=\"tags-wrapper\">\r\n        <div class=\"tag-holder\" *ngFor=\"let tag of post.tags\">          \r\n          <span style=\"padding-left:10px;\"><a [routerLink]=\"['/posts/tag', tag]\">#{{tag}}</a></span>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListComponent = (function () {
    function PostListComponent(postService) {
        this.postService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPublishedPosts().subscribe(function (data) {
            _this.postList = data;
            return data;
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__("../../../../../src/app/components/post-list/post-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .error{\r\n      color:red;\r\n    }\r\n  </style>\r\n<h2 class=\"page-header\">Create Post</h2>\r\n\r\n<form (submit)=\"onCreatePostSubmit(post)\"[formGroup]=\"post\" >\r\n  <div class=\"form-group\">\r\n    <label>Title</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n    <div class=\"error\" \r\n    *ngIf=\"post.get('title').hasError('required') && post.get('title').touched\">\r\n    Title is required\r\n  </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Author's Username</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"authorUsername\">\r\n    <div class=\"error\" \r\n    *ngIf=\"post.get('authorUsername').hasError('required') && post.get('authorUsername').touched\">\r\n    Author's Username is required\r\n  </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Tags (comma separated for now)</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"tags\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>Body</label>\r\n      <textarea cols=\"100\" rows=\"10\" class=\"form-control\"  formControlName=\"body\"></textarea>\r\n      <div class=\"error\" \r\n      *ngIf=\"post.get('body').hasError('required') && post.get('body').touched\">\r\n      Body is required\r\n    </div>\r\n    </div>\r\n<input type=\"submit\" [disabled]=\"post.invalid\" class=\"btn btn-info\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(postService, validateService, flashMessagesService, router) {
        this.postService = postService;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.post = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required),
            body: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required),
            authorUsername: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required),
            createDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](new Date()),
            updateDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](new Date()),
            tags: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('')
        });
    };
    PostComponent.prototype.onCreatePostSubmit = function (post) {
        var _this = this;
        if (post.invalid) {
            return false;
        }
        //Validate author username
        this.postService.validatePostAuthorUsername(post.value.authorUsername).subscribe(function (data) {
            if (!data.isFound) {
                _this.flashMessagesService.show('Please enter a valid author username.', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                //Create Post
                _this.postService.createPost(post.value).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Your post has been created!', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/posts']);
                    }
                    else {
                        _this.flashMessagesService.show('Unable to create your post, please try again later.', { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/posts/create']);
                    }
                });
            }
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Is Admin: {{user.isAdmin}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .error{\n    color:red;\n  }\n</style>\n\n<h2 class=\"page-header\">Register</h2>\n\n<form (ngSubmit)=\"onRegisterSubmit(user)\" [formGroup]=\"user\" >\n  <div class=\"form-group\">\n    <label>Name</label>    \n    <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n    <div class=\"error\" \n      *ngIf=\"user.get('name').hasError('required') && user.get('name').touched\">\n      Name is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n    <div class=\"error\" \n    *ngIf=\"user.get('username').hasError('required') && user.get('username').touched\">\n    Username is required\n  </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n    <div class=\"error\" \n    *ngIf=\"user.get('email').hasError('required') && user.get('email').touched\">\n    Email is required\n  </div>\n  <div class=\"error\" \n  *ngIf=\"user.get('email').hasError('pattern') && user.get('email').touched\">\n  Email is not a valid email format\n</div>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n    <div class=\"error\"\n    *ngIf=\"user.get('password').hasError('required') && user.get('password').touched\">\n    Password is required\n  </div>\n  </div>\n<input type=\"submit\" [disabled]=\"user.invalid\" class=\"btn btn-info\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(this.emailRegex)]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function (user) {
        var _this = this;
        if (user.invalid) {
            return false;
        }
        this.authService.registerUser(user.value).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('User has been registered and can log in.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Unable to register user, please try again later.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h3>Version</h3>\r\n      <p>{{softwareVersion}}</p>\r\n    </div>    \r\n    <div class=\"col-md-4\">\r\n      <h3>Environment</h3>\r\n      <p>Name: {{environmentName}}</p>\r\n      <p>API Url: {{apiUrl}}</p>\r\n      <p>Port: {{portNumber}}</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>Contact</h3>\r\n      <p>Contact Info Here</p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent() {
        this.softwareVersion = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].softwareVersion;
        this.environmentName = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].name;
        this.portNumber = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].port;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .tags-wrapper {\n   display: flex;\n   flex-wrap: wrap;\n}\n.card{\n  margin-bottom:10px;\n}\nh2,span, h2 > a, span > a{\ncolor:#343a40;\n}\n</style>\n\n<div class=\"container\">    \n    <h2>Unpublished Posts</h2>\n  <div class=\"card col-md-12\" *ngFor=\"let post of postList;\">\n    <div class=\"card-body\">\n      <h2 class=\"card-title\" style=\"font-weight:bold;\"><a [routerLink]=\"['/posts',post._id]\">{{post.title}}</a></h2>  \n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>      \n    </div>\n    <div class=\"tags-wrapper\">\n      <div class=\"tag-holder\" *ngFor=\"let tag of post.tags\">          \n        <span style=\"padding-left:10px;\"><a [routerLink]=\"['/posts/tag', tag]\">#{{tag}}</a></span>          \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnpublishedPostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnpublishedPostListComponent = (function () {
    function UnpublishedPostListComponent(postService) {
        this.postService = postService;
    }
    UnpublishedPostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getUnpublishedPosts().subscribe(function (data) {
            _this.postList = data;
            return data;
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    UnpublishedPostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unpublished-post-list',
            template: __webpack_require__("../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/unpublished-post-list/unpublished-post-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], UnpublishedPostListComponent);
    return UnpublishedPostListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">View Post</h2>\n<form>\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" name=\"title\" [disabled]=\"!fieldsEditable\">\n  </div>\n  <div class=\"form-group\">\n    <label>Body</label>\n    <textarea cols=\"30\" rows=\"10\" class=\"form-control\"  [(ngModel)]=\"body\" name=\"body\" [disabled]=\"!fieldsEditable\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Author</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"author\" name=\"author\" [disabled]=\"!fieldsEditable\">\n  </div>\n  <div class=\"form-group\">\n    <label>Author Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"authorUsername\" name=\"authorUsername\" [disabled]=\"true\">\n  </div>\n  <div class=\"form-group\">\n    <label>Tags (comma separated for now)</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tagsString\" name=\"tagsString\" [disabled]=\"!fieldsEditable\">\n  </div>\n  <div class=\"form-group\">\n    <label>Is Published</label>\n    <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"isPublished\" name=\"isPublished\" [disabled]=\"!userIsAdmin\">\n\n  </div>\n\n<button class=\"btn btn-default\" style=\"margin-bottom:5px;\" *ngIf=\"userMatches || userIsAdmin\" (click)=\"toggleEdit()\" >Edit</button>      \n<button class=\"btn btn-info\" style=\"margin-bottom:5px;\"*ngIf=\"fieldsEditable\" (click)=\"onEditPostSubmit()\">Save</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPostComponent = (function () {
    function ViewPostComponent(postService, activatedRoute, validateService, flashMessagesService, router) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!JSON.parse(localStorage.getItem('user'))) {
            this.userMatches = false;
            this.loggedInUsername = '';
            this.userIsAdmin = false;
        }
        else {
            var currentUser = JSON.parse(localStorage.getItem('user'));
            console.log(currentUser);
            this.loggedInUsername = currentUser.username;
            this.userIsAdmin = currentUser.isAdmin;
        }
        console.log(this.userIsAdmin);
        this.activatedRoute.params.subscribe(function (params) {
            var paramId = params['id'];
            _this.postService.getById(paramId).subscribe(function (data) {
                _this.id = data._id;
                _this.post = data;
                _this.title = data.title;
                _this.createDate = data.createDate;
                _this.body = data.body;
                _this.author = data.author;
                _this.authorUsername = data.authorUsername;
                _this.tagsString = data.tags.join(',');
                _this.fieldsEditable = false;
                _this.isPublished = data.isPublished || false;
                if (_this.loggedInUsername === data.authorUsername) {
                    _this.userMatches = true;
                }
                else {
                    _this.userMatches = false;
                }
                _this.id = paramId;
                return data;
            }, function (error) {
                console.log(error);
                return false;
            });
        });
    };
    ViewPostComponent.prototype.toggleEdit = function () {
        this.fieldsEditable = !this.fieldsEditable;
    };
    ViewPostComponent.prototype.onEditPostSubmit = function () {
        var _this = this;
        var tagsArray = [];
        if (this.tagsString) {
            tagsArray = this.tagsString.split(',');
        }
        var post = {
            id: this.id,
            title: this.title,
            body: this.body,
            author: this.author,
            authorUsername: this.authorUsername,
            createDate: this.createDate,
            tags: tagsArray,
            isPublished: this.isPublished
        };
        //Check required fields
        if (!this.validateService.validateCreatePost(post)) {
            this.flashMessagesService.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate author username
        this.postService.validatePostAuthorUsername(post.authorUsername).subscribe(function (data) {
            if (!data.isFound) {
                _this.flashMessagesService.show('Please enter a valid author username.', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                _this.postService.updatePost(post).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Your post has been updated!', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/posts', _this.id]);
                    }
                    else {
                        _this.flashMessagesService.show('Unable to update your post, please try again later.', { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/posts', _this.id]);
                    }
                });
            }
        });
    };
    ViewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-post',
            template: __webpack_require__("../../../../../src/app/components/view-post/view-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-post/view-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewPostComponent);
    return ViewPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.getLoggedInName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'Application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        //Angular JWT looks for 'id_token' within localStorage by default
        localStorage.setItem('id_token', token);
        //Stringify because localStorage can only store strings, not objects
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token')) {
            var userName = JSON.parse(localStorage.getItem('user')).name || '';
            this.getLoggedInName.emit(userName);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isAdmin = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            return false;
        }
        else {
            if (user.isAdmin) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AuthService.prototype.getUsersName = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            return "";
        }
        else {
            if (user.name) {
                return user.name;
            }
            else {
                return "";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AuthService.prototype, "getLoggedInName", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPublishedPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getUnpublishedPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/unpublished', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsLikeTag = function (tag) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/tag/' + tag, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.createPost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/create', post, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.updatePost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'posts/update', post, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.validatePostAuthorUsername = function (authorUsername) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'users/checkPostAuthor?authorUsername=' + authorUsername, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (user) {
        if ((user.username == undefined || user.username === '') ||
            (user.password == undefined || user.password === '')) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCreatePost = function (post) {
        if ((!post.title) ||
            (!post.body) ||
            (!post.authorUsername)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    name: 'prod',
    port: 8080,
    apiUrl: '',
    softwareVersion: '1.0',
    databaseUrl: 'mongodb://user:test@ds161426.mlab.com:61426/meanauth',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map