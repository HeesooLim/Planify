"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _user_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/email-verification/email-verification.component */ 7559);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/register/register.component */ 2859);
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ 4270);
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user/user.component */ 2121);
/* harmony import */ var _calendar_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/edit-plan/edit-plan.component */ 8903);
/* harmony import */ var _calendar_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/add-plan/add-plan.component */ 6491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/calendar.component */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'calendar',
        children: [
            { path: 'date/:year/:month', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__.CalendarComponent },
            { path: 'addPlan/:year/:month/:date', component: _calendar_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_6__.AddPlanComponent },
            { path: 'editPlan/:planId', component: _calendar_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_5__.EditPlanComponent }
        ]
    },
    { path: 'user/:userId', component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'verify/:email', component: _user_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_0__.EmailVerificationComponent },
    { path: 'verify/:email/:uuid', component: _user_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_0__.EmailVerificationComponent },
    { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/header/header.component */ 3556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/footer/footer.component */ 1229);




class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "main-container"], ["id", "footer-component"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["#footer-component[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3Rlci1jb21wb25lbnQge1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _services_auth_auth_intercepter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth-intercepter.service */ 901);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 398);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/Utils */ 8880);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.component */ 6304);
/* harmony import */ var _calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/monthly-calendar/monthly-calendar.component */ 2550);
/* harmony import */ var _services_ng_var_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/ng-var.directive */ 8474);
/* harmony import */ var _calendar_detail_box_detail_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/detail-box/detail-box.component */ 4559);
/* harmony import */ var _calendar_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar/add-plan/add-plan.component */ 6491);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
/* harmony import */ var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mdb-angular-ui-kit/checkbox */ 7128);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 4452);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! mdb-angular-ui-kit/popover */ 8091);
/* harmony import */ var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mdb-angular-ui-kit/radio */ 9888);
/* harmony import */ var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mdb-angular-ui-kit/range */ 3327);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);
/* harmony import */ var mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mdb-angular-ui-kit/validation */ 7361);
/* harmony import */ var _calendar_add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar/add-sub-plan-modal/add-sub-plan-modal.component */ 974);
/* harmony import */ var _calendar_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar/edit-plan/edit-plan.component */ 8903);
/* harmony import */ var _calendar_edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar/edit-sub-plan-modal/edit-sub-plan-modal.component */ 3282);
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user/user.component */ 2121);
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/login/login.component */ 4270);
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/register/register.component */ 2859);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/error-interceptor */ 7724);
/* harmony import */ var _user_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/email-verification/email-verification.component */ 7559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);















// import {MdbModule} from 'mdb-angular-ui-kit';
// import {MdbModalConfig} from 'mdb-angular-ui-kit/forms';





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
            useClass: _services_auth_auth_intercepter_service__WEBPACK_IMPORTED_MODULE_0__.AuthIntercepterService,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
            useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__.ErrorInterceptorService,
            multi: true // Provide multiple dependencies for a single token
        },
        _services_Utils__WEBPACK_IMPORTED_MODULE_5__.Utils,
        // MdbModalConfig
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            // MdbModule,
            mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_23__.MdbFormsModule,
            mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_24__.MdbRippleModule,
            mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_25__.MdbCheckboxModule,
            mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_26__.MdbModalModule,
            mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__.MdbRadioModule,
            mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__.MdbRangeModule,
            mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_29__.MdbValidationModule,
            mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__.MdbCollapseModule,
            mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_31__.MdbPopoverModule,
            mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__.MdbTooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__.CalendarComponent,
        _calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_7__.MonthlyCalendarComponent,
        _services_ng_var_directive__WEBPACK_IMPORTED_MODULE_8__.VarDirective,
        _calendar_detail_box_detail_box_component__WEBPACK_IMPORTED_MODULE_9__.DetailBoxComponent,
        _calendar_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_10__.AddPlanComponent,
        _calendar_add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_11__.AddSubPlanModalComponent,
        _calendar_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_12__.EditPlanComponent,
        _calendar_edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_13__.EditSubPlanModalComponent,
        _user_user_user_component__WEBPACK_IMPORTED_MODULE_14__.UserComponent,
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__.LoginComponent,
        _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__.RegisterComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_17__.ErrorComponent,
        _user_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_19__.EmailVerificationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        // MdbModule,
        mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_23__.MdbFormsModule,
        mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_24__.MdbRippleModule,
        mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_25__.MdbCheckboxModule,
        mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_26__.MdbModalModule,
        mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__.MdbRadioModule,
        mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__.MdbRangeModule,
        mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_29__.MdbValidationModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__.MdbCollapseModule,
        mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_31__.MdbPopoverModule,
        mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__.MdbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6491:
/*!*********************************************************!*\
  !*** ./src/app/calendar/add-plan/add-plan.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlanComponent": () => (/* binding */ AddPlanComponent)
/* harmony export */ });
/* harmony import */ var _models_plan_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/plan.model */ 6178);
/* harmony import */ var src_app_models_plan_date_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/plan-date.model */ 7813);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var _add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-sub-plan-modal/add-sub-plan-modal.component */ 974);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-sub-plan-modal/edit-sub-plan-modal.component */ 3282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _services_plan_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/plan/plan.service */ 1350);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);


















function AddPlanComponent_div_40_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sp_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", sp_r7.description, " ");
} }
const _c0 = function () { return ["text-success", "text-warning", "text-danger"]; };
const _c1 = function () { return ["LOW", "MID", "HIGH"]; };
function AddPlanComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_div_40_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const subIndex_r8 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r11.openEditModal(subIndex_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h6", 39)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_div_40_div_1_Template_i_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const subIndex_r8 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.deleteSubPlan(subIndex_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " PRIORITY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddPlanComponent_div_40_div_1_p_9_Template, 2, 1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", sp_r7.isDone ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sp_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0)[sp_r7.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1)[sp_r7.priority - 1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sp_r7.description != "");
} }
function AddPlanComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddPlanComponent_div_40_div_1_Template, 10, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.selectedPlan.subPlans);
} }
function AddPlanComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " There is no sub-plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AddPlanComponent_div_58_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", plan_r15.description, "");
} }
function AddPlanComponent_div_58_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const sp_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0)[sp_r20.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", sp_r20.isDone ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sp_r20.title);
} }
function AddPlanComponent_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_div_58_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const i_r16 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.navigateToOtherPlan(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 50)(2, "h6", 39)(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " PRIORITY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddPlanComponent_div_58_div_1_p_9_Template, 2, 1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AddPlanComponent_div_58_div_1_div_10_Template, 5, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", i_r16 == ctx_r14.otherPlan.plans.length - 1 ? "" : "mb-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", plan_r15.progress == 100 ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](plan_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0)[plan_r15.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c1)[plan_r15.priority - 1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", plan_r15.description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", plan_r15.subPlans);
} }
function AddPlanComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddPlanComponent_div_58_div_1_Template, 11, 9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.otherPlan.plans);
} }
function AddPlanComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "There is no plan on this day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class AddPlanComponent {
    constructor(route, userService, planService, utils, modalService) {
        this.route = route;
        this.userService = userService;
        this.planService = planService;
        this.utils = utils;
        this.modalService = modalService;
        this.selectedPlan = new _models_plan_model__WEBPACK_IMPORTED_MODULE_0__.Plan(null, null, null, null, null, 0, 0);
    }
    ngOnInit() {
        // Check if the user is logged in
        this.userService.isAuthenticated();
        // Create a FormGroup object (empty FormControls)
        this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null)
        });
        // Get the parameter from the URL
        const routeParams = this.route.snapshot.paramMap;
        // Get the date from the parameter
        const yearString = parseInt(routeParams.get('year'));
        const monthString = parseInt(routeParams.get('month'));
        const dateString = parseInt(routeParams.get('date'));
        // Split the date by '-' and create a new Date with it
        // let dates = dateString.split('-');
        this.selectedDate = new Date(yearString, monthString - 1, dateString);
        // Set the selected date string
        this.selectedDateString = this.utils.getDateString(this.selectedDate, false);
        // If there is no chosend date for another day, assign the selected date initially
        if (this.otherPlanDate == null) {
            this.otherPlanDate = this.selectedDate;
        }
        // Create the PlanDate object using the variable otherPlanDate value
        this.otherPlan = new src_app_models_plan_date_model__WEBPACK_IMPORTED_MODULE_1__.PlanDate(this.otherPlanDate.getFullYear(), this.otherPlanDate.getMonth(), this.otherPlanDate.getDate());
        // Get the plan on the day using the value of the otherPlanDate
        this.planService.getDataByDate(this.otherPlanDate).subscribe(res => {
            this.otherPlan = this.utils.getPlanDate(res.body, this.otherPlanDate);
        });
        // Set the string of the date
        this.otherDateString = this.utils.getDateString(this.otherPlanDate, false);
    }
    get dueDate() {
        return this.validationForm.get('dueDate');
    }
    get priority() {
        return this.validationForm.get('priority');
    }
    get title() {
        return this.validationForm.get('title');
    }
    get description() {
        return this.validationForm.get('description');
    }
    /**
     * Change the chosen date for the preview of other day's plans section.
     *
     * @param {boolean} isNextDay If the value is true, add a day to current date of other plan date.
     * @memberof AddPlanComponent
     */
    changeDate(isNextDay) {
        if (isNextDay) { // If the isNextDay value is true, add a day to the otherPlanDate's date
            this.otherPlanDate.setDate(this.otherPlanDate.getDate() + 1);
        }
        else { // Otherwise, subtract a day from it
            this.otherPlanDate.setDate(this.otherPlanDate.getDate() - 1);
        }
        this.ngOnInit();
    }
    /**
     * Insert the Add Plan form value into the database.
     *
     * @param {FormGroup} form Form value to insert.
     * @memberof AddPlanComponent
     */
    submitAddPlan(form) {
        // Get the data and set the value
        let data = form.value;
        // Validate inputs and return if any data is invalid
        if (!this.validateInputs(data))
            return;
        this.selectedPlan.title = data.title;
        this.selectedPlan.description = data.description;
        this.selectedPlan.dueDate = data.dueDate;
        this.selectedPlan.priority = data.priority;
        console.log('selectedPlan: ' + this.selectedPlan);
        // Create a Plan object using JSON
        let newPlan = JSON.parse(JSON.stringify(this.selectedPlan));
        // Add the plan using the Plan service
        this.planService.addPlan(newPlan).subscribe(data => {
            this.ngOnInit();
            // Reset the subplan list after inserting data
            this.selectedPlan.subPlans = [];
            // Reset the form
            form.reset();
        });
    }
    /**
     * Open the add subplan modal and subscribe the Observable to get the data
     * after the Add Subplan form is submitted or the modal is closed.
     *
     * @memberof AddPlanComponent
     */
    openModal() {
        // Open the Add subplan modal
        this.addModalRef = this.modalService.open(_add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_3__.AddSubPlanModalComponent, {
            modalClass: 'modal-dialog-centered'
        });
        // When the modal is closed, subscribe to the Observable
        this.addModalRef.onClose.subscribe((data) => {
            if (data) { // If the data exists
                let subPlanFromJson = JSON.parse(JSON.stringify(data));
                subPlanFromJson.modalIsDone = subPlanFromJson.modalIsDone === null ? false : subPlanFromJson.modalIsDone;
                // Create a SubPlan object using the JSON
                let subplan = new _models_plan_model__WEBPACK_IMPORTED_MODULE_0__.SubPlan(subPlanFromJson.modalTitle, subPlanFromJson.modalDescription, subPlanFromJson.modalPriority, subPlanFromJson.modalIsDone);
                // Add the subplan to the array
                this.selectedPlan.subPlans.push(subplan);
            }
        });
    }
    /**
     * Open the edit subplan modal and subscribe the Observable to get the data
     * after the Edit Subplan form is submitted or the modal is closed.
     *
     * @param {*} index Index of the subplan to edit
     * @memberof AddPlanComponent
     */
    openEditModal(index) {
        // Get the subplan by the index
        let subPlan = this.selectedPlan.subPlans[index];
        // Set the subplan using the Utils static method
        src_app_services_Utils__WEBPACK_IMPORTED_MODULE_2__.Utils.setSubPlan(subPlan);
        // Open the modal
        this.editModalRef = this.modalService.open(_edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_4__.EditSubPlanModalComponent, {
            modalClass: 'modal-dialog-centered'
        });
        // When close the modal, get the data on the modal
        this.editModalRef.onClose.subscribe((data) => {
            if (data == 0) { // If the data is 0 (Meaning that the subplan needs to be deleted)
                // Remove the subplan fromt the array
                this.deleteSubPlan(index);
            }
            else if (data) { // If the data exists
                let subPlanFromJson = JSON.parse(JSON.stringify(data));
                // Create a SubPlan object using the JSON
                let subplan = new _models_plan_model__WEBPACK_IMPORTED_MODULE_0__.SubPlan(subPlanFromJson.title, subPlanFromJson.description, subPlanFromJson.priority, subPlanFromJson.isDone);
                // push the subplan to the subplan array
                this.selectedPlan.subPlans[index] = subplan;
            }
        });
    }
    /**
     * Remove the subplan from the array of subplan by its index.
     *
     * @param {number} spIndex Index of the subplan which needs to be removed.
     * @memberof AddPlanComponent
     */
    deleteSubPlan(spIndex) {
        this.selectedPlan.subPlans.splice(spIndex, 1);
    }
    /**
     * Navigate to the selected other date's add plan page when the text is clicked.
     *
     * @memberof AddPlanComponent
     */
    navigateToOtherDate() {
        // Navigate only when currently selected date and other plan date are different
        if (this.selectedDate != this.otherPlanDate)
            window.location.href = `calendar/addPlan/${this.otherPlanDate.getFullYear()}/${this.otherPlanDate.getMonth() + 1}/${this.otherPlanDate.getDate()}`;
    }
    /**
     * Navigate to the selected other date's edit plan page when the text is clicked.
     *
     * @param {number} index Index of the plan to edit.
     *
     * @memberof AddPlanComponent
     */
    navigateToOtherPlan(index) {
        let otherPlanToEdit = this.otherPlan.plans[index];
        // If the IDs of the plans to edit are different, navigate to the chosen plan's edit page
        if (otherPlanToEdit._id !== this.selectedPlan._id) {
            window.location.href = `calendar/editPlan/${otherPlanToEdit._id}`;
        }
    }
    /**
     * Check if the required inputs are filled and display error message for the empty inputs.
     *
     * @param {*} formData Form data to check for the empty input.
     * @return {*}  {boolean} Return true if all required inputs are valid.
     * @memberof AddPlanComponent
     */
    validateInputs(formData) {
        // Get input elements
        let titleInput = document.querySelector('#inputTitle');
        let dueDateInput = document.querySelector('#dueDate');
        // Get error message elements
        let titleError = document.querySelector('.title.error-msg');
        let dueDateError = document.querySelector('.dueDate.error-msg');
        let priorityError = document.querySelector('.priority.error-msg');
        // If data's property is null or empty, store false
        let isTitleValid = formData.title != null && formData.title !== '';
        let isDueDateValid = formData.dueDate != null && formData.dueDate !== '';
        let isPriorityValid = formData.priority != null && formData.priority !== '';
        // Check whether the input is valid and add or remove the class 'invalid'
        this.utils.changeInputStatus(titleInput, titleError, isTitleValid);
        this.utils.changeInputStatus(dueDateInput, dueDateError, isDueDateValid);
        this.utils.changeInputStatus(null, priorityError, isPriorityValid);
        // If any of input is invalid, return false
        if (!isTitleValid || !isDueDateValid || !isPriorityValid)
            return false;
        // Otherwise, return true
        return true;
    }
}
AddPlanComponent.ɵfac = function AddPlanComponent_Factory(t) { return new (t || AddPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_plan_plan_service__WEBPACK_IMPORTED_MODULE_6__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_2__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_10__.MdbModalService)); };
AddPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AddPlanComponent, selectors: [["app-add-plan"]], decls: 61, vars: 7, consts: [["id", "add-plan-container", 1, "w-100", "h-100"], ["id", "add-plan-card", 1, "shadow-5-strong", "overflow-hidden", "d-flex"], ["id", "card-form", 1, "px-lg-5", "px-4", "pb-5", "pt-4", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [1, "d-lg-flex", "flex-row-reverse"], [1, "ms-lg-3"], [1, "mb-1", "fw-normal"], [1, "d-flex", "position-relative", "ms-1"], [1, "radio-container", "fw-light", "me-3"], ["type", "radio", "id", "radioHigh", "value", "3", "formControlName", "priority", "required", "", 1, "mt-1", "priority"], [1, "radio-checkmark"], ["type", "radio", "id", "radioMid", "value", "2", "formControlName", "priority", "required", "", 1, "mt-1", "priority"], [1, "radio-container", "fw-light"], ["type", "radio", "id", "radioLow", "value", "1", "formControlName", "priority", "required", "", 1, "mt-1", "priority"], [1, "priority", "error-msg", "mt-1"], [1, "mt-2", "mt-lg-0"], [1, "fw-normal", "mb-1"], ["mdbInput", "", "type", "datetime-local", "id", "dueDate", "formControlName", "dueDate", "required", "", 1, "my-0", "dueDate", "light-calendar-icon"], [1, "dueDate", "error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "inputTitle", "formControlName", "title", "placeholder", "Plan title", "required", "", 1, "title", "mt-2"], [1, "title", "error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "inputDesc", "rows", "4", "formControlName", "description", "placeholder", "Description", 1, "mt-2"], [1, "mb-1", "mt-3", "fw-normal"], [4, "ngIf", "ngIfElse"], ["emptySubplan", ""], [1, "pt-5", "d-lg-flex"], ["type", "submit", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2", "me-3", "btn-save"], ["type", "button", "id", "btn-sub-plan", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2", "me-3", 3, "click"], ["id", "btn-cancel", "href", "/calendar", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2"], [1, "w-100", "p-4", "other-plan-container"], [1, "d-block", "text-center", "small", "fw-light", "mb-1"], [1, "mb-4", "text-center", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-chevron-left", 3, "click"], ["mdbTooltip", "Add plan on this day", "placement", "top", 1, "shadow-sm", "p-1", "rounded", "cursor-pointer", 3, "click"], [1, "fas", "fa-chevron-right", 3, "click"], ["id", "other-plan-item-container", 4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "sub-plan-item shadow-3 p-3 rounded mb-2 fw-light text-break", 3, "click", 4, "ngFor", "ngForOf"], [1, "sub-plan-item", "shadow-3", "p-3", "rounded", "mb-2", "fw-light", "text-break", 3, "click"], [1, "d-flex", "align-items-center", "mb-1", "fw-light", "text-light"], [3, "ngClass"], [1, "fas", "fa-times", "fa-xs", "ms-auto", 3, "click"], [1, "priority-text", "fw-light", "mb-0", "text-light"], [1, "fw-normal", 3, "ngClass"], ["class", "mb-0 fw-light small text-purple-muted", 4, "ngIf"], [1, "mb-0", "fw-light", "small", "text-purple-muted"], [1, "rounded", "d-flex", "justify-content-center", "py-5", "empty-subplan-container", "fw-light", "small"], ["id", "other-plan-item-container"], ["class", "rounded shadow overflow-hidden mb-3 cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "rounded", "shadow", "overflow-hidden", "mb-3", "cursor-pointer", 3, "ngClass", "click"], [1, "p-3", "other-plan-item"], ["class", "p-3 other-sub-plan-item", 4, "ngFor", "ngForOf"], [1, "p-3", "other-sub-plan-item"], [1, "mb-0"], [1, "fas", "fa-exclamation", "me-2", 3, "ngClass"], [1, "mb-0", "py-5", "fw-light", "text-center"]], template: function AddPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AddPlanComponent_Template_form_ngSubmit_2_listener() { return ctx.submitAddPlan(ctx.validationForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "High ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 11)(17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Low ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 13)(21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Priority is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div")(28, "mdb-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Due date is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mdb-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Title is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mdb-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Sub-plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, AddPlanComponent_div_40_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, AddPlanComponent_ng_template_41_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 25)(44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_Template_button_click_46_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Add sub-plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 29)(51, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Other plans on");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "h4", 31)(54, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_Template_i_click_54_listener() { return ctx.changeDate(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_Template_span_click_55_listener() { return ctx.navigateToOtherDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPlanComponent_Template_i_click_57_listener() { return ctx.changeDate(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, AddPlanComponent_div_58_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AddPlanComponent_ng_template_59_Template, 2, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.validationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.selectedDateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedPlan.subPlans.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.otherDateString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.otherPlan.planCount > 0)("ngIfElse", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_11__.MdbFormControlComponent, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_11__.MdbInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_13__.MdbRippleDirective, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_14__.MdbTooltipDirective], styles: ["#add-plan-container[_ngcontent-%COMP%] {\n  padding: 100px 85px;\n  min-height: 100vh;\n  background-image: url(/assets/img/dots_texture.jpg);\n  background-size: cover;\n  color: var(--purple-lightest);\n  background-attachment: fixed;\n  width: 100%;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n#card-form[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--purple-light);\n}\n\n#add-plan-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n}\n\n#btn-sub-plan[_ngcontent-%COMP%] {\n  background-color: #473878;\n}\n\n#btn-cancel[_ngcontent-%COMP%] {\n  background-color: #3e3168;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  border-radius: 50%;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: rgba(161, 156, 156, 0.2);\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  transition: 0.2s;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 6px rgba(131, 114, 168, 0.3);\n  transition: 0.2s;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:after {\n  top: 3px;\n  left: 3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--purple-lightest);\n}\n\n\n\n.empty-subplan-container[_ngcontent-%COMP%], .sub-plan-item[_ngcontent-%COMP%], .other-plan-container[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n\n#other-plan-item-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 460px;\n}\n\n.other-plan-item[_ngcontent-%COMP%] {\n  background-color: #3c3164;\n}\n\n.other-sub-plan-item[_ngcontent-%COMP%] {\n  background-color: #312656;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n  font-weight: 200;\n}\n\n\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--purple-darkest);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--purple-gray);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--purple-light);\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 40px;\n  }\n  #card-form[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #card-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 10px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .other-plan-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 0;\n  }\n\n  #add-plan-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUxBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixVQUFVLEVBQUUsWUFBWTtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtBQUNuQjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBQ0EsNEJBQTRCOztBQUU1Qjs7O0VBR0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDOztBQUMzQyxVQUFVOztBQUNWO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0EseUNBQXlDOztBQUV6QztFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiYWRkLXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtcGxhbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweCA4NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2RvdHNfdGV4dHVyZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjYXJkLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jYWRkLXBsYW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuI2J0bi1zdWItcGxhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzM4Nzg7XG59XG5cbiNidG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMzE2ODtcbn1cblxuLyogUkFESU8gQlVUVE9OIFNUWUxFIFNUQVJUUyAqL1xuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4ucmFkaW8tY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTU2LCAxNTYsIDAuMik7XG59XG5cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgcHVycGxlIGJhY2tncm91bmQgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGZvY3VzZWQsIGFkZCBhIHB1cnBsZSBzaGFkb3cgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiAucmFkaW8tY2hlY2ttYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMTMxLCAxMTQsIDE2OCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLnJhZGlvLWNvbnRhaW5lciAucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xufVxuLyogUkFESU8gQlVUVE9OIFNUWUxFIEVORFMgKi9cblxuLmVtcHR5LXN1YnBsYW4tY29udGFpbmVyLFxuLnN1Yi1wbGFuLWl0ZW0sXG4ub3RoZXItcGxhbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFya2VzdCk7XG59XG5cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLm90aGVyLXBsYW4taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzMxNjQ7XG59XG5cbi5vdGhlci1zdWItcGxhbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjY1Njtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBTVEFSVC0tLS0tLS0tICovXG4vKiB3aWR0aCAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG4jb3RoZXItcGxhbi1pdGVtLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBFTkQtLS0tLS0tLSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgI2FkZC1wbGFuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggNDBweDtcbiAgfVxuICAjY2FyZC1mb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNjYXJkLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDEwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5vdGhlci1wbGFuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cblxuICAjYWRkLXBsYW4tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 974:
/*!*****************************************************************************!*\
  !*** ./src/app/calendar/add-sub-plan-modal/add-sub-plan-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubPlanModalComponent": () => (/* binding */ AddSubPlanModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);








class AddSubPlanModalComponent {
    constructor(modalRef, utils) {
        this.modalRef = modalRef;
        this.utils = utils;
    }
    ngOnInit() {
        this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            modalPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
            modalTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
            modalDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null),
            modalIsDone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null)
        });
    }
    get modalPriority() {
        return this.validationForm.get('modalPriority');
    }
    get modalTitle() {
        return this.validationForm.get('modalTitle');
    }
    get modalDescription() {
        return this.validationForm.get('modalDescription');
    }
    get modalIsDone() {
        return this.validationForm.get('modalIsDone');
    }
    /**
     * Check if the required inputs are filled and display error message for the empty inputs.
     *
     * @param {*} formData Form data to check for the empty input.
     * @return {*}  {boolean} Return true if all required inputs are valid.
     * @memberof AddPlanComponent
     */
    validateInputs(formData) {
        // Get input elements
        let titleInput = document.querySelector('#modal-inputTitle');
        // Get error message elements
        let titleError = document.querySelector('.title.modal-error-msg');
        let priorityError = document.querySelector('.priority.modal-error-msg');
        // If data's property is null or empty, store false
        let isTitleValid = formData.modalTitle != null && formData.modalTitle !== '';
        let isPriorityValid = formData.modalPriority != null && formData.modalPriority !== '' && !isNaN(formData.modalPriority);
        // Check whether the input is valid and add or remove the class 'invalid'
        this.utils.changeInputStatus(titleInput, titleError, isTitleValid);
        this.utils.changeInputStatus(null, priorityError, isPriorityValid);
        // If any of input is invalid, return false
        if (!isTitleValid || !isPriorityValid)
            return false;
        // Otherwise, return true
        return true;
    }
    /**
     * A method executed when the add subplan button is clicked.
     * It passes the value calling the close method.
     *
     * @param {*} data Data of the Add Subplan form to submit.
     * @memberof AddSubPlanModalComponent
     */
    submitAddSubPlan(data) {
        // Store priority as an integer
        data.value.priority = parseInt(data.value.titlePriority);
        // If the form is valid, call the close function passing the data
        if (this.validateInputs(data.value)) {
            this.close(data.value);
        }
    }
    /**
     * Close the Add Subplan modal.
     *
     * @param {*} data Data to return when closing
     * @memberof AddSubPlanModalComponent
     */
    close(data) {
        if (data) { // If the data exists
            this.modalRef.close(data);
        }
    }
}
AddSubPlanModalComponent.ɵfac = function AddSubPlanModalComponent_Factory(t) { return new (t || AddSubPlanModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_3__.MdbModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils)); };
AddSubPlanModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddSubPlanModalComponent, selectors: [["app-add-sub-plan-modal"]], decls: 37, vars: 1, consts: [[1, "modal-header", "justify-content-center", "pt-0", "px-0"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "sub-plan-form", 1, "modal-body", "px-0", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "mb-1", "fw-normal", "text-purple-muted"], [1, "d-flex", "position-relative", "ms-1"], [1, "radio-container", "fw-light", "me-3"], ["type", "radio", "id", "modal-radioHigh", "value", "3", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority"], [1, "radio-checkmark"], ["type", "radio", "id", "modal-radioMid", "value", "2", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority"], [1, "radio-container", "fw-light"], ["type", "radio", "id", "modal-radioLow", "value", "1", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority"], [1, "ms-auto"], ["mdbTooltip", "Mark as done", "placement", "top", 1, "checkbox-container"], ["type", "checkbox", "value", "true", "formControlName", "modalIsDone"], [1, "checkbox-checkmark"], [1, "priority", "modal-error-msg", "mt-1"], [1, "mb-2"], ["mdbInput", "", "type", "text", "id", "modal-inputTitle", "formControlName", "modalTitle", "placeholder", "Plan title", "required", "", 1, "title"], [1, "title", "modal-error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "modal-inputDesc", "rows", "4", "formControlName", "modalDescription", "placeholder", "Description", 1, ""], [1, "modal-footer", "pb-0", "px-0"], ["mdbRipple", "", "type", "submit", "form", "sub-plan-form", 1, "btn", "text-light", "btn-save"], ["mdbRipple", "", "type", "button", 1, "btn", "text-light", "btn-save", 3, "click"]], template: function AddSubPlanModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "New Sub-plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddSubPlanModalComponent_Template_form_ngSubmit_3_listener() { return ctx.submitAddSubPlan(ctx.validationForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "High ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Low ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11)(19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14)(23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Priority is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mdb-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Title is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mdb-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21)(33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSubPlanModalComponent_Template_button_click_35_listener() { return ctx.modalRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validationForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_4__.MdbTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__.MdbFormControlComponent, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__.MdbInputDirective, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__.MdbRippleDirective], styles: ["#add-plan-container[_ngcontent-%COMP%] {\n  padding: 100px 85px;\n  min-height: 100vh;\n  background-image: url(/assets/img/dots_texture.jpg);\n  background-size: cover;\n  color: var(--purple-lightest);\n  background-attachment: fixed;\n  width: 100%;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n#card-form[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--purple-light);\n}\n\n#add-plan-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n}\n\n#btn-sub-plan[_ngcontent-%COMP%] {\n  background-color: #473878;\n}\n\n#btn-cancel[_ngcontent-%COMP%] {\n  background-color: #3e3168;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  border-radius: 50%;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: rgba(161, 156, 156, 0.2);\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  transition: 0.2s;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 6px rgba(131, 114, 168, 0.3);\n  transition: 0.2s;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:after {\n  top: 3px;\n  left: 3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--purple-lightest);\n}\n\n\n\n.empty-subplan-container[_ngcontent-%COMP%], .sub-plan-item[_ngcontent-%COMP%], .other-plan-container[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n\n#other-plan-item-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 460px;\n}\n\n.other-plan-item[_ngcontent-%COMP%] {\n  background-color: #3c3164;\n}\n\n.other-sub-plan-item[_ngcontent-%COMP%] {\n  background-color: #312656;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n  font-weight: 200;\n}\n\n\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--purple-darkest);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--purple-gray);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--purple-light);\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 40px;\n  }\n  #card-form[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #card-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 10px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .other-plan-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 0;\n  }\n\n  #add-plan-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUxBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixVQUFVLEVBQUUsWUFBWTtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtBQUNuQjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBQ0EsNEJBQTRCOztBQUU1Qjs7O0VBR0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDOztBQUMzQyxVQUFVOztBQUNWO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0EseUNBQXlDOztBQUV6QztFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiYWRkLXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtcGxhbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweCA4NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2RvdHNfdGV4dHVyZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjYXJkLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jYWRkLXBsYW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuI2J0bi1zdWItcGxhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzM4Nzg7XG59XG5cbiNidG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMzE2ODtcbn1cblxuLyogUkFESU8gQlVUVE9OIFNUWUxFIFNUQVJUUyAqL1xuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4ucmFkaW8tY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTU2LCAxNTYsIDAuMik7XG59XG5cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgcHVycGxlIGJhY2tncm91bmQgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGZvY3VzZWQsIGFkZCBhIHB1cnBsZSBzaGFkb3cgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiAucmFkaW8tY2hlY2ttYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMTMxLCAxMTQsIDE2OCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLnJhZGlvLWNvbnRhaW5lciAucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xufVxuLyogUkFESU8gQlVUVE9OIFNUWUxFIEVORFMgKi9cblxuLmVtcHR5LXN1YnBsYW4tY29udGFpbmVyLFxuLnN1Yi1wbGFuLWl0ZW0sXG4ub3RoZXItcGxhbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFya2VzdCk7XG59XG5cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLm90aGVyLXBsYW4taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzMxNjQ7XG59XG5cbi5vdGhlci1zdWItcGxhbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjY1Njtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBTVEFSVC0tLS0tLS0tICovXG4vKiB3aWR0aCAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG4jb3RoZXItcGxhbi1pdGVtLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBFTkQtLS0tLS0tLSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgI2FkZC1wbGFuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggNDBweDtcbiAgfVxuICAjY2FyZC1mb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNjYXJkLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDEwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5vdGhlci1wbGFuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cblxuICAjYWRkLXBsYW4tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuIl19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3ViLXBsYW4tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6304:
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detail_box_detail_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-box/detail-box.component */ 4559);
/* harmony import */ var _monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monthly-calendar/monthly-calendar.component */ 2550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function CalendarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const month_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", month_r1.isSelected ? "selected-month rounded-pill" : "fw-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", month_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](month_r1.name);
} }
class CalendarComponent {
    constructor(utils, route, router) {
        this.utils = utils;
        this.route = route;
        this.router = router;
        // planDate and dateString to pass to detail-box component
        this.planDate = null;
        this.months = [];
    }
    ngOnInit() {
        // Get the parameter from the URL
        const routeParams = this.route.snapshot.paramMap;
        // Get the date from the parameter
        this.paramYear = parseInt(routeParams.get('year'));
        this.paramMonth = parseInt(routeParams.get('month'));
        let date = new Date(this.paramYear, this.paramMonth - 1, 1);
        // Navigate to the page of the given year and month
        this.router.navigate([`calendar/date/${date.getFullYear()}/${date.getMonth() + 1}`]);
        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // Add month elements to the array only when the array does not have any item (Without checking it, duplicates keeps being added whenever it's initialized)
        if (this.months.length <= 0) {
            for (let i = 0; i < monthNames.length; i++) {
                this.months.push({ name: monthNames[i], link: `/calendar/date/${date.getFullYear()}/${i + 1}`, isSelected: i + 1 === this.paramMonth });
            }
        }
        let changeMonthBtnText = document.querySelector('#change-month-text');
        // If the user clicks the element other than the change month button or the text, hide the month list and display the buttno text
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (target.id !== 'change-date-btn' && target.innerText !== changeMonthBtnText.innerText) {
                let changeMonthButton = document.querySelector('#change-date-btn');
                changeMonthButton.classList.remove('selected');
            }
        });
    }
    /**
     * Update detail-box component when it's clicked, passing PlanDate object.
     *
     * @param {PlanDate} planDate PlanDate object from monthly-calendar component.
     * @memberof CalendarComponent
     */
    getPlanDate(planDate) {
        // Set the planDate value
        this.planDate = planDate;
        // Create a date using the planDate object
        let date = new Date(this.planDate.year, this.planDate.month, this.planDate.date);
        // Set the date string using the utils class' method
        this.dateString = this.utils.getDateString(date, true);
        this.shortDateString = this.utils.getDateString(date, false);
        this.ngOnInit();
    }
    getChangedMonth(date) {
        this.router.navigate([`calendar/date/${date.getFullYear()}/${date.getMonth()}`]);
    }
    toggleChageMonthBtn() {
        let changeMonthButton = document.querySelector('#change-date-btn');
        changeMonthButton.classList.toggle('selected');
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], decls: 10, vars: 6, consts: [["id", "calendar-page-wrapper", 1, "h-100", "w-100", "d-flex"], [1, "", 3, "planDateFromCal", "dateStringFromCal", "shortDateStringFromCal"], ["id", "calendar-wrapper", 1, "d-flex", "justify-content-center"], ["id", "calendar"], [3, "paramYear", "paramMonth", "changeMonthEmitter", "planEmitter"], ["id", "change-date-btn", 1, "position-fixed", "p-2", "rounded-pill", "small", "fw-light", "d-md-block", "d-none", 3, "click"], ["id", "change-month-text", 1, "mx-2"], ["id", "change-month-list", 1, "mb-0", "ps-0", "justify-content-between"], ["class", "d-inline-block w-100 text-center rounded-pill month-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "w-100", "text-center", "rounded-pill", "month-item", 3, "ngClass"], [3, "href"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-detail-box", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "app-monthly-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changeMonthEmitter", function CalendarComponent_Template_app_monthly_calendar_changeMonthEmitter_4_listener($event) { return ctx.getChangedMonth($event); })("planEmitter", function CalendarComponent_Template_app_monthly_calendar_planEmitter_4_listener($event) { return ctx.getPlanDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_Template_div_click_5_listener() { return ctx.toggleChageMonthBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Change Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CalendarComponent_li_9_Template, 3, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("planDateFromCal", ctx.planDate)("dateStringFromCal", ctx.dateString)("shortDateStringFromCal", ctx.shortDateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("paramYear", ctx.paramYear)("paramMonth", ctx.paramMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_detail_box_detail_box_component__WEBPACK_IMPORTED_MODULE_1__.DetailBoxComponent, _monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_2__.MonthlyCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], styles: ["#calendar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 55px 55px 65px 55px;\n  background-image: url(\"/assets/img/dots_texture.jpg\");\n  background-size: cover;\n  color: var(--purple-lightest);\n  background-attachment: fixed;\n  width: 100%;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n#calendar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n}\n\n.month-item[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  transition: 0.5s;\n}\n\n.month-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(73, 59, 117) !important;\n  transition: 0.5s;\n}\n\n#change-date-btn[_ngcontent-%COMP%] {\n  background-color: rgb(15, 7, 42);\n  transition: 0.5s;\n  bottom: 4%;\n  right: 4%;\n  width: auto;\n}\n\n#change-date-btn.selected[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  width: 90%;\n  max-width: 700px;\n}\n\n#change-date-btn.selected[_ngcontent-%COMP%]   #change-month-text[_ngcontent-%COMP%], #change-date-btn[_ngcontent-%COMP%]   #change-month-list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#change-date-btn.selected[_ngcontent-%COMP%]   #change-month-list[_ngcontent-%COMP%], #change-date-btn[_ngcontent-%COMP%]   #change-month-text[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#change-date-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgb(24, 14, 58);\n  transition: 0.5s;\n}\n\n#change-month-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--purple-lightest);\n}\n\n#change-month-list[_ngcontent-%COMP%]   li.selected-month[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n}\n\n@media screen and (max-width: 992px) {\n  #calendar-wrapper[_ngcontent-%COMP%] {\n    padding: 55px 10px 50px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFEQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0YiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYWxlbmRhci13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDU1cHggNTVweCA2NXB4IDU1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2RvdHNfdGV4dHVyZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgei1pbmRleDogMTtcbn1cblxuI2NhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4ubW9udGgtaXRlbSB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5tb250aC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA1OSwgMTE3KSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4jY2hhbmdlLWRhdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA3LCA0Mik7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvdHRvbTogNCU7XG4gIHJpZ2h0OiA0JTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNjaGFuZ2UtZGF0ZS1idG4uc2VsZWN0ZWQge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4jY2hhbmdlLWRhdGUtYnRuLnNlbGVjdGVkICNjaGFuZ2UtbW9udGgtdGV4dCxcbiNjaGFuZ2UtZGF0ZS1idG4gI2NoYW5nZS1tb250aC1saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NoYW5nZS1kYXRlLWJ0bi5zZWxlY3RlZCAjY2hhbmdlLW1vbnRoLWxpc3QsXG4jY2hhbmdlLWRhdGUtYnRuICNjaGFuZ2UtbW9udGgtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjaGFuZ2UtZGF0ZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE0LCA1OCk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbiNjaGFuZ2UtbW9udGgtbGlzdCBhIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodGVzdCk7XG59XG5cbiNjaGFuZ2UtbW9udGgtbGlzdCBsaS5zZWxlY3RlZC1tb250aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI2NhbGVuZGFyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDU1cHggMTBweCA1MHB4IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4559:
/*!*************************************************************!*\
  !*** ./src/app/calendar/detail-box/detail-box.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBoxComponent": () => (/* binding */ DetailBoxComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/plan.model */ 6178);
/* harmony import */ var _add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-sub-plan-modal/add-sub-plan-modal.component */ 974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_plan_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/plan/plan.service */ 1350);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);










function DetailBoxComponent_div_12_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "There is no plan on this day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailBoxComponent_div_12_li_20_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_div_12_li_20_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.expandPlan(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "arrow-", i_r4, "");
} }
function DetailBoxComponent_div_12_li_20_ng_container_19_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 45)(1, "label", 46)(2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoxComponent_div_12_li_20_ng_container_19_li_2_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const subIndex_r13 = restoredCtx.index; const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.updateSubPlan($event, i_r4, subIndex_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_div_12_li_20_ng_container_19_li_2_Template_i_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const subIndex_r13 = restoredCtx.index; const plan_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.deleteSubPlan(plan_r3, subIndex_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sp_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", sp_r12.isDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sp_r12.title);
} }
function DetailBoxComponent_div_12_li_20_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailBoxComponent_div_12_li_20_ng_container_19_li_2_Template, 7, 2, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const i_r4 = ctx_r19.index;
    const plan_r3 = ctx_r19.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "plan-", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", plan_r3.subPlans);
} }
const _c0 = function () { return ["text-success", "text-warning", "text-danger"]; };
const _c1 = function () { return ["LOW", "MID", "HIGH"]; };
const _c2 = function (a0) { return { "width": a0 }; };
function DetailBoxComponent_div_12_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26)(1, "div", 27)(2, "div", 28)(3, "label", 29)(4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoxComponent_div_12_li_20_Template_input_change_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const i_r4 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.updateMainPlan($event, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DetailBoxComponent_div_12_li_20_i_8_Template, 1, 1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "PRIORITY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_div_12_li_20_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const i_r4 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.toggleMenu(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DetailBoxComponent_div_12_li_20_ng_container_19_Template, 3, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", plan_r3.progress == 100 ? "done bg-yellow-muted" : "undone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "plan-checkbox-", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", plan_r3.progress == 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plan_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", plan_r3.subPlans.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0)[plan_r3.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c1)[plan_r3.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", plan_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "btn-menu-", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "progress-", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mdbTooltip", "", plan_r3.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c2, plan_r3.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", plan_r3.subPlans.length > 0);
} }
function DetailBoxComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13)(8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoxComponent_div_12_Template_select_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.filterPlans(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Not done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DetailBoxComponent_div_12_div_18_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DetailBoxComponent_div_12_li_20_Template, 20, 17, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Add plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.dateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.shortDateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.planDate.planCount, " item(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.planDate.plans.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.planDate.plans);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate3"]("href", "calendar/addPlan/", ctx_r0.planDate.year, "/", ctx_r0.planDate.month + 1, "/", ctx_r0.planDate.date, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class DetailBoxComponent {
    constructor(planService, utils, modalService) {
        this.planService = planService;
        this.utils = utils;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.priorityList = ['LOW', 'MID', 'HIGH'];
    }
    /**
     * Executed when the arrow besides the plan is clicked to expand the
     * list of subplans which belong to the plan.
     *
     * @param {string} index Index of the clicked arrow's plan.
     * @memberof DetailBoxComponent
     */
    expandPlan(index) {
        // Get the selected ul and arrow object
        let targetUl = document.getElementById('plan-' + index);
        let targetArrow = document.getElementById('arrow-' + index);
        // Toggle the arrow class
        targetArrow.classList.toggle('fa-chevron-left');
        targetArrow.classList.toggle('fa-chevron-down');
        // Open the subplans list
        targetUl.classList.toggle('opened');
    }
    /**
     * Update the whole plan when the plan is marked as done.
     *
     * @param {*} event Object containing information about the action that just happened.
     * @param {string} planIndex Index of the plan which needs to be updated.
     * @memberof DetailBoxComponent
     */
    updateMainPlan(event, planIndex) {
        let checkBox = event.target; // Checkbox which is just clicked
        let plan = this.planDate.plans[planIndex]; // Get the plan object using the given index
        let subPlans = plan.subPlans;
        // Update subPlan's isDone value as well as plan's progress value
        if (checkBox.checked) {
            // If the main plan's progress is 100, every subplan is marked as done
            plan.progress = 100;
            subPlans.forEach(element => {
                element.isDone = true;
            });
        }
        else {
            // If the main plan's progress is 0, every subplan is marked as undone
            plan.progress = 0;
            subPlans.forEach(element => {
                element.isDone = false;
            });
        }
        this.updatePlan(plan); // Call the updatePlan function
        this.filterPlans(); // Filter the plan after the update
    }
    /**
     * Update the subplan when the it is marked as done.
     *
     * @param {*} event Object containing information about the action that just happened.
     * @param {string} planIndex Index of the plan which contains the subplan.
     * @param {string} subPlanIndex Index of the subplan which needs to be updated.
     * @memberof DetailBoxComponent
     */
    updateSubPlan(event, planIndex, subPlanIndex) {
        let checkBox = event.target; // clicked checkbox
        let plan = this.planDate.plans[planIndex]; // Get the plan using the index
        console.log('target: ' + JSON.stringify(checkBox));
        console.log(checkBox);
        // As the checkbox is checked or unchecked, update its value of isDone
        if (checkBox.checked)
            plan.subPlans[subPlanIndex].isDone = true;
        else
            plan.subPlans[subPlanIndex].isDone = false;
        this.updatePlan(plan); // Call the updatePlan function
        this.filterPlans(); // Filter plans after the update
    }
    /**
     * Filter the plans depending on their isDone values.
     * TODO: if plan's progress is changed, it should be filtered immediately
     *
     * @memberof DetailBoxComponent
     */
    filterPlans() {
        let selectValue = document.getElementById('plan-category').value;
        // Get all plan items
        let listItems = document.querySelectorAll('li.plans-container-items');
        // If the category all is selected, display every plan
        if (selectValue == 'all') {
            listItems.forEach(li => {
                li.style.display = "block";
            });
        }
        else {
            listItems.forEach(li => {
                // Depending on the selected category, change the display value of the item
                if (!li.classList.contains(selectValue)) {
                    li.style.display = "none";
                }
                else {
                    li.style.display = "block";
                }
            });
        }
    }
    /**
     * Open the menu for each plan.
     *
     * @param {number} btnIndex Index of the clicked menu button.
     * @memberof DetailBoxComponent
     */
    toggleMenu(btnIndex) {
        this.selectedBtnIndex = btnIndex;
        // Change the visibility of the overlay and menu list
        this.toggleMenuOverlay();
        // Menu button to open the menu
        let menuButton = document.querySelector(`#btn-menu-${btnIndex} i`);
        // Menu list element and items in it
        let menuList = document.querySelector('#menu-list');
        let clientRect = menuButton.getBoundingClientRect();
        // Locate menu list in the screen larger than xs
        if (screen.width > 576) {
            // Set the position of the menu list relative to the window
            menuList.style.left = `${clientRect.left + 15}px`;
            menuList.style.top = `${clientRect.top - 5}px`;
        }
        else {
            // Set the position of the menu list relative to the window
            menuList.style.left = `${clientRect.left - 120}px`;
            menuList.style.top = `${clientRect.top - 78}px`;
        }
    }
    /**
     * Toggle the classes for opening or closing the detail box.
     * - Change the visibility of the menu overlay element
     * - Disable or enable the scroll (scroll disabled when menu opened)
     *
     * @memberof DetailBoxComponent
     */
    closeDetailBox() {
        this.utils.changeDetailBox(false, null, null);
    }
    /**
     * Depending on the index of the selected plan menu and the index of the menu,
     * add subplan, edit or delete the plan.
     * (This function is called in the EventListener)
     *
     * @param {number} menuIndex Index of the selected menu.
     * @memberof DetailBoxComponent
     */
    menuItemAction(menuIndex) {
        // Selected index of the menu button
        let btnIndex = this.selectedBtnIndex;
        // Get the selected plan's id to edit or delete the plan
        let planId = this.planDate.plans[btnIndex]._id;
        switch (menuIndex) {
            case 0:
                // To open the add subplan modal, pass the selected button's index
                this.openModal(btnIndex);
                // Change the visibility of the menu list and overlay
                this.toggleMenuOverlay();
                break;
            case 1:
                // Go to the selected plan's editPlan page
                window.location.href = `calendar/editPlan/${planId}`;
                // Change the visibility of the menu list and overlay
                this.toggleMenuOverlay();
                break;
            case 2:
                // To delete the selected plan, pass the selected button's index
                this.deletePlan(planId);
                // Change the visibility of the menu list and overlay
                this.toggleMenuOverlay();
                break;
            default:
                break;
        }
    }
    /**
     * Toggle the classes for opening or closing the menu list.
     * - Change the visibility of the menu overlay element
     * - Disable or enable the scroll (scroll disabled when menu opened)
     *
     * @memberof DetailBoxComponent
     */
    toggleMenuOverlay() {
        // Get the menu overlay element and body to toggle the class
        let menuOverlay = document.getElementById('menu-overlay');
        // Toggle the class to change its visibility and disable or enable the scroll
        // (When the menu is opened, scroll is disabled)
        menuOverlay.classList.toggle('d-none');
        this.utils.hideScroll(true);
    }
    /**
     * Delete a plan by its ID and refresh the list.
     *
     * @param {string} id ID of the plan to delete.
     * @memberof DetailBoxComponent
     */
    deletePlan(id) {
        this.planService.deletePlan(id).subscribe(data => {
            this.refreshPlanDate();
        });
    }
    /**
     * Remove a subplan from the array and update the plan.
     *
     * @param {Plan} plan Plan that needs to be updated when deleting the subplan.
     * @param {number} spIndex Index of the subplan in the plan.
     * @memberof DetailBoxComponent
     */
    deleteSubPlan(plan, spIndex) {
        // Remove the plan from the subplan list
        plan.subPlans.splice(spIndex, 1);
        // Update the plan
        this.updatePlan(plan);
    }
    /**
     * Update the plan using the plan service.
     *
     * @param {Plan} plan Plan to update.
     * @memberof DetailBoxComponent
     */
    updatePlan(plan) {
        plan.progress = this.utils.calculateProgress(plan);
        this.planService.updatePlan(plan).subscribe(data => {
            console.log('done!');
        });
    }
    /**
     * Refresh the plans in current date.
     *
     * @memberof DetailBoxComponent
     */
    refreshPlanDate() {
        // Create a Date object using the current date value
        let date = new Date(this.planDate.year, this.planDate.month, this.planDate.date);
        // Get a PlanDate and make the value of planDate variable up to date
        this.planService.getDataByDate(date).subscribe(res => {
            this.planDate = this.utils.getPlanDate(res.body, date);
        });
    }
    /**
     * Open the modal to add a new subplan.
     *
     * @param {number} planIndex Index of the plan which the subplan will be inserted.
     * @memberof DetailBoxComponent
     */
    openModal(planIndex) {
        // Open the Add Subplan modal
        this.modalRef = this.modalService.open(_add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_1__.AddSubPlanModalComponent, {
            modalClass: 'modal-dialog-centered'
        });
        // Get the plan by index
        let plan = this.planDate.plans[planIndex];
        this.modalRef.onClose.subscribe((data) => {
            if (data) { // if the data exists
                let subPlanFromJson = JSON.parse(JSON.stringify(data));
                // Create a new subplan object using the json data string
                let subplan = new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_0__.SubPlan(subPlanFromJson.modalTitle, subPlanFromJson.modalDescription, subPlanFromJson.modalPriority, subPlanFromJson.modalIsDone);
                // Add the new subplan item to the list
                plan.subPlans.push(subplan);
            }
            // Update the plan
            this.updatePlan(plan);
        });
    }
}
DetailBoxComponent.ɵfac = function DetailBoxComponent_Factory(t) { return new (t || DetailBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_plan_plan_service__WEBPACK_IMPORTED_MODULE_2__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_5__.MdbModalService)); };
DetailBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailBoxComponent, selectors: [["app-detail-box"]], inputs: { planDate: ["planDateFromCal", "planDate"], dateString: ["dateStringFromCal", "dateString"], shortDateString: ["shortDateStringFromCal", "shortDateString"] }, decls: 13, vars: 1, consts: [["id", "menu-overlay", 1, "w-100", "h-100", "position-absolute", "d-none", 3, "click"], ["id", "menu-list", 1, "list-group", "position-absolute"], ["mdbRipple", "", 1, "list-group-item", "py-1", "small", "rounded", "cursor-pointer", "mb-1", 3, "click"], ["mdbRipple", "", 1, "list-group-item", "py-1", "small", "rounded", "cursor-pointer", 3, "click"], ["id", "detail-box-overlay", 1, "position-absolute", 3, "click"], ["id", "detail-box", 1, "h-100", "position-fixed"], [1, "position-absolute", "top-0", "end-0", "pt-2", "pe-3", "border-0", "bg-transparent", "text-light", 3, "click"], ["class", "p-4 h-100", 4, "ngIf"], [1, "p-4", "h-100"], [1, "mb-4", "fw-light"], ["src", "assets/img/logo-icon-with-bg-light.png", "width", "50", "alt", "image of the planify logo", 1, "me-4"], [1, "d-md-inline-block", "d-none"], [1, "d-md-none", "d-inline-block"], [1, "d-flex", "align-items-center", "mb-3"], [1, "mb-0"], ["id", "plan-category", 1, "form-select", "form-select-sm", "ms-auto", 3, "change"], ["value", "all", "selected", ""], ["value", "done"], ["value", "undone"], ["id", "plan-list-container", 1, "position-relative"], ["class", "p-5 shadow-5 rounded text-center no-plan-div", 4, "ngIf"], [1, "list-group", "shadow-5", "plans-container"], ["class", "list-group-item plans-container-items border-0 p-0 me-1 mb-3", 3, "ngClass", 4, "ngFor", "ngForOf"], ["mdbRipple", "", 1, "add-plan-btn", "btn", "btn-sm", "w-100", "position-absolute", "left-0", "end-0", "bottom-0", 3, "href"], [1, "p-5", "shadow-5", "rounded", "text-center", "no-plan-div"], [1, "mb-0", "small", "fw-light"], [1, "list-group-item", "plans-container-items", "border-0", "p-0", "me-1", "mb-3", 3, "ngClass"], [1, "px-3", "pt-3", "pb-2", "d-flex", "align-items-center"], [1, "me-3"], [1, "checkbox-container"], ["type", "checkbox", 3, "id", "checked", "change"], [1, "checkbox-checkmark"], [1, "text-light"], ["class", "fas fa-chevron-left ms-auto text-light", 3, "id", "click", 4, "ngIf"], [1, "mb-1", "priority-text", "fw-light", "px-3", "text-light"], [1, "fw-normal", 3, "ngClass"], [1, "plan-description", "text-light", "fw-lighter", "ps-3", "pe-4", "pb-3", "position-relative"], [1, "small", "position-absolute", "btn-menu", "text-muted", "bg-transparent", "border-0", 3, "id", "click"], [1, "fas", "fa-ellipsis-v", "fa-xs"], [1, "progress", 2, "height", "5px", 3, "id"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", "placement", "top", 1, "progress-bar", 3, "ngStyle", "mdbTooltip"], [4, "ngIf"], [1, "fas", "fa-chevron-left", "ms-auto", "text-light", 3, "id", "click"], [1, "list-group", "rounded-0", "sub-plans-container", 3, "id"], ["class", "d-flex align-items-center list-group-item border-start-0 border-end-0 border-bottom-0 fw-light py-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "list-group-item", "border-start-0", "border-end-0", "border-bottom-0", "fw-light", "py-3"], [1, "checkbox-container", "me-3"], ["type", "checkbox", 3, "checked", "change"], [1, "mb-0", "text-light"], [1, "fas", "fa-times", "fa-xs", "ms-auto", "text-purple-muted", 3, "click"]], template: function DetailBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_div_click_0_listener() { return ctx.toggleMenuOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_div_click_2_listener() { return ctx.menuItemAction(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Add subplan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_div_click_4_listener() { return ctx.menuItemAction(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_div_click_6_listener() { return ctx.menuItemAction(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_div_click_8_listener() { return ctx.closeDetailBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoxComponent_Template_button_click_10_listener() { return ctx.closeDetailBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DetailBoxComponent_div_12_Template, 23, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.planDate);
    } }, directives: [mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__.MdbRippleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_9__.MdbTooltipDirective], styles: ["ul[_ngcontent-%COMP%]::-webkit-scrollbar, #detail-box[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\nul[_ngcontent-%COMP%]::-webkit-scrollbar-track, #detail-box[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--purple-darkest);\n  border-radius: 10px;\n}\n\nul[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, #detail-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--purple-gray);\n  border-radius: 10px;\n}\n\nul[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, #detail-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--purple-light);\n}\n\nul[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  border-radius: 0;\n}\n.progress[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n.plans-container[_ngcontent-%COMP%] {\n  height: 88%;\n}\n.plans-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n  border-color: var(--purple-gray);\n}\n.plans-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background-color: var(--purple-light);\n}\n#plan-list-container[_ngcontent-%COMP%] {\n  height: 77vh;\n}\n#detail-box[_ngcontent-%COMP%] {\n  width: var(--detail-box-width); \n  \n  background-color: #3b2e5f;\n  color: var(--purple-lightest);\n}\n#plan-category[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.sub-plans-container[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow-y: auto;\n  transition: 0.5s;\n}\n.sub-plans-container.opened[_ngcontent-%COMP%] {\n  max-height: 150px;\n  transition: 0.5s;\n}\n.btn-menu[_ngcontent-%COMP%] {\n  right: 16px;\n  bottom: 10px;\n}\nul.menu-modal[_ngcontent-%COMP%] {\n  right: 33px;\n  top: 26px;\n  z-index: 5;\n  width: 120px;\n}\n#menu-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1041;\n}\n#detail-box-overlay[_ngcontent-%COMP%] {\n  background: rgb(0 0 0 / 53%);\n  z-index: 1040;\n}\n.no-plan-div[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n.add-plan-btn[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n  color: var(--gray-lightest);\n}\n.add-plan-btn[_ngcontent-%COMP%]:hover, .close-detail-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(91, 77, 137, 0.7);\n}\n.close-detail-btn[_ngcontent-%COMP%] {\n  background-color: rgb(114, 102, 155);\n  color: var(--gray-lightest);\n}\n#menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: rgb(216, 203, 235);\n  color: var(--purple-darkest);\n  transition: background-color 0.3s;\n}\n#menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 223, 255);\n  transition: background-color 0.3s;\n}\n@media screen and (max-width: 1200px) {\n  #detail-box[_ngcontent-%COMP%] {\n    z-index: 1040;\n    width: 45%;\n    left: -100%;\n    transition: left 0.5s linear;\n  }\n\n  #detail-box.opened[_ngcontent-%COMP%] {\n    left: 0;\n    transition: left 0.5s linear;\n  }\n\n  #detail-box-overlay.opened[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 150%;\n  }\n}\n@media screen and (max-width: 768px) {\n  #detail-box[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 576px) {\n  #detail-box[_ngcontent-%COMP%] {\n    width: 100%;\n    transition: left 0.2s linear;\n  }\n\n  #detail-box.opened[_ngcontent-%COMP%] {\n    left: 0;\n    transition: left 0.2s linear;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWOztFQUVFLFVBQVU7QUFDWjtBQUVBLFVBQVU7QUFDVjs7RUFFRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCO0FBRUEsV0FBVztBQUNYOztFQUVFLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7QUFFQSxvQkFBb0I7QUFDcEI7O0VBRUUscUNBQXFDO0FBQ3ZDO0FBQ0EseUNBQXlDO0FBRXpDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxvQkFBb0I7RUFDcEQsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCO0FBRUE7O0dBRUc7QUFFSDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDRCQUE0QjtFQUM5QjtBQUNGIiwiZmlsZSI6ImRldGFpbC1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBTVEFSVC0tLS0tLS0tICovXG4vKiB3aWR0aCAqL1xudWw6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuI2RldGFpbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbnVsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbiNkZXRhaWwtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG51bDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4jZGV0YWlsLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xudWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxuI2RldGFpbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBFTkQtLS0tLS0tLSAqL1xuXG51bCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbn1cblxuLnBsYW5zLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODglO1xufVxuXG4ucGxhbnMtY29udGFpbmVyIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWRhcmtlc3QpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuLnBsYW5zLWNvbnRhaW5lciBsaSAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cblxuI3BsYW4tbGlzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDc3dmg7XG59XG5cbiNkZXRhaWwtYm94IHtcbiAgd2lkdGg6IHZhcigtLWRldGFpbC1ib3gtd2lkdGgpOyAvKiBERVRBSUxCT1ggV0lEVEggKi9cbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiMmU1ZjtcbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodGVzdCk7XG59XG5cbiNwbGFuLWNhdGVnb3J5IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4vKiAuc3ViLXBsYW5zLWNvbnRhaW5lciBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbn0gKi9cblxuLnN1Yi1wbGFucy1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc3ViLXBsYW5zLWNvbnRhaW5lci5vcGVuZWQge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bi1tZW51IHtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxudWwubWVudS1tb2RhbCB7XG4gIHJpZ2h0OiAzM3B4O1xuICB0b3A6IDI2cHg7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuI21lbnUtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTA0MTtcbn1cblxuI2RldGFpbC1ib3gtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDUzJSk7XG4gIHotaW5kZXg6IDEwNDA7XG59XG5cbi5uby1wbGFuLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbn1cblxuLmFkZC1wbGFuLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWdyYXktbGlnaHRlc3QpO1xufVxuXG4uYWRkLXBsYW4tYnRuOmhvdmVyLFxuLmNsb3NlLWRldGFpbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCA3NywgMTM3LCAwLjcpO1xufVxuXG4uY2xvc2UtZGV0YWlsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDEwMiwgMTU1KTtcbiAgY29sb3I6IHZhcigtLWdyYXktbGlnaHRlc3QpO1xufVxuXG4jbWVudS1saXN0IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjAzLCAyMzUpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWRhcmtlc3QpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbiNtZW51LWxpc3QgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMjMsIDI1NSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICNkZXRhaWwtYm94IHtcbiAgICB6LWluZGV4OiAxMDQwO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGxpbmVhcjtcbiAgfVxuXG4gICNkZXRhaWwtYm94Lm9wZW5lZCB7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgbGluZWFyO1xuICB9XG5cbiAgI2RldGFpbC1ib3gtb3ZlcmxheS5vcGVuZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjZGV0YWlsLWJveCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAjZGV0YWlsLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGxpbmVhcjtcbiAgfVxuXG4gICNkZXRhaWwtYm94Lm9wZW5lZCB7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgbGluZWFyO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8903:
/*!***********************************************************!*\
  !*** ./src/app/calendar/edit-plan/edit-plan.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPlanComponent": () => (/* binding */ EditPlanComponent)
/* harmony export */ });
/* harmony import */ var _add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-sub-plan-modal/add-sub-plan-modal.component */ 974);
/* harmony import */ var src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/plan.model */ 6178);
/* harmony import */ var src_app_models_plan_date_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/plan-date.model */ 7813);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-sub-plan-modal/edit-sub-plan-modal.component */ 3282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _services_plan_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/plan/plan.service */ 1350);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
















function EditPlanComponent_form_2_div_37_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sp_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", sp_r8.description, " ");
} }
const _c0 = function () { return ["text-success", "text-warning", "text-danger"]; };
const _c1 = function () { return ["LOW", "MID", "HIGH"]; };
function EditPlanComponent_form_2_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_form_2_div_37_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const subIndex_r9 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r12.openEditModal(subIndex_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h6", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_form_2_div_37_div_1_Template_i_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const subIndex_r9 = restoredCtx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r14.deleteSubPlan(subIndex_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " PRIORITY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, EditPlanComponent_form_2_div_37_div_1_p_9_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sp_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", sp_r8.isDone ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sp_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0)[sp_r8.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1)[sp_r8.priority - 1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sp_r8.description != "");
} }
function EditPlanComponent_form_2_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditPlanComponent_form_2_div_37_div_1_Template, 10, 7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.selectedPlan.subPlans);
} }
function EditPlanComponent_form_2_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " There is no sub-plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditPlanComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function EditPlanComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.submitEditPlan(ctx_r15.validationForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 13)(4, "div", 14)(5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 16)(8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "High ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 18)(11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Medium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 20)(15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 22)(19, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Priority is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 24)(23, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Due date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mdb-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Due date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mdb-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mdb-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Sub-plans");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, EditPlanComponent_form_2_div_37_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, EditPlanComponent_form_2_ng_template_38_Template, 2, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 34)(41, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_form_2_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.openAddModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Add sub-plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.validationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedDateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.selectedPlan.priority == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.selectedPlan.priority == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.selectedPlan.priority == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedPlan.subPlans.length > 0)("ngIfElse", _r5);
} }
function EditPlanComponent_div_11_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", plan_r19.description, "");
} }
function EditPlanComponent_div_11_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53)(1, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const sp_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0)[sp_r24.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", sp_r24.isDone ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sp_r24.title);
} }
function EditPlanComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_div_11_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const i_r20 = restoredCtx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r25.navigateToOtherPlan(i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 51)(2, "h6", 40)(3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " PRIORITY: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, EditPlanComponent_div_11_div_1_p_9_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, EditPlanComponent_div_11_div_1_div_10_Template, 5, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plan_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", i_r20 == ctx_r18.otherPlan.plans.length - 1 ? "" : "mb-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", plan_r19.progress == 100 ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](plan_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0)[plan_r19.priority - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c1)[plan_r19.priority - 1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", plan_r19.description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", plan_r19.subPlans);
} }
function EditPlanComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditPlanComponent_div_11_div_1_Template, 11, 9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.otherPlan.plans);
} }
function EditPlanComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "There is no plan on this day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class EditPlanComponent {
    constructor(route, userService, planService, utils, modalService) {
        this.route = route;
        this.userService = userService;
        this.planService = planService;
        this.utils = utils;
        this.modalService = modalService;
        // Current plan object that the user is looking at
        this.selectedPlan = new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__.Plan(null, null, null, null, null, null, null);
        // Entered date input string
        this.dateInputString = "";
        // The plan on the selected date
        this.otherPlan = new src_app_models_plan_date_model__WEBPACK_IMPORTED_MODULE_2__.PlanDate(null, null, null);
    }
    ngOnInit() {
        // Check if the user is logged in
        this.userService.isAuthenticated();
        const routeParams = this.route.snapshot.paramMap; // Get params
        const planId = routeParams.get('planId'); // Plan ID to get the chosen plan data
        // Get the plan using the plan ID
        this.planService.getDataById(planId).subscribe(data => {
            // Get the first plan found
            let planData = data.body[0];
            // Get the dueDate as the Date object
            let dueDate = new Date(planData.dueDate);
            // Add a day to the dueDate since the date starts from 0
            dueDate.setDate(dueDate.getDate());
            // Create a plan object using the data
            this.selectedPlan = new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__.Plan(planData._id, planData.userId, planData.title, planData.description, dueDate, planData.progress, planData.priority);
            // Add subplans to the plan
            for (let index = 0; index < planData.subPlans.length; index++) {
                this.selectedPlan.addSubplan(new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__.SubPlan(planData.subPlans[index].title, planData.subPlans[index].description, planData.subPlans[index].priority, planData.subPlans[index].isDone));
            }
            // Get the original date string
            this.dateInputString = this.selectedPlan.dueDate.toISOString().slice(0, 16);
            // Date string to display
            this.selectedDateString = this.utils.getDateString(this.selectedPlan.dueDate, false);
            // If there is no other selected date to display, set it same as currently selected date
            if (this.otherPlanDate == null) {
                this.otherPlanDate = dueDate;
            }
            // Get the plan on the selected other date
            this.planService.getDataByDate(this.otherPlanDate).subscribe(res => {
                this.otherPlan = this.utils.getPlanDate(res.body, this.otherPlanDate);
            });
            // Get the date string to display
            this.otherDateString = this.utils.getDateString(this.otherPlanDate, false);
            // Create a FormGroup object passing the initial values
            this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
                dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.dateInputString),
                priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.selectedPlan.priority.toString()),
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.selectedPlan.title),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.selectedPlan.description)
            });
        });
    }
    get dueDate() {
        return this.validationForm.get('dueDate');
    }
    get priority() {
        return this.validationForm.get('priority');
    }
    get title() {
        return this.validationForm.get('title');
    }
    get description() {
        return this.validationForm.get('description');
    }
    /**
     * Change the date as the user clicks the arrow.
     *
     * @param {boolean} isNextDay If true, set the date to the next day.
     * @memberof EditPlanComponent
     */
    changeDate(isNextDay) {
        if (isNextDay) {
            // Add 1 day to the selected other date
            this.otherPlanDate.setDate(this.otherPlanDate.getDate() + 1);
        }
        else {
            // Subtract 1 day from the selected other date
            this.otherPlanDate.setDate(this.otherPlanDate.getDate() - 1);
        }
        // Refresh the view
        this.ngOnInit();
    }
    /**
     * Get the data from the form and update the plan.
     *
     * @param {*} form Edit plan form data to submit.
     * @memberof EditPlanComponent
     */
    submitEditPlan(form) {
        let data = form.value;
        this.selectedPlan.title = data.title;
        this.selectedPlan.description = data.description;
        this.selectedPlan.dueDate = data.dueDate;
        this.selectedPlan.priority = data.priority;
        this.selectedPlan.progress = 0;
        this.selectedPlan.progress = this.utils.calculateProgress(this.selectedPlan);
        // Update the plan using the plan service
        this.planService.updatePlan(this.selectedPlan).subscribe(data => {
            console.log('done!');
            // Refresh the view
            // this.ngOnInit();
            let currDate = new Date().toISOString().split('T')[0];
            // Go back to the calendar page
            window.location.href = `calendar/date/${currDate.split('-')[0]}/${currDate.split('-')[1]}`;
        });
    }
    /**
     * Open the Add subplan modal.
     *
     * @memberof EditPlanComponent
     */
    openAddModal() {
        // Open the modal
        this.addModalRef = this.modalService.open(_add_sub_plan_modal_add_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_0__.AddSubPlanModalComponent, {
            modalClass: 'modal-dialog-centered'
        });
        // When close the modal, get the data on the modal
        this.addModalRef.onClose.subscribe((data) => {
            if (data) {
                let subPlanFromJson = JSON.parse(JSON.stringify(data));
                subPlanFromJson.modalIsDone = subPlanFromJson.modalIsDone === null ? false : subPlanFromJson.modalIsDone;
                // Using the data, create a new subplan
                let subplan = new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__.SubPlan(subPlanFromJson.modalTitle, subPlanFromJson.modalDescription, subPlanFromJson.modalPriority, subPlanFromJson.modalIsDone);
                // Push the subplan to the list
                this.selectedPlan.subPlans.push(subplan);
            }
        });
    }
    /**
     * Open the Edit Subplan modal.
     *
     * @param {*} index Index of the subplan to edit.
     * @memberof EditPlanComponent
     */
    openEditModal(index) {
        // Get the subplan by index
        let subPlan = this.selectedPlan.subPlans[index];
        // Set the subplan using the static method (data will be used in the modal)
        src_app_services_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setSubPlan(subPlan);
        // Open the modal
        this.editModalRef = this.modalService.open(_edit_sub_plan_modal_edit_sub_plan_modal_component__WEBPACK_IMPORTED_MODULE_4__.EditSubPlanModalComponent, {
            modalClass: 'modal-dialog-centered'
        });
        // When close the modal, get the data on the modal
        this.editModalRef.onClose.subscribe((data) => {
            if (data == 0) {
                this.selectedPlan.subPlans.splice(index, 1);
            }
            else if (data) {
                let subPlanFromJson = JSON.parse(JSON.stringify(data));
                subPlanFromJson.modalIsDone = subPlanFromJson.modalIsDone === null ? false : subPlanFromJson.modalIsDone;
                // Create a subplan object using the json data
                let subplan = new src_app_models_plan_model__WEBPACK_IMPORTED_MODULE_1__.SubPlan(subPlanFromJson.modalTitle, subPlanFromJson.modalDescription, subPlanFromJson.modalPriority, subPlanFromJson.modalIsDone);
                // Push the subplan to the list
                this.selectedPlan.subPlans[index] = subplan;
            }
        });
    }
    /**
     * Delete a SubPlan by index from the array of the subplan.
     *
     * @param {number} spIndex Index of the subplan to delete.
     * @memberof EditPlanComponent
     */
    deleteSubPlan(spIndex) {
        // Remove the subplan item from the array using the index
        this.selectedPlan.subPlans.splice(spIndex, 1);
        // Update the plan
        this.planService.updatePlan(this.selectedPlan).subscribe(data => {
        });
    }
    /**
     * Navigate to the selected other date's edit plan page when the text is clicked.
     *
     * @param {number} index Index of the plan to edit.
     *
     * @memberof AddPlanComponent
     */
    navigateToOtherPlan(index) {
        let otherPlanToEdit = this.otherPlan.plans[index];
        // If the IDs of the plans to edit are different, navigate to the chosen plan's edit page
        if (otherPlanToEdit._id !== this.selectedPlan._id) {
            window.location.href = `calendar/editPlan/${otherPlanToEdit._id}`;
        }
    }
}
EditPlanComponent.ɵfac = function EditPlanComponent_Factory(t) { return new (t || EditPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_plan_plan_service__WEBPACK_IMPORTED_MODULE_6__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_10__.MdbModalService)); };
EditPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EditPlanComponent, selectors: [["app-edit-plan"]], decls: 14, vars: 4, consts: [["id", "add-plan-container", 1, "w-100", "h-100"], ["id", "add-plan-card", 1, "shadow-5-strong", "overflow-hidden", "d-flex"], ["id", "card-form", "class", "px-lg-5 px-4 pb-5 pt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "w-100", "p-4", "other-plan-container"], [1, "d-block", "text-center", "small", "fw-light", "mb-1"], [1, "mb-4", "text-center", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-chevron-left", 3, "click"], [1, "shadow-sm", "p-1", "rounded"], [1, "fas", "fa-chevron-right", 3, "click"], ["id", "other-plan-item-container", "class", "pe-1", 4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["id", "card-form", 1, "px-lg-5", "px-4", "pb-5", "pt-4", 3, "formGroup", "ngSubmit"], [1, "mb-4"], [1, "d-lg-flex", "flex-row-reverse"], [1, "ms-lg-3"], [1, "mb-1", "fw-normal"], [1, "d-flex", "position-relative", "ms-1", "mt-2"], [1, "radio-container", "fw-light", "me-3"], ["type", "radio", "id", "radioHigh", "value", "3", "formControlName", "priority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "radio-checkmark"], ["type", "radio", "id", "radioMid", "value", "2", "formControlName", "priority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "radio-container", "fw-light"], ["type", "radio", "id", "radioLow", "value", "1", "formControlName", "priority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "priority", "error-msg", "mt-1"], [1, "mt-2", "mt-lg-0"], [1, "fw-normal", "mb-1"], ["mdbInput", "", "type", "datetime-local", "id", "dueDate", "formControlName", "dueDate", "required", "", 1, "my-0", "dueDate", "light-calendar-icon"], [1, "dueDate", "error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "inputTitle", "formControlName", "title", "placeholder", "Plan title", "required", "", 1, "title", "mt-2"], [1, "title", "error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "inputDesc", "rows", "4", "formControlName", "description", "placeholder", "Description", 1, "mt-2"], [1, "mb-1", "mt-3", "fw-normal"], [4, "ngIf", "ngIfElse"], ["emptySubplan", ""], [1, "pt-5", "d-lg-flex"], ["type", "submit", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2", "me-3", "btn-save"], ["type", "button", "id", "btn-sub-plan", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2", "me-3", 3, "click"], ["id", "btn-cancel", "href", "/calendar", "mdbRipple", "", 1, "btn", "btn-sm", "text-white", "fw-light", "w-100", "py-2", "mt-2"], ["class", "sub-plan-item shadow-3 p-3 rounded mb-2 fw-light text-break", 3, "click", 4, "ngFor", "ngForOf"], [1, "sub-plan-item", "shadow-3", "p-3", "rounded", "mb-2", "fw-light", "text-break", 3, "click"], [1, "d-flex", "align-items-center", "mb-1", "fw-light", "text-light"], [3, "ngClass"], [1, "fas", "fa-times", "fa-xs", "ms-auto", 3, "click"], [1, "priority-text", "fw-light", "mb-0", "text-light"], [1, "fw-normal", 3, "ngClass"], ["class", "mb-0 fw-light small text-purple-muted", 4, "ngIf"], [1, "mb-0", "fw-light", "small", "text-purple-muted"], [1, "rounded", "d-flex", "justify-content-center", "py-5", "empty-subplan-container", "fw-light", "small"], ["id", "other-plan-item-container", 1, "pe-1"], ["class", "rounded shadow overflow-hidden cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "rounded", "shadow", "overflow-hidden", "cursor-pointer", 3, "ngClass", "click"], [1, "p-3", "other-plan-item"], ["class", "p-3 other-sub-plan-item", 4, "ngFor", "ngForOf"], [1, "p-3", "other-sub-plan-item"], [1, "mb-0"], [1, "fas", "fa-exclamation", "me-2", 3, "ngClass"], [1, "mb-0", "py-5", "fw-light", "text-center"]], template: function EditPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditPlanComponent_form_2_Template, 47, 7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Other plans on");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4", 5)(7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_Template_i_click_7_listener() { return ctx.changeDate(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPlanComponent_Template_i_click_10_listener() { return ctx.changeDate(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, EditPlanComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditPlanComponent_ng_template_12_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.validationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.otherDateString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.otherPlan.planCount > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_12__.MdbFormControlComponent, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_12__.MdbInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_13__.MdbRippleDirective], styles: ["#add-plan-container[_ngcontent-%COMP%] {\n  padding: 100px 85px;\n  min-height: 100vh;\n  background-image: url(/assets/img/dots_texture.jpg);\n  background-size: cover;\n  color: var(--purple-lightest);\n  background-attachment: fixed;\n  width: 100%;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n#card-form[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--purple-light);\n}\n\n#add-plan-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n}\n\n#btn-sub-plan[_ngcontent-%COMP%] {\n  background-color: #473878;\n}\n\n#btn-cancel[_ngcontent-%COMP%] {\n  background-color: #3e3168;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  border-radius: 50%;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: rgba(161, 156, 156, 0.2);\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  transition: 0.2s;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 6px rgba(131, 114, 168, 0.3);\n  transition: 0.2s;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:after {\n  top: 3px;\n  left: 3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--purple-lightest);\n}\n\n\n\n.empty-subplan-container[_ngcontent-%COMP%], .sub-plan-item[_ngcontent-%COMP%], .other-plan-container[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n\n#other-plan-item-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 460px;\n}\n\n.other-plan-item[_ngcontent-%COMP%] {\n  background-color: #3c3164;\n}\n\n.other-sub-plan-item[_ngcontent-%COMP%] {\n  background-color: #312656;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n  font-weight: 200;\n}\n\n\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--purple-darkest);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--purple-gray);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--purple-light);\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 40px;\n  }\n  #card-form[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #card-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 10px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .other-plan-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 0;\n  }\n\n  #add-plan-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUxBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixVQUFVLEVBQUUsWUFBWTtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtBQUNuQjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBQ0EsNEJBQTRCOztBQUU1Qjs7O0VBR0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDOztBQUMzQyxVQUFVOztBQUNWO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0EseUNBQXlDOztBQUV6QztFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiYWRkLXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtcGxhbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweCA4NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2RvdHNfdGV4dHVyZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjYXJkLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jYWRkLXBsYW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuI2J0bi1zdWItcGxhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzM4Nzg7XG59XG5cbiNidG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMzE2ODtcbn1cblxuLyogUkFESU8gQlVUVE9OIFNUWUxFIFNUQVJUUyAqL1xuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4ucmFkaW8tY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTU2LCAxNTYsIDAuMik7XG59XG5cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgcHVycGxlIGJhY2tncm91bmQgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGZvY3VzZWQsIGFkZCBhIHB1cnBsZSBzaGFkb3cgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiAucmFkaW8tY2hlY2ttYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMTMxLCAxMTQsIDE2OCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLnJhZGlvLWNvbnRhaW5lciAucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xufVxuLyogUkFESU8gQlVUVE9OIFNUWUxFIEVORFMgKi9cblxuLmVtcHR5LXN1YnBsYW4tY29udGFpbmVyLFxuLnN1Yi1wbGFuLWl0ZW0sXG4ub3RoZXItcGxhbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFya2VzdCk7XG59XG5cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLm90aGVyLXBsYW4taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzMxNjQ7XG59XG5cbi5vdGhlci1zdWItcGxhbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjY1Njtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBTVEFSVC0tLS0tLS0tICovXG4vKiB3aWR0aCAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG4jb3RoZXItcGxhbi1pdGVtLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBFTkQtLS0tLS0tLSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgI2FkZC1wbGFuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggNDBweDtcbiAgfVxuICAjY2FyZC1mb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNjYXJkLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDEwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5vdGhlci1wbGFuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cblxuICAjYWRkLXBsYW4tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3282:
/*!*******************************************************************************!*\
  !*** ./src/app/calendar/edit-sub-plan-modal/edit-sub-plan-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSubPlanModalComponent": () => (/* binding */ EditSubPlanModalComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);









class EditSubPlanModalComponent {
    constructor(modalRef, utils) {
        this.modalRef = modalRef;
        this.utils = utils;
    }
    ngOnInit() {
        // Get current subplan using the Utils' static method
        this.subPlan = src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getSubPlan();
        if (this.subPlan) {
            // Create a new object of FormGroup using the subplan data
            this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
                modalPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.subPlan.priority.toString()),
                modalTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.subPlan.title),
                modalDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.subPlan.description),
                modalIsDone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.subPlan.isDone)
            });
        }
    }
    get modalPriority() {
        return this.validationForm.get('modalPriority');
    }
    get modalTitle() {
        return this.validationForm.get('modalTitle');
    }
    get modalDescription() {
        return this.validationForm.get('modalDescription');
    }
    get modalIsDone() {
        return this.validationForm.get('modalIsDone');
    }
    /**
     * Check if the required inputs are filled and display error message for the empty inputs.
     *
     * @param {*} formData Form data to check for the empty input.
     * @return {*}  {boolean} Return true if all required inputs are valid.
     * @memberof AddPlanComponent
     */
    validateInputs(formData) {
        // Get input elements
        let titleInput = document.querySelector('#modal-inputTitle');
        // Get error message elements
        let titleError = document.querySelector('.title.modal-error-msg');
        let priorityError = document.querySelector('.priority.modal-error-msg');
        // If data's property is null or empty, store false
        let isTitleValid = formData.modalTitle != null && formData.modalTitle !== '';
        let isPriorityValid = formData.modalPriority != null && formData.modalPriority !== '' && !isNaN(formData.modalPriority);
        // Check whether the input is valid and add or remove the class 'invalid'
        this.utils.changeInputStatus(titleInput, titleError, isTitleValid);
        this.utils.changeInputStatus(null, priorityError, isPriorityValid);
        // If any of input is invalid, return false
        if (!isTitleValid || !isPriorityValid)
            return false;
        // Otherwise, return true
        return true;
    }
    /**
     * Submit the updated value of the subplan form and call the close method.
     *
     * @param {*} data form data to submit.
     * @memberof EditSubPlanModalComponent
     */
    submitEditSubPlan(data) {
        // Store the priority as an integer
        data.value.priority = parseInt(data.value.priority);
        // If the form is valid, close the modal sending the data
        if (this.validateInputs(data.value)) {
            this.close(data.value);
        }
    }
    /**
     * Send 0 when the modal is closed to delete the subplan.
     *
     * @memberof EditSubPlanModalComponent
     */
    deleteAndClose() {
        this.modalRef.close(0);
    }
    /**
     * Close the modal passing the data.
     *
     * @param {*} data Data to send when closing the modal.
     * @memberof EditSubPlanModalComponent
     */
    close(data) {
        if (data) { // if the data exists, close the modal sending passed data
            this.modalRef.close(data);
        }
    }
}
EditSubPlanModalComponent.ɵfac = function EditSubPlanModalComponent_Factory(t) { return new (t || EditSubPlanModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_3__.MdbModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils)); };
EditSubPlanModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditSubPlanModalComponent, selectors: [["app-edit-sub-plan-modal"]], decls: 39, vars: 4, consts: [[1, "modal-header", "justify-content-center", "pt-0", "px-0"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "sub-plan-form", 1, "modal-body", "px-0", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "mb-1", "fw-normal", "text-purple-muted"], [1, "d-flex", "mb-2", "position-relative"], [1, "radio-container", "fw-light", "me-3"], ["type", "radio", "id", "modal-radioHigh", "value", "3", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "radio-checkmark"], ["type", "radio", "id", "modal-radioMid", "value", "2", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "radio-container", "fw-light"], ["type", "radio", "id", "modal-radioLow", "value", "1", "formControlName", "modalPriority", "required", "", 1, "mt-1", "priority", 3, "checked"], [1, "ms-auto"], ["mdbTooltip", "Mark as done", "placement", "top", 1, "checkbox-container"], ["type", "checkbox", "value", "true", "formControlName", "modalIsDone"], [1, "checkbox-checkmark"], [1, "priority", "modal-error-msg", "mt-1"], [1, "mb-2"], ["mdbInput", "", "type", "text", "id", "modal-inputTitle", "formControlName", "modalTitle", "placeholder", "Plan title", "required", "", 1, "title"], [1, "title", "modal-error-msg", "mt-1"], ["mdbInput", "", "type", "text", "id", "modal-inputDesc", "rows", "4", "formControlName", "modalDescription", "placeholder", "Description", 1, ""], [1, "modal-footer"], ["mdbRipple", "", "form", "sub-plan-form", "type", "submit", 1, "btn", "text-light", "btn-save"], ["mdbRipple", "", "form", "sub-plan-form", 1, "btn", "text-light", "btn-delete", 3, "click"], ["mdbRipple", "", "type", "button", 1, "btn", "text-light", "btn-cancel", 3, "click"]], template: function EditSubPlanModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit a Sub-plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditSubPlanModalComponent_Template_form_ngSubmit_3_listener() { return ctx.submitEditSubPlan(ctx.validationForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "High ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Low ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11)(19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14)(23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Priority is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mdb-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Title is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mdb-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21)(33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditSubPlanModalComponent_Template_button_click_35_listener() { return ctx.deleteAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditSubPlanModalComponent_Template_button_click_37_listener() { return ctx.modalRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.subPlan.priority == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.subPlan.priority == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.subPlan.priority == 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_4__.MdbTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__.MdbFormControlComponent, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_5__.MdbInputDirective, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_6__.MdbRippleDirective], styles: ["#add-plan-container[_ngcontent-%COMP%] {\n  padding: 100px 85px;\n  min-height: 100vh;\n  background-image: url(/assets/img/dots_texture.jpg);\n  background-size: cover;\n  color: var(--purple-lightest);\n  background-attachment: fixed;\n  width: 100%;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n#card-form[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--purple-light);\n  opacity: 1; \n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: var(--purple-light);\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--purple-light);\n}\n\n#add-plan-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n}\n\n#btn-sub-plan[_ngcontent-%COMP%] {\n  background-color: #473878;\n}\n\n#btn-cancel[_ngcontent-%COMP%] {\n  background-color: #3e3168;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  border-radius: 50%;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: rgba(161, 156, 156, 0.2);\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: solid 2px var(--purple-light);\n  transition: 0.2s;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .radio-checkmark[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 6px rgba(131, 114, 168, 0.3);\n  transition: 0.2s;\n}\n\n\n\n.radio-checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.radio-container[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]:after {\n  top: 3px;\n  left: 3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--purple-lightest);\n}\n\n\n\n.empty-subplan-container[_ngcontent-%COMP%], .sub-plan-item[_ngcontent-%COMP%], .other-plan-container[_ngcontent-%COMP%] {\n  background-color: var(--purple-darkest);\n}\n\n#other-plan-item-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 460px;\n}\n\n.other-plan-item[_ngcontent-%COMP%] {\n  background-color: #3c3164;\n}\n\n.other-sub-plan-item[_ngcontent-%COMP%] {\n  background-color: #312656;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n  font-weight: 200;\n}\n\n\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--purple-darkest);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--purple-gray);\n  border-radius: 10px;\n}\n\n\n\n#other-plan-item-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--purple-light);\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 40px;\n  }\n  #card-form[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #card-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 10px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .other-plan-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #add-plan-container[_ngcontent-%COMP%] {\n    padding: 100px 0;\n  }\n\n  #add-plan-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUxBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixVQUFVLEVBQUUsWUFBWTtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLGlCQUFpQjtBQUNuQjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBQ0EsNEJBQTRCOztBQUU1Qjs7O0VBR0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkNBQTJDOztBQUMzQyxVQUFVOztBQUNWO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0EseUNBQXlDOztBQUV6QztFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoiYWRkLXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtcGxhbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMDBweCA4NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2RvdHNfdGV4dHVyZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNjYXJkLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jYWRkLXBsYW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1ncmF5KTtcbn1cblxuI2J0bi1zdWItcGxhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzM4Nzg7XG59XG5cbiNidG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMzE2ODtcbn1cblxuLyogUkFESU8gQlVUVE9OIFNUWUxFIFNUQVJUUyAqL1xuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4ucmFkaW8tY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTU2LCAxNTYsIDAuMik7XG59XG5cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgcHVycGxlIGJhY2tncm91bmQgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGZvY3VzZWQsIGFkZCBhIHB1cnBsZSBzaGFkb3cgKi9cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiAucmFkaW8tY2hlY2ttYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMTMxLCAxMTQsIDE2OCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuLnJhZGlvLWNvbnRhaW5lciAucmFkaW8tY2hlY2ttYXJrOmFmdGVyIHtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xufVxuLyogUkFESU8gQlVUVE9OIFNUWUxFIEVORFMgKi9cblxuLmVtcHR5LXN1YnBsYW4tY29udGFpbmVyLFxuLnN1Yi1wbGFuLWl0ZW0sXG4ub3RoZXItcGxhbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFya2VzdCk7XG59XG5cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLm90aGVyLXBsYW4taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzMxNjQ7XG59XG5cbi5vdGhlci1zdWItcGxhbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjY1Njtcbn1cblxuaDQge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBTVEFSVC0tLS0tLS0tICovXG4vKiB3aWR0aCAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbiNvdGhlci1wbGFuLWl0ZW0tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG4jb3RoZXItcGxhbi1pdGVtLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuI290aGVyLXBsYW4taXRlbS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi8qIC0tLS0tLS0tU0NST0xMIEJBUiBTVFlMRSBFTkQtLS0tLS0tLSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgI2FkZC1wbGFuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggNDBweDtcbiAgfVxuICAjY2FyZC1mb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNjYXJkLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDEwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5vdGhlci1wbGFuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNhZGQtcGxhbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cblxuICAjYWRkLXBsYW4tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuIl19 */", ".btn-delete[_ngcontent-%COMP%] {\n  background-color: rgb(74, 58, 121);\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: rgb(63, 48, 107);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc3ViLXBsYW4tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQyIsImZpbGUiOiJlZGl0LXN1Yi1wbGFuLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgNTgsIDEyMSk7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA0OCwgMTA3KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2550:
/*!*************************************************************************!*\
  !*** ./src/app/calendar/monthly-calendar/monthly-calendar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyCalendarComponent": () => (/* binding */ MonthlyCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var _services_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/plan/plan.service */ 1350);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_ng_var_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ng-var.directive */ 8474);









function MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", p_r12.progress == 100 ? "text-decoration-line-through" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r12.title, " ");
} }
function MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_ng_container_4_li_1_Template, 2, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const varDate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngVar;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.planDates[varDate_r7 - 1].plans.length > 0);
} }
function MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_ng_container_4_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const varDate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r10.planDates[varDate_r7 - 1].plans.length > 0 ? "fw-bold date-plan" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", varDate_r7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.planDates[varDate_r7 - 1].plans);
} }
function MonthlyCalendarComponent_tr_43_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MonthlyCalendarComponent_tr_43_td_1_ng_container_1_ng_template_2_Template, 5, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const varDate_r7 = ctx.ngVar;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const dayIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const weekIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", weekIndex_r2 == 0 && dayIndex_r5 < ctx_r6.dateOffset || varDate_r7 > ctx_r6.planDates.length)("ngIfElse", _r9);
} }
function MonthlyCalendarComponent_tr_43_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonthlyCalendarComponent_tr_43_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const dayIndex_r5 = restoredCtx.index; const weekIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.openDetail(dayIndex_r5 - ctx_r20.dateOffset + 1 + weekIndex_r2 * 7, dayIndex_r5 + 1 + weekIndex_r2 * 7 > ctx_r20.dateOffset); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthlyCalendarComponent_tr_43_td_1_ng_container_1_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayIndex_r5 = ctx.index;
    const weekIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "cell-", dayIndex_r5 - ctx_r3.dateOffset + 1 + weekIndex_r2 * 7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", dayIndex_r5 + 1 + weekIndex_r2 * 7 > ctx_r3.dateOffset && dayIndex_r5 - ctx_r3.dateOffset + 1 + weekIndex_r2 * 7 < ctx_r3.numOfDays + 1 ? "hover" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", dayIndex_r5 - ctx_r3.dateOffset + 1 + weekIndex_r2 * 7);
} }
const _c0 = function () { return []; };
function MonthlyCalendarComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MonthlyCalendarComponent_tr_43_td_1_Template, 2, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", weekIndex_r2 >= ctx_r0.numOfWeeks ? "d-none" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0).constructor(7));
} }
class MonthlyCalendarComponent {
    constructor(planService, userService, utils, router) {
        this.planService = planService;
        this.userService = userService;
        this.utils = utils;
        this.router = router;
        this.subPlans = [];
        this.planDates = [];
        this.planEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.changeMonthEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        // Check if the user is logged in
        this.userService.isAuthenticated();
        this.today = new Date(this.paramYear, this.paramMonth - 1, 1);
        // Set the month string
        this.monthString = this.today.toLocaleString('default', { month: 'long' });
        let firstDayName = new Date(this.today.getFullYear(), this.today.getMonth(), 1).toLocaleString("default", { weekday: "long" });
        this.calendarWrapper = document.getElementById('calendar-wrapper');
        // Find the offset of the date using the month's first day name
        this.dateOffset = src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils.fullDays.indexOf(firstDayName);
        // Number of days in the month
        this.numOfDays = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
        // Number of weeks in the month
        this.numOfWeeks = Math.ceil((this.dateOffset + this.numOfDays) / 7);
        // Get all PlanDate objects in the month of today
        this.planService.getDataByMonth(this.today)
            .subscribe(data => {
            this.planDates = this.utils.getPlanDatesInMonth(data.body, this.today.getFullYear(), this.today.getMonth());
        });
    }
    /**
     * Open the detail-box of the selected date's plans.
     *
     * @param {number} date Selected date in the month that needs to be displayed.
     * @param {boolean} [isValid=true] The cell has the valid date. The cell with an empty date is invalid.
     * @memberof MonthlyCalendarComponent
     */
    openDetail(date, isValid = true) {
        if (isValid) {
            let isOpened = this.calendarWrapper.classList.contains('detail-opened');
            let prevCell = document.getElementById('cell-' + this.selectedDate);
            let cell = document.getElementById('cell-' + date);
            // If the cell does not contain hover class (invalid cell), return
            if (!cell.classList.contains('hover')) {
                return;
            }
            // If the detail-box is already opened and selected the same date, close the detail-box
            if (isOpened && this.selectedDate === date) {
                this.selectedDate = date;
                this.closeDetail();
            }
            else {
                this.selectedDate = date;
                // Emit the selected PlanDate data (it will be used in the detail-box component)
                this.planEmitter.emit(this.planDates[this.selectedDate - 1]);
                this.utils.changeDetailBox(true, prevCell, cell);
            }
        }
    }
    /**
     * Close the detail-box.
     *
     * @memberof MonthlyCalendarComponent
     */
    closeDetail() {
        let isOpened = this.calendarWrapper.classList.contains('detail-opened');
        // If the detail-box was already opened, close it.
        if (isOpened) {
            this.utils.changeDetailBox(false, null, null);
        }
    }
    /**
     * Change the month depending on the direction of the arrow clicked.
     *
     * @param {boolean} isNext If isNext is true, add a month to the original month
     * otherwise, subtract a month from it.
     * @memberof MonthlyCalendarComponent
     */
    changeMonth(isNext) {
        this.closeDetail();
        let monthToAdd = -1;
        // If isNext is true, make the monthToAdd value positive
        if (isNext) {
            monthToAdd *= -1;
        }
        let month = this.today.getMonth() + monthToAdd + 1;
        let date = new Date(this.today.getFullYear(), month, 1);
        this.changeMonthEmitter.emit(date);
        this.utils.redirectTo(`calendar/date/${this.today.getFullYear()}/${month}`);
    }
    /**
     * Go to the Edit page of the selected plan.
     *
     * @param {Plan} plan Plan object to edit.
     * @memberof MonthlyCalendarComponent
     */
    openEditPage(plan) {
        this.closeDetail();
        window.location.href = `calendar/editPlan/${plan._id}`;
    }
}
MonthlyCalendarComponent.ɵfac = function MonthlyCalendarComponent_Factory(t) { return new (t || MonthlyCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_plan_plan_service__WEBPACK_IMPORTED_MODULE_1__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MonthlyCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MonthlyCalendarComponent, selectors: [["app-monthly-calendar"]], inputs: { paramYear: "paramYear", paramMonth: "paramMonth" }, outputs: { planEmitter: "planEmitter", changeMonthEmitter: "changeMonthEmitter" }, decls: 44, vars: 3, consts: [["id", "month-title", 1, "text-center", "fw-light", "mt-5", "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-chevron-left", 3, "click"], [1, "fas", "fa-chevron-right", 3, "click"], ["id", "calendar-table", 1, "table", "table-bordered", "mx-auto"], [1, "p-2", "text-center"], [1, "date-long", "d-none", "d-md-block"], [1, "date-short", "fw-normal", "small", "d-block", "d-md-none"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "p-2 position-relative", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], [1, "p-2", "position-relative", 3, "ngClass", "id", "click"], [4, "ngVar"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "align-items-center"], [1, "mb-0", 3, "ngClass"], [1, "mt-1", "mb-0", "px-2", "plan-list", "d-md-block", "d-none"], [4, "ngFor", "ngForOf"], ["class", "plan-item text-truncate small", 3, "ngClass", 4, "ngIf"], [1, "plan-item", "text-truncate", "small", 3, "ngClass"]], template: function MonthlyCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0)(1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonthlyCalendarComponent_Template_i_click_1_listener() { return ctx.changeMonth(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonthlyCalendarComponent_Template_i_click_3_listener() { return ctx.changeMonth(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 3)(5, "thead")(6, "tr")(7, "th", 4)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 4)(13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 4)(18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Tue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 4)(23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Wed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 4)(28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 4)(33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Fri");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 4)(38, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, MonthlyCalendarComponent_tr_43_Template, 2, 3, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.monthString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0).constructor(6));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _services_ng_var_directive__WEBPACK_IMPORTED_MODULE_3__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["#calendar-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  height: 600px;\n  background-color: #3a2e5e;\n  border-color: #403763;\n  color: #9d92c5;\n}\n\n#month-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n#calendar-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n  height: 20px;\n}\n\n#calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\ntd.hover[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 220, 220, 0.245);\n  cursor: pointer;\n}\n\ntd.selected[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n\n\n.plan-list[_ngcontent-%COMP%] {\n  list-style: inside;\n  height: 55px;\n  overflow-y: auto;\n  display: block;\n  border-radius: 0;\n  max-height: 60px;\n  overflow-y: auto;\n  -ms-overflow-style: none; \n  scrollbar-width: none; \n}\n\n\n\n.plan-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.date-plan[_ngcontent-%COMP%] {\n  color: var(--purple-lightest);\n}\n\n.plan-item.list-group-item[_ngcontent-%COMP%] {\n  min-height: 27px;\n  border-color: rgba(0, 0, 0, 0.055);\n}\n\n@media screen and (max-width: 768px) {\n  #calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  #calendar-table[_ngcontent-%COMP%] {\n    \n    height: auto;\n    \n    border: none;\n    \n  }\n\n  #calendar-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: none;\n  }\n\n  #calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    height: 55px;\n  }\n\n  #calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border: none;\n  }\n\n  #month-title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  #month-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  #calendar-table[_ngcontent-%COMP%] {\n    \n    height: auto;\n    \n    border: none;\n    \n  }\n\n  #calendar-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: none;\n  }\n\n  #calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    height: 55px;\n  }\n\n  #month-title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  #month-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnRobHktY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QixFQUFFLGdCQUFnQjtFQUMxQyxxQkFBcUIsRUFBRSxZQUFZO0FBQ3JDOztBQUVBLGdEQUFnRDs7QUFDaEQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoibW9udGhseS1jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbGVuZGFyLXRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMmU1ZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDAzNzYzO1xuICBjb2xvcjogIzlkOTJjNTtcbn1cblxuI21vbnRoLXRpdGxlIGkge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNjYWxlbmRhci10YWJsZSB0aGVhZCB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4jY2FsZW5kYXItdGFibGUgdGQge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG50ZC5ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMjAsIDIyMCwgMC4yNDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRkLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbi5wbGFuLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBpbnNpZGU7XG4gIGhlaWdodDogNTVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbi5wbGFuLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRhdGUtcGxhbiB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHRlc3QpO1xufVxuXG4ucGxhbi1pdGVtLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1NSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNjYWxlbmRhci10YWJsZSB0ZCBwLFxuICAjY2FsZW5kYXItdGFibGUgdGQgYSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gICNjYWxlbmRhci10YWJsZSB7XG4gICAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNhMmU1ZTsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogY29sb3I6ICM5ZDkyYzU7ICovXG4gIH1cblxuICAjY2FsZW5kYXItdGFibGUgdHIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gICNjYWxlbmRhci10YWJsZSB0ZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuXG4gICNjYWxlbmRhci10YWJsZSB0aCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgI21vbnRoLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAjbW9udGgtdGl0bGUgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICNjYWxlbmRhci10YWJsZSB7XG4gICAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNhMmU1ZTsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogY29sb3I6ICM5ZDkyYzU7ICovXG4gIH1cblxuICAjY2FsZW5kYXItdGFibGUgdHIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gICNjYWxlbmRhci10YWJsZSB0ZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuXG4gICNtb250aC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgI21vbnRoLXRpdGxlIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3556);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 1229);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 398);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule,
            mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__.MdbRippleModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule,
        mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__.MdbRippleModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent] }); })();


/***/ }),

/***/ 1229:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "bg-dark", "text-white", "text-center", "text-lg-start", "float-end"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-md-6", "mb-4", "mb-md-0"], [1, "d-flex", "justify-content-center", "mb-3"], ["href", "https://www.linkedin.com/in/heesoo-lim/", 1, "rounded-circle", "contact-icon"], [1, "fab", "fa-linkedin-in", "text-dark"], ["href", "https://github.com/HeesooLim", 1, "rounded-circle", "contact-icon"], [1, "fab", "fa-github-alt", "text-dark"], ["href", "mailto:heesoo474@gmail.com", 1, "rounded-circle", "contact-icon"], [1, "fas", "fa-envelope", "text-dark"], ["href", "tel:123-345-4353", 1, "rounded-circle", "contact-icon"], [1, "fas", "fa-phone", "text-dark"], [1, "text-center", "info-line", "mb-1"], ["href", "/login", 1, "text-white"], [1, "text-muted", "mx-1"], ["href", "/register", 1, "text-white"], [1, "text-white-50", "fw-light", "text-center", "copyright-line", "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 13)(14, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A9 2022 Heesoo Lim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 246px;\n  width: 100%;\n  transition: 0.5s;\n}\n\n.contact-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(255, 255, 255);\n  margin-right: 13px;\n}\n\n.contact-icon[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n.contact-icon[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 0 0 0 4px var(--purple-light);\n}\n\n.contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGhlaWdodDogMjQ2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY29udGFjdC1pY29uIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuXG4uY29udGFjdC1pY29uOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNvbnRhY3QtaWNvbjpob3ZlciB7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmZmZmZmY2U7ICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4uY29udGFjdC1pY29uIGkge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmZvb3RlciAuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 3556:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);






function HeaderComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(utils, userService, router) {
        this.utils = utils;
        this.userService = userService;
        this.router = router;
        // Subscribe to the BehaviorSubject to check if the user is currently logged in
        this.userService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value.loggedIn;
            this.loginName = value.user;
        });
        this.todayYear = new Date().getFullYear();
        this.todayMonth = new Date().getMonth() + 1;
        this.todayDate = new Date().getDate();
    }
    ngOnInit() {
        // Get navbar element to change its colour when scroll down
        let navbar = document.querySelector('nav.navbar');
        // When the user scrolls down or up
        window.onscroll = () => {
            // If current scroll bar's position is greater than or equal to the navbar's height
            if (document.body.scrollTop * 3 >= navbar.clientHeight || document.documentElement.scrollTop * 3 >= navbar.clientHeight) {
                // Set the value to make the background dark
                this.isScrollDowned = true;
            }
            else {
                // Set the value to make the background dark
                this.isScrollDowned = false;
            }
            // Change the navigation bar colour based on the scroll position and the visibility of the nav menu
            this.changeNavbarColorDark(this.isScrollDowned || this.isMenuVisible);
        };
    }
    /**
     * Method executed when the menu button is clicked in a small screen.
     * - Change the background of the navbar.
     * - Open or close the navbar menu.
     *
     * @memberof HeaderComponent
     */
    onClickNavbarMenu() {
        // nav menu to change visibility
        let navMenu = document.querySelector('#navbarSupportedContent');
        // Change the visibility of the menu
        this.utils.toggleCollapse(navMenu);
        // Set the value if the nav menu is visible
        this.isMenuVisible = document.querySelector('#navbarSupportedContent').classList.contains('show');
        // Change the navigation bar colour based on the scroll position and the visibility of the nav menu
        this.changeNavbarColorDark(this.isScrollDowned || this.isMenuVisible);
    }
    /**
     * Change the colour of the navbar to dark or transparent
     *
     * @param {boolean} isDark If this value is true, navbar's colour is changed to dark.
     * @memberof HeaderComponent
     */
    changeNavbarColorDark(isDark) {
        // Get navbar element to change its colour when scroll down
        let navbar = document.querySelector('nav.navbar');
        // If is dark, change its colour to dark
        if (isDark) {
            navbar.classList.add("bg-dark");
            navbar.classList.remove("bg-transparent");
        }
        else {
            navbar.classList.remove("bg-dark");
            navbar.classList.add("bg-transparent");
        }
    }
    logout() {
        this.userService.tryLogout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-transparent", "shadow-0", "fixed-top"], [1, "container-fluid"], ["href", "/", 1, "navbar-brand"], ["src", "assets\\img\\logo-with-bg.png", "alt", "logo of Planify", "width", "100"], ["type", "button", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-bars"], ["id", "navbarSupportedContent", "mdbCollapse", "", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0", "align-items-center"], [1, "nav-item"], ["aria-current", "page", "href", "/", 1, "nav-link", "active"], [1, "nav-link", 3, "href"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "nav-item", "ms-lg-4"], ["class", "btn btn-sm btn-outline-warning", "href", "login", "aria-current", "page", "mdbRipple", "", 4, "ngIf"], ["class", "btn btn-sm btn-outline-warning", "aria-current", "page", "mdbRipple", "", 3, "click", 4, "ngIf"], ["href", "login", "aria-current", "page", "mdbRipple", "", 1, "btn", "btn-sm", "btn-outline-warning"], ["aria-current", "page", "mdbRipple", "", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.onClickNavbarMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HeaderComponent_a_18_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "calendar/date/", ctx.todayYear, "/", ctx.todayMonth, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loginName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__.MdbRippleDirective], styles: ["nav[_ngcontent-%COMP%] {\n  transition: width 0.5s, margin 0.5s, background-color 0.1s linear;\n  left: 0;\n  width: 100%;\n  font-family: \"Red Hat Display\", sans-serif;\n}\n\nnav.bg-dark[_ngcontent-%COMP%] {\n  transition: width 0.5s, margin 0.5s, background-color 0.1s linear;\n}\n\n\n\nnav.detail-opened[_ngcontent-%COMP%] {\n  \n  transition: width 0.5s, margin 0.5s;\n}\n\n\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  image-rendering: -webkit-optimize-contrast;\n}\n\n@media screen and (max-width: 1200px) {\n  nav.detail-opened[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  nav[_ngcontent-%COMP%] {\n    transition: background-color 0s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQWlFO0VBQ2pFLE9BQU87RUFDUCxXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUVBQWlFO0FBQ25FOztBQUVBLGtDQUFrQzs7QUFDbEM7RUFDRSxtQ0FBbUM7RUFDbkMsbUNBQW1DO0FBQ3JDOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIG1hcmdpbiAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUmVkIEhhdCBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XG59XG5cbm5hdi5iZy1kYXJrIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cywgbWFyZ2luIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XG59XG5cbi8qIHdoZW4gdGhlIGRldGFpbCBib3ggaXMgb3BlbmVkICovXG5uYXYuZGV0YWlsLW9wZW5lZCB7XG4gIC8qIGxlZnQ6IHZhcigtLWRldGFpbC1ib3gtd2lkdGgpOyAqL1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCBtYXJnaW4gMC41cztcbn1cblxuLyogcmVzb2x2ZSBibHVycnkgaW1hZ2UgcHJvYmxlbSAoaGFwcGVucyBpbiBDaHJvbWUgdW5saWtlIEZpcmVmb3gpICovXG4ubmF2YmFyLWJyYW5kIGltZyB7XG4gIGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIG5hdi5kZXRhaWwtb3BlbmVkIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIG5hdiB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);



class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.todayYear = new Date().getFullYear();
        this.todayMonth = new Date().getMonth() + 1;
        this.todayDate = new Date().getDate();
    }
    ngOnInit() {
        // Check if the user is logged in or not in the homePage
        this.userService.isAuthenticated();
        this.userService.getData()
            .subscribe(req => {
            console.log('we got this: ', req.body);
            this.user = req.body;
            this.userName = this.user.firstName;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-profile"]], decls: 10, vars: 3, consts: [["id", "home-wrapper", 1, "w-100", "vh-100", "d-flex", "align-items-center"], [1, "row", "justify-content-end", "w-100", "mx-0"], ["id", "hero-bg-half", 1, "col-lg-5", "col-sm-8", "d-flex", "align-items-center", "justify-content-center"], [1, ""], [1, "fw-light"], [1, "fw-lighter"], ["id", "hero-button", "mdbRipple", "", 1, "btn", "btn-lg", "font-weight-light", "mt-4", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ready to start your plan?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Build Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hi ", ctx.userName, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "calendar/date/", ctx.todayYear, "/", ctx.todayMonth, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_2__.MdbRippleDirective], styles: ["#home-wrapper[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/rain-forest-purple.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  padding: 0;\n}\n\n#hero-layer[_ngcontent-%COMP%] {\n  z-index: -2;\n  overflow: hidden;\n}\n\n#hero-bg-half[_ngcontent-%COMP%] {\n  background-color: var(--purple-dark);\n  height: 100vh;\n  padding: 90px 0;\n}\n\n#hero-bg-half[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #hero-bg-half[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--purple-lightest);\n}\n\n#hero-button[_ngcontent-%COMP%] {\n  background-color: var(--purple-blue);\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n@media screen and (max-width: 576px) {\n  #hero-bg-half[_ngcontent-%COMP%] {\n    height: 30%;\n  }\n\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLDJEQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7S0FFRztBQUNMIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNoZXJvLWltZyB7XG4gIG9wYWNpdHk6IC4zO1xufSAqL1xuXG4jaG9tZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvcmFpbi1mb3Jlc3QtcHVycGxlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNoZXJvLWxheWVyIHtcbiAgei1pbmRleDogLTI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNoZXJvLWJnLWhhbGYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDkwcHggMDtcbn1cblxuI2hlcm8tYmctaGFsZiBoMSxcbiNoZXJvLWJnLWhhbGYgaDQge1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0ZXN0KTtcbn1cblxuI2hlcm8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWJsdWUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgI2hlcm8tYmctaGFsZiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAvKiAjaG9tZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH0gKi9cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7813:
/*!*******************************************!*\
  !*** ./src/app/models/plan-date.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDate": () => (/* binding */ PlanDate)
/* harmony export */ });
class PlanDate {
    constructor(year, month, date, plans = []) {
        this.planCount = 0;
        this.year = year;
        this.month = month;
        this.date = date;
        this.plans = plans;
        if (plans.length > 0) {
            this.planCount = plans.length;
        }
    }
    addPlan(plan) {
        this.planCount++;
        // this.planCount += plan.subPlans.length;
        this.plans.push(plan);
    }
}


/***/ }),

/***/ 6178:
/*!**************************************!*\
  !*** ./src/app/models/plan.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plan": () => (/* binding */ Plan),
/* harmony export */   "SubPlan": () => (/* binding */ SubPlan)
/* harmony export */ });
class Plan {
    constructor(id, userId, title, description, dueDate, progress, priority) {
        this._id = id;
        this.userId = userId;
        // this.date = date;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.progress = progress;
        this.priority = priority;
        this.subPlans = [];
    }
    setProgress(progress) {
        this.progress = progress;
    }
    addSubplan(subPlan) {
        this.subPlans.push(subPlan);
    }
    addSubplans(subPlans) {
        this.subPlans.push(...subPlans);
    }
}
class SubPlan {
    constructor(title, description, priority, isDone = false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.isDone = isDone;
    }
}


/***/ }),

/***/ 8880:
/*!***********************************!*\
  !*** ./src/app/services/Utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _models_plan_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/plan.model */ 6178);
/* harmony import */ var _models_plan_date_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/plan-date.model */ 7813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class Utils {
    constructor(router) {
        this.router = router;
    }
    /**
     * A method to toggle the collapse class.
     *
     * @param {*} element Element to toggle the class 'show'.
     * @memberof Utils
     */
    toggleCollapse(element) {
        element.classList.toggle("show");
    }
    /**
     * A method that returns a long or short date string of the Date object.
     *
     * @param {Date} date Date to convert to string.
     * @param {boolean} [isLong=true] If isLong is true, return the long version of the date string,
     * otherwise return the short version of the date string.
     * @return {String} Date string to display.
     * @memberof Utils
     */
    getDateString(date, isLong = true) {
        let dayName;
        let monthName;
        if (isLong) { // If isLong is true, set the dayName and monthName to the long string
            dayName = date.toLocaleString("default", { weekday: "long" });
            monthName = date.toLocaleString('default', { month: 'long' });
        }
        else { // Otherwise set the dayName and monthName to the short string
            dayName = date.toLocaleString("default", { weekday: "short" });
            monthName = date.toLocaleString('default', { month: 'short' });
        }
        // Concatenate and create the full date string
        let dateString = `${dayName}, ${monthName} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`;
        return dateString;
    }
    /**
     * Get all PlanDates in the month.
     *
     * @param {Plan[]} data Plans that needs to be inserted into the PlanDate.
     * @param {number} year Year that the PlanDate is in.
     * @param {number} month Month that the PlanDate is in.
     * @return {PlanDate[]} Return every PlanDate in the selected month.
     * @memberof Utils
     */
    getPlanDatesInMonth(data, year, month) {
        let startDate = new Date(year, month, 1);
        // Passing 0 as the last parameter will return the last of day in the last month, so 1 is added to the chosen month
        let numOfDays = new Date(year, month + 1, 0).getDate();
        let planDates = this.getNumOfPlanDates(data, startDate, numOfDays);
        return planDates;
    }
    /**
     * Get the specified number of plandate objects starting from the date.
     *
     * @param {Plan[]} data Plan objects to use for the PlanDate object.
     * @param {Date} date Date to start the PlanDate object.
     * @param {number} numOfDays Number of PlanDate objects to create from the starting date.
     * @return {*}
     * @memberof Utils
     */
    getNumOfPlanDates(data, date, numOfDays) {
        let currDate = new Date(date.getTime());
        let planDates = [];
        for (let i = 0; i < numOfDays; i++) {
            let plans = [];
            data.forEach(plan => {
                let dueDate = new Date(plan.dueDate);
                if (dueDate.getFullYear() === currDate.getFullYear() &&
                    dueDate.getMonth() === currDate.getMonth() &&
                    dueDate.getDate() === currDate.getDate()) {
                    plans.push(plan);
                }
            });
            planDates[i] = new _models_plan_date_model__WEBPACK_IMPORTED_MODULE_1__.PlanDate(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), plans);
            currDate.setDate(currDate.getDate() + 1);
        }
        console.log(planDates);
        return planDates;
    }
    /**
     * Get a PlanDate object in the date.
     *
     * @param {Plan[]} data Plans to add to the PlanDate.
     * @param {Date} date Date to add to the PlanDate.
     * @return {PlanDate} Return the PlanDate after adding the plan and the date
     * @memberof Utils
     */
    getPlanDate(data, date) {
        console.log(data);
        // Get the PlanDate
        let planDates = this.getNumOfPlanDates(data, date, 20);
        console.log(planDates);
        // Return the first PlanDate
        return planDates[0];
    }
    /**
     * Calculate the target plan's progress using its subplans and return the progress value.
     *
     * @param {Plan} plan Plan object to calcualte its progress.
     * @return {number} Return the calculated progress of the plan
     * @memberof Utils
     */
    calculateProgress(plan) {
        let subPlans = plan.subPlans; // Get subplans
        let progress = 0; // Progress is 0 initially
        // If there is no subplan and progress is 100, return 100
        if (subPlans.length == 0 && plan.progress == 100) {
            return 100;
        }
        for (const sp of subPlans) {
            if (sp.isDone) {
                progress += 100 / subPlans.length;
            }
        }
        console.log("calculated progress!!" + Math.round(progress));
        return Math.round(progress);
    }
    /**
     * Set the static Subplan value to use in the modal.
     *
     * @static
     * @param {SubPlan} subPlan SubPlan to set.
     * @memberof Utils
     */
    static setSubPlan(subPlan) {
        this.subPlan = subPlan;
    }
    /**
     * Get the static Subplan value to use in the modal.
     *
     * @static
     * @return {SubPlan} Return the static SubPlan value.
     * @memberof Utils
     */
    static getSubPlan() {
        // If null, return an empty subplan
        if (!this.subPlan) {
            return new _models_plan_model__WEBPACK_IMPORTED_MODULE_0__.SubPlan("", "", 0, false);
        }
        return this.subPlan;
    }
    /**
     * Open or close the detail box in the Calendar page.
     *
     * @param {boolean} isOpen If this value is true, open the detail box. Otherwise, close it.
     * @param {HTMLElement} prevCell The cell previously selected. (This can be null)
     * @param {HTMLElement} cell The cell currently selected.
     * @memberof Utils
     */
    changeDetailBox(isOpen, prevCell, cell) {
        // Get elements
        let calendarWrapper = document.getElementById('calendar-wrapper');
        let detailBox = document.querySelector('#detail-box');
        let navbar = document.querySelector('nav.navbar');
        let footer = document.querySelector('footer');
        let detailOverlay = document.querySelector('#detail-box-overlay');
        let cells = document.querySelectorAll('#calendar-table td');
        if (isOpen) { // If true, add opened and detil-opened classes to the elements
            calendarWrapper.classList.add('detail-opened');
            detailBox.classList.add('opened');
            footer.classList.add('detail-opened');
            navbar.classList.add('detail-opened');
            detailOverlay.classList.add('opened');
            this.hideScroll(true);
            if (prevCell) { // If the previously selected cell exists, remove the selected class
                prevCell.classList.remove('selected');
            }
            cell.classList.add('selected');
        }
        else { // Otherwise, remove opened and detil-opened classes from the elements
            calendarWrapper.classList.remove('detail-opened');
            detailBox.classList.remove('opened');
            footer.classList.remove('detail-opened');
            navbar.classList.remove('detail-opened');
            detailOverlay.classList.remove('opened');
            this.hideScroll(false);
            // Remove selected class from all cells
            cells.forEach(cell => cell.classList.remove('selected'));
        }
    }
    /**
     * Enable or disable scroll by toggling the class 'scroll-disabled' on the body.
     * @param {boolean} isHidden This value is true if the scroll is supposed to be visible.
     *
     * @memberof Utils
     */
    hideScroll(isHidden) {
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        if (isHidden) { // Hide the scrollbar
            body.classList.add('scroll-disabled');
            html.classList.add('scroll-disabled');
        }
        else { // Enable the scrollbar
            body.classList.remove('scroll-disabled');
            html.classList.remove('scroll-disabled');
        }
    }
    /**
     * Change the input element's status to valid or invalid.
     * If the input is empty, display the error message.
     *
     * @param {HTMLInputElement} inputEl Input element to check the entered value.
     * @param {HTMLElement} errorEl Error message element to display or hide.
     * @param {boolean} isValid If the value is valid or not.
     * @memberof Utils
     */
    changeInputStatus(inputEl, errorEl, isValid) {
        // If input element exist, add or remove the class
        if (inputEl) {
            if (!isValid) {
                inputEl.classList.add('invalid');
            }
            else {
                inputEl.classList.remove('invalid');
            }
        }
        // If error message element exist, add or remove the class
        if (errorEl) {
            if (!isValid) {
                errorEl.classList.add('invalid');
            }
            else {
                errorEl.classList.remove('invalid');
            }
        }
    }
    // /**
    //  * Display a flash message.
    //  *
    //  * @param {string} message Message to display.
    //  * @param {string} cssClass CSS style to apply.
    //  * @memberof Utils
    //  */
    // showFlash(message: string, cssClass: string) {
    //   // 2nd param (optional) - object with options.
    //   this.flashMessage.show(message, { cssClass: cssClass, timeout: 2000 });
    // }
    /**
     * Check if str1 includes any substring of str2.
     * Example usage: check whether password includes email or name.
     *
     * @param {string} str1 String to check if substring of str2 is included.
     * @param {string} str2 String to compare to str1.
     * @param {number} substrLen Length of substring which will be applid to str2.
     * @return {*}  {boolean}
     * @memberof Utils
     */
    strIncludesStr(str1, str2, substrLen) {
        // Both strings to lowercase
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        // If the second string's length is less than or equal to the substring length(invalid), return false
        if (str2.length <= substrLen)
            return false;
        // For loop
        for (let i = 0; i < str2.length - substrLen; i++) {
            // Substring the second string from (i) to (i + length)
            let substring = str2.substring(i, i + substrLen);
            // If the first string includes the substring of the second string, return true
            if (str1.includes(substring))
                return true;
        }
    }
    /**
     * Redirect to the uri and refresh the components.
     *
     * @param {string} uri URI to redirect to.
     * @memberof Utils
     */
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
Utils.fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
Utils.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
Utils.subPlan = null;
Utils.ɵfac = function Utils_Factory(t) { return new (t || Utils)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
Utils.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Utils, factory: Utils.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 901:
/*!***********************************************************!*\
  !*** ./src/app/services/auth/auth-intercepter.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthIntercepterService": () => (/* binding */ AuthIntercepterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AuthIntercepterService {
    constructor() { }
    // Intercept the request and add the 'withCredentials' option.
    intercept(req, next) {
        if (req.headers.get('Authorization') == null) {
            let tokenizedReq = req.clone({
                withCredentials: true
            });
            //Code to add Authorization header
            return next.handle(tokenizedReq);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthIntercepterService.ɵfac = function AuthIntercepterService_Factory(t) { return new (t || AuthIntercepterService)(); };
AuthIntercepterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthIntercepterService, factory: AuthIntercepterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7724:
/*!***********************************************!*\
  !*** ./src/app/services/error-interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptorService": () => (/* binding */ ErrorInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class ErrorInterceptorService {
    constructor(router) {
        this.router = router;
    }
    // Intercept the http request and handle the error
    intercept(req, next) {
        console.log("in ErrorHandler - Interceptor");
        return next.handle(req)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => this.handleError(err)));
    }
    handleError(error) {
        if (error.status === 0) {
            console.log('error ' + error.message);
            this.router.navigate(['**']);
        }
        // Handle the anauthorized error
        else if (error.status == 401) {
            console.log('error ' + error.message);
            this.router.navigate(['login']);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.log('error ' + error.message);
            console.error(`Backend error ${error.status}\n body: `, error.error);
            this.router.navigate(['**']);
        }
        // Return an observable with a user-facing error message.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Something bad happened; please try again later.');
    }
}
ErrorInterceptorService.ɵfac = function ErrorInterceptorService_Factory(t) { return new (t || ErrorInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ErrorInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptorService, factory: ErrorInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8474:
/*!**********************************************!*\
  !*** ./src/app/services/ng-var.directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VarDirective": () => (/* binding */ VarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class VarDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set ngVar(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
}
VarDirective.ɵfac = function VarDirective_Factory(t) { return new (t || VarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
VarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VarDirective, selectors: [["", "ngVar", ""]], inputs: { ngVar: "ngVar" } });


/***/ }),

/***/ 1350:
/*!***********************************************!*\
  !*** ./src/app/services/plan/plan.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanService": () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class PlanService {
    constructor(http) {
        this.http = http;
        this.year = '2021';
        this.month = '5';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response'
        };
    }
    /**
     * Get all plans in the given month.
     *
     * @return {*}  {Observable<Plan[]>} Return the Observable of Plan array.
     * @memberof PlanService
     */
    getData() {
        return this.http.get(`/plan/${this.year}/${this.month.padStart(2, '0')}`);
    }
    /**
     * Get all plans belong to the user in the given month.
     *
     * @param {Date} date Date that contains the month to search.
     * @return {*}  {Observable<HttpResponse<Plan[]>>} Return the Observable of full HttpResponse of the Plan array.
     * @memberof PlanService
     */
    getDataByMonth(date) {
        let month = date.getMonth() + 1;
        console.log(`/plan/${date.getFullYear()}/${month}`);
        return this.http.get(`/plan/${date.getFullYear()}/${month}`, this.httpOptions);
    }
    /**
     * Get the plans belong to the user in the given date.
     *
     * @param {Date} date Date that contains the date to search.
     * @return {*} {Observable<HttpResponse<Plan[]>>} Return the Observable of full HttpResponse of the Plan array.
     * @memberof PlanService
     */
    getDataByDate(date) {
        let month = date.getMonth() + 1;
        console.log(`/plan/${date.getFullYear()}/${month}/${date.getDate()}`);
        return this.http.get(`/plan/${date.getFullYear()}/${month}/${date.getDate()}`, this.httpOptions);
    }
    /**
     * Get a plan by the planId.
     *
     * @param {string} id Plan ID to get.
     * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the Plan.
     * @memberof PlanService
     */
    getDataById(id) {
        return this.http.get(`/plan/edit/${id}`, this.httpOptions);
    }
    /**
     * Get plans between two dates.
     *
     * @param {Date} date Starting date to display.
     * @param {number} days number of days to display from the starting date
     * @return {*}  {Observable<HttpResponse<Plan>>}
     * @memberof PlanService
     */
    getDataByDateAndDays(date, days) {
        //router.get("/:year/:month/:date/:day", auth.required, planController.getDataByDateandDays);
        let month = date.getMonth() + 1;
        console.log(`/plan/${date.getFullYear()}/${month}/${date.getDate()}/${days}`);
        return this.http.get(`/plan/${date.getFullYear()}/${month}/${date.getDate()}/${days}`, this.httpOptions);
    }
    /**
     * Update a plan sending the PUT request.
     *
     * @param {Plan} plan Plan object to update.
     * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the Plan.
     * @memberof PlanService
     */
    updatePlan(plan) {
        /* put(baseUrl, data) */
        /* response type: Plan */
        console.log('trying to update the plan!' + JSON.stringify(plan));
        return this.http.put(`/plan/${plan._id}`, JSON.stringify(plan), this.httpOptions);
    }
    /**
     * Add a plan to the database sending the POST request.
     *
     * @param {*} data Plan object to add.
     * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the added plan.
     * @memberof PlanService
     */
    addPlan(plan) {
        return this.http.post('/plan', JSON.stringify(plan), this.httpOptions);
    }
    /**
     * Add a plan to the database sending the POST request.
     *
     * @param {*} id ID of the plan to delete.
     * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the deleted plan.
     * @memberof PlanService
     */
    deletePlan(id) {
        return this.http.delete(`/plan/${id}`, this.httpOptions);
    }
}
PlanService.ɵfac = function PlanService_Factory(t) { return new (t || PlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
PlanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlanService, factory: PlanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        // Http option that will be used for the request
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }),
            withCredentials: true,
            observe: 'response' // Observes the response object
        };
    }
    /**
     * Check if the user is already logged in or not.
     *
     * @return {Promise}  Return the boolean(True if user is logged in) type of Promise.
     * @memberof UserService
     */
    isAuthenticated() {
        return this.http.post('/user/authenticated', this.httpOptions).toPromise()
            .then((a) => {
            console.log(a);
            if (Boolean(a.authenticated)) {
                // Set the value of the isUserLoggedIn
                this.isUserLoggedIn.next({ loggedIn: a.authenticated, user: a.user });
                return a.authenticated;
            }
        });
    }
    /**
     * Get the user currently logged in.
     *
     * @return {*} Return the Observable of the HttpResponse
     * @memberof UserService
     */
    getData() {
        return this.http.get('/user', this.httpOptions);
    }
    /**
     * Add a new user to the database by sending a post request.
     *
     * @param {*} data Data of the Registration form.
     * @return {User} Data of the registered user.
     * @memberof UserService
     */
    addUser(data) {
        console.log(JSON.stringify(data));
        return this.http.post('/user/register', JSON.stringify(data), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json') });
    }
    /**
     * Get a user by the email.
     *
     * @param {*} email The email of the user to find.
     * @return {User} Return a user that has the given email.
     * @memberof UserService
     */
    getUserByEmail(email) {
        console.log(JSON.stringify(email));
        return this.http.get(`/user/${email}`);
    }
    /**
     * Login and get the user logged in.
     *
     * @param {*} data The data of the login form.
     * @return {Observable<any>}  Return the observable that contains the value of "loggedIn" and "user"(first name)
     * @memberof UserService
     */
    tryLogin(data) {
        this.http.post('/user/login', JSON.stringify(data), this.httpOptions)
            .toPromise()
            .then((a) => {
            console.log('post done!');
            this.isUserLoggedIn.next({ loggedIn: true, user: a.body.firstName });
            this.router.navigate(['']);
        });
        return;
    }
    /**
     * Logout and get the user just logged out.
     *
     * @return {Observable<any>}  Return the observable that contains the value of "loggedIn" and "user"(first name)
     * @memberof UserService
     */
    tryLogout() {
        this.http.post('/user/logout', this.httpOptions)
            .toPromise()
            .then((a) => {
            this.isUserLoggedIn.next({ loggedIn: false, user: a.firstName });
            this.router.navigate(['login']);
        });
        return;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7559:
/*!*************************************************************************!*\
  !*** ./src/app/user/email-verification/email-verification.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationComponent": () => (/* binding */ EmailVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/user/user.service */ 9709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function EmailVerificationComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EmailVerificationComponent {
    constructor(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap; // Get params
        const email = routeParams.get('email'); // Plan ID to get the chosen plan data
        // Find the use using the email
        this.userService.getUserByEmail(email).subscribe(data => {
            // If the user already verified the email, set the message
            if (data.confirmed) {
                this.message = "Your email is already verified.";
                this.email = data.email;
                this.isConfirmed = true;
            }
            else {
                this.message = "Please verify your email.";
                this.email = data.email;
                this.isConfirmed = false;
            }
        });
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
EmailVerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 5, vars: 3, consts: [["href", "/login", 4, "ngIf"], ["href", "/login"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmailVerificationComponent_a_4_Template, 2, 0, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConfirmed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4270:
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils */ 8880);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);







class LoginComponent {
    constructor(utils, userService, router) {
        this.utils = utils;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        // Check whether the user is already logged in
        this.userService.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                // If already logged in, navigate to the home page
                this.router.navigate(['']);
            }
        });
        // Login form
        this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
        });
        // Checkbox to show or hide the password
        let showPwCheckbox = document.querySelector('#cbShowPassword');
        // EventListener on click (Show or hide password)
        showPwCheckbox.addEventListener('click', () => {
            if (showPwCheckbox.checked)
                this.passwordInput.type = 'text';
            else
                this.passwordInput.type = 'password';
        });
        // Get input elements
        this.passwordInput = document.querySelector('#pwPassword');
        this.emailInput = document.querySelector('#elEmail');
    }
    /**
     * Register a user when the form is submitted.
     *
     * @param {FormGroup} form Form value to insert.
     * @memberof LoginComponent
     */
    login(form) {
        // Get the data and set the value
        let data = form.value;
        // Validate inputs and return if any data is invalid
        if (!this.validateInputs(data))
            return;
        this.userService.tryLogin(data);
    }
    get password() {
        return this.validationForm.get('password');
    }
    get email() {
        return this.validationForm.get('email');
    }
    /**
     * Check if every input is filled and display error message for the empty inputs.
     *
     * @param {*} formData Form data to check for the empty input.
     * @return {*}  {boolean} Return true if every input is valid.
     * @memberof RegisterComponent
     */
    validateInputs(formData) {
        // If data's property is null or empty, store false
        let isPasswordValid = formData.password != null && formData.password != '';
        let isEmailValid = formData.email != null && formData.email != '';
        this.utils.changeInputStatus(this.passwordInput, null, isPasswordValid);
        this.utils.changeInputStatus(this.emailInput, null, isEmailValid);
        // this.utils.showFlash('Plese complete the form.', 'flash-login');
        // Check whether the input is valid and add or remove the class 'invalid'
        // If any of input is invalid, return false
        if (!isPasswordValid || !isEmailValid)
            return false;
        // Otherwise, return true
        return true;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 1, consts: [["id", "login-wrapper", 1, ""], ["id", "login-container", 1, "mx-auto", "p-4", "shadow-lg", 3, "formGroup", "ngSubmit"], ["src", "assets/img/logo-icon-with-bg-light.png", "alt", "logo icon of planify", "id", "logo-img", "width", "150", 1, "d-block", "mx-auto", "mt-5"], ["id", "welcome-heading", 1, "text-red-hat", "text-center", "mt-4"], ["src", "assets/img/logo.png", "alt", "logo of planify", "width", "110", "id", "logo-text-img", 1, "mb-2"], [1, "text-center", "text-roboto", "fw-light", "mt-4", "welcome-desc"], ["id", "email-container", 1, "mt-4", "position-relative"], ["type", "email", "id", "elEmail", "placeholder", "Email", "formControlName", "email", 1, "w-100", "p-2"], ["id", "password-container", 1, "mt-3", "position-relative"], ["type", "password", "id", "pwPassword", "placeholder", "Password", "formControlName", "password", 1, "w-100", "p-2"], [1, "checkbox-container", "d-inline-block", "mt-3"], ["type", "checkbox", "value", "true", "id", "cbShowPassword"], [1, "checkbox-checkmark"], ["href", "#", "id", "forgot-password-link", 1, "d-block", "mt-2"], ["type", "submit", "id", "login-btn", "mdbRipple", "", 1, "btn", "w-100", "fw-light", "mt-3"], ["href", "/register", "id", "register-btn", "mdbRipple", "", 1, "btn", "w-100", "fw-light", "mt-2", "mb-3"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(ctx.validationForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text when an unknown printer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Show password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validationForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__.MdbRippleDirective], styles: ["hr[_ngcontent-%COMP%] {\n  background-color: var(--gray-lightest);\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n  image-rendering: -webkit-optimize-contrast;\n}\n\n#login-wrapper[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/night-scenery.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 100px 0 150px 0;\n}\n\n#login-container[_ngcontent-%COMP%] {\n  width: 400px;\n  border-radius: 20px;\n  background-color: var(--purple-dark);\n}\n\n#welcome-heading[_ngcontent-%COMP%], .welcome-desc[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n}\n\n.welcome-desc[_ngcontent-%COMP%] {\n  line-height: 1.4;\n  font-size: 12px;\n}\n\n\n\n#email-container[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  color: var(--purple-light);\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  content: \"\\f007\";\n  font-weight: 900;\n}\n\n\n\n#password-container[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  color: var(--purple-light);\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  content: \"\\f023\";\n  font-weight: 900;\n}\n\n#email-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #password-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 37px !important;\n}\n\n.password-eye[_ngcontent-%COMP%] {\n  right: 12px;\n  top: 12px;\n  color: var(--purple-light);\n}\n\n#forgot-password-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--purple-light);\n}\n\n#forgot-password-link[_ngcontent-%COMP%]:hover {\n  color: rgb(183, 171, 207);\n}\n\n#login-btn[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n  color: var(--gray-lightest);\n}\n\n#register-btn[_ngcontent-%COMP%] {\n  background-color: var(--purple-light);\n  color: var(--gray-lightest);\n}\n\n.pw-rules[_ngcontent-%COMP%] {\n  list-style: none;\n  background-color: var(--purple-darkest);\n  color:rgb(184, 69, 69);\n  font-size: 13px;\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  font-size: 13px;\n  color:var(--purple-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUEscUVBQXFFOztBQUNyRTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWxpZ2h0ZXN0KTtcbn1cblxuLyogcmVzb2x2ZSBibHVycnkgaW1hZ2UgcHJvYmxlbSAoaGFwcGVucyBpbiBDaHJvbWUsIG5vdCBpbiBGaXJlZm94KSAqL1xuaW1nIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xufVxuXG4jbG9naW4td3JhcHBlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL25pZ2h0LXNjZW5lcnkuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAxMDBweCAwIDE1MHB4IDA7XG59XG5cbiNsb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcbn1cblxuI3dlbGNvbWUtaGVhZGluZyxcbi53ZWxjb21lLWRlc2Mge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbi53ZWxjb21lLWRlc2Mge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIEVtYWlsIGljb24gKi9cbiNlbWFpbC1jb250YWluZXI6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiAxMnB4O1xuICBjb250ZW50OiBcIlxcZjAwN1wiO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4vKiBQYXNzd29yZCBpY29uICovXG4jcGFzc3dvcmQtY29udGFpbmVyOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogMTJweDtcbiAgY29udGVudDogXCJcXGYwMjNcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2VtYWlsLWNvbnRhaW5lciBpbnB1dCxcbiNwYXNzd29yZC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDM3cHggIWltcG9ydGFudDtcbn1cblxuLnBhc3N3b3JkLWV5ZSB7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jZm9yZ290LXBhc3N3b3JkLWxpbmsge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jZm9yZ290LXBhc3N3b3JkLWxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDE4MywgMTcxLCAyMDcpO1xufVxuXG4jbG9naW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWdyYXkpO1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbiNyZWdpc3Rlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbi5wdy1ydWxlcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgY29sb3I6cmdiKDE4NCwgNjksIDY5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOnZhcigtLXB1cnBsZS1saWdodCk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2859:
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/Utils */ 8880);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);







class RegisterComponent {
    constructor(utils, userService, router) {
        this.utils = utils;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        // Check whether the user is already logged in
        this.userService.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                // Navigate to the home page if already logged in
                this.router.navigate(['']);
            }
        });
        // Register form
        this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
        });
        // Get all input elements and password rule ul
        this.passwordInput = document.querySelector('#pwPassword');
        this.firstNameInput = document.querySelector('#txtFirstName');
        this.lastNameInput = document.querySelector('#txtLastName');
        this.emailInput = document.querySelector('#elEmail');
        let pwRulesUl = document.querySelector('ul.pw-rules');
        // Checkbox to show or hide the password
        let showPwCheckbox = document.querySelector('#cbShowPassword');
        // EventListener on click (Show or hide password)
        showPwCheckbox.addEventListener('click', () => {
            if (showPwCheckbox.checked)
                this.passwordInput.type = 'text';
            else
                this.passwordInput.type = 'password';
        });
        // Display the password rules ul
        let showPwGuide = () => {
            if (!pwRulesUl.classList.contains('d-block')) {
                pwRulesUl.classList.add('d-block');
            }
            pwRulesUl.classList.remove('d-none');
        };
        // Hide the password rules ul
        let hidePwGuide = () => {
            if (!pwRulesUl.classList.contains('d-none')) {
                pwRulesUl.classList.add('d-none');
            }
            pwRulesUl.classList.remove('d-block');
        };
        // Add onfocus event listener to each input to show or hide the password guide ul
        this.passwordInput.addEventListener('focus', showPwGuide, this.validatePassword());
        // password guide ul gets hidden when the input other than password is focused
        this.firstNameInput.addEventListener('focus', hidePwGuide);
        this.lastNameInput.addEventListener('focus', hidePwGuide);
        this.emailInput.addEventListener('focus', hidePwGuide);
        // When anything is input to the password input, validate it to update the password guide ul
        this.passwordInput.addEventListener('input', () => {
            this.validatePassword();
        });
    }
    get password() {
        return this.validationForm.get('password');
    }
    get firstname() {
        return this.validationForm.get('firstname');
    }
    get lastname() {
        return this.validationForm.get('lastname');
    }
    get email() {
        return this.validationForm.get('email');
    }
    /**
     * Check if every input is filled and display error message for the empty inputs.
     *
     * @param {*} formData Form data to check for the empty input.
     * @return {*}  {boolean} Return true if every input is valid.
     * @memberof AddPlanComponent
     */
    validateInputs(formData) {
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // If data's property is null or empty, store false
        let isFirstNameValid = formData.firstname != null && formData.firstname !== '';
        let isLastNameValid = formData.lastname != null && formData.lastname !== '';
        let isPasswordValid = formData.password != null && formData.password != '' && this.validatePassword();
        let isEmailValid = formData.email != null && formData.email != '' && formData.email.match(emailRegex);
        // this.utils.showFlash('Plese complete the form.', 'flash-login');
        // Check whether the input is valid and add or remove the class 'invalid'
        this.utils.changeInputStatus(this.passwordInput, null, isPasswordValid);
        this.utils.changeInputStatus(this.firstNameInput, null, isFirstNameValid);
        this.utils.changeInputStatus(this.lastNameInput, null, isLastNameValid);
        this.utils.changeInputStatus(this.emailInput, null, isEmailValid);
        // If any of input is invalid, return false
        if (!isPasswordValid || !isFirstNameValid || !isLastNameValid || !isEmailValid)
            return false;
        // Otherwise, return true
        return true;
    }
    /**
     * Register a user when the form is submitted.
     *
     * @param {FormGroup} form Form value to insert.
     * @memberof AddPlanComponent
     */
    registerUser(form) {
        // Get the data and set the value
        let data = form.value;
        // Validate inputs and return if any data is invalid
        if (!this.validateInputs(data))
            return;
        // Create a Plan object using JSON
        let newUser = JSON.parse(JSON.stringify(data));
        // Add the plan using the Plan service
        this.userService.addUser(newUser).subscribe(data => {
            // Navigate to login page
            this.router.navigate([`verify/${newUser.email}`]);
        });
    }
    /**
     * Validate if below conditions are satisfied.
     * - Not contain email, first name or last name.
     * - Length should be between 8 and 15.
     * - Contain uppercase, lowercase and number.
     * - Contains at least 1 special character.
     *
     * @return {*}  {boolean} Return true only if all the conditions are satisfied.
     * @memberof RegisterComponent
     */
    validatePassword() {
        // Get values from the input
        let password = this.passwordInput.value;
        let firstname = this.firstNameInput.value;
        let lastname = this.lastNameInput.value;
        let email = this.emailInput.value;
        // Get all li elements
        let pwRuleItems = document.querySelectorAll('.pw-rules li');
        // Password does not contain email, first name or last name
        let rule1 = !this.utils.strIncludesStr(password, email, 4) &&
            !this.utils.strIncludesStr(password, firstname, 4) &&
            !this.utils.strIncludesStr(password, lastname, 4);
        // Password length is between 8 and 15
        let rule2 = password.length >= 8 && password.length <= 15;
        // Password contains uppercase, lowercase and number
        let rule3 = password.match(/(?=.{8,15}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g) != null;
        // Password contains at least 1 special character
        let rule4 = password.match(/(?=.*[!@#$%^&*]).*$/g) != null;
        // If the password satisfies the condition, change the status of list item (fail -> success or vice versa)
        this.changeLiStatus(pwRuleItems[0], rule1);
        this.changeLiStatus(pwRuleItems[1], rule2);
        this.changeLiStatus(pwRuleItems[2], rule3);
        this.changeLiStatus(pwRuleItems[3], rule4);
        // If all conditions are satisfied, return true
        if (rule1 && rule2 && rule3 && rule4) {
            return true;
        }
        // Otherwise, return false
        return false;
    }
    /**
     * Change the status of the ul>li element's status to
     * (success -> fail) or (fail -> success)
     *
     * @param {HTMLElement} listEl li element in the ul to change the status.
     * @param {boolean} isValid If true, icon changed from times to checkmark and text colour changed red to green.
     * @memberof RegisterComponent
     */
    changeLiStatus(listEl, isValid) {
        // Get the icon in the list
        let icon = listEl.querySelector('i');
        if (isValid) { // If valid
            if (!listEl.classList.contains('text-success'))
                // Add the class only when the li does not contain it
                listEl.classList.add('text-success');
            // change the icon from times to checkmark
            icon.classList.remove('fa-times-circle');
            icon.classList.add('fa-check-circle');
        }
        else {
            // Change the text color to red
            listEl.classList.remove('text-success');
            // change the icon from checkmark to times
            icon.classList.add('fa-times-circle');
            icon.classList.remove('fa-check-circle');
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Utils__WEBPACK_IMPORTED_MODULE_0__.Utils), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 37, vars: 1, consts: [["id", "login-wrapper", 1, ""], ["id", "login-container", 1, "mx-auto", "p-4", "shadow-lg", 3, "formGroup", "ngSubmit"], ["src", "assets/img/logo-icon-with-bg-light.png", "alt", "logo icon of planify", "id", "logo-img", "width", "150", 1, "d-block", "mx-auto", "mt-5"], ["id", "welcome-heading", 1, "text-red-hat", "text-center", "mt-4"], ["src", "assets/img/logo.png", "alt", "logo of planify", "width", "110", "id", "logo-text-img", 1, "mb-2"], [1, "text-center", "text-roboto", "fw-light", "mt-4", "welcome-desc"], [1, "text-roboto", "mt-4", "p-3", "pw-rules", "rounded", "d-none"], ["id", "item-email"], [1, "far", "fa-times-circle"], ["id", "item-more-char"], ["id", "item-case-number"], ["id", "item-special"], ["id", "email-container", 1, "mt-2", "position-relative"], ["type", "email", "id", "elEmail", "placeholder", "Email", "formControlName", "email", 1, "w-100", "py-2", "px-3"], ["id", "password-container", 1, "mt-2", "position-relative"], ["type", "password", "id", "pwPassword", "placeholder", "Password", "formControlName", "password", 1, "w-100", "py-2", "px-3"], ["id", "first-name-container", 1, "mt-2", "position-relative"], ["type", "text", "id", "txtFirstName", "placeholder", "First name", "formControlName", "firstname", 1, "w-100", "py-2", "px-3"], ["id", "last-name-container", 1, "mt-2", "position-relative"], ["type", "text", "id", "txtLastName", "placeholder", "Last name", "formControlName", "lastname", 1, "w-100", "py-2", "px-3"], [1, "checkbox-container", "d-inline-block", "mt-3"], ["type", "checkbox", "value", "true", "id", "cbShowPassword"], [1, "checkbox-checkmark"], ["href", "/login", "id", "forgot-password-link", 1, "d-block", "mt-2"], ["id", "register-btn", "mdbRipple", "", "type", "submit", 1, "btn", "w-100", "fw-light", "mt-4", "mb-3"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.registerUser(ctx.validationForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text when an unknown printer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 6)(9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Not contain your name or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Contain 8-15 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Contain uppercase, lowercase and number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Contain more than one special character (! @ # ?)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Show password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 21)(32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.validationForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_5__.MdbRippleDirective], styles: ["hr[_ngcontent-%COMP%] {\n  background-color: var(--gray-lightest);\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n  image-rendering: -webkit-optimize-contrast;\n}\n\n#login-wrapper[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/night-scenery.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 100px 0 150px 0;\n}\n\n#login-container[_ngcontent-%COMP%] {\n  width: 400px;\n  border-radius: 20px;\n  background-color: var(--purple-dark);\n}\n\n#welcome-heading[_ngcontent-%COMP%], .welcome-desc[_ngcontent-%COMP%] {\n  color: var(--gray-lightest);\n}\n\n.welcome-desc[_ngcontent-%COMP%] {\n  line-height: 1.4;\n  font-size: 12px;\n}\n\n\n\n#email-container[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  color: var(--purple-light);\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  content: \"\\f007\";\n  font-weight: 900;\n}\n\n\n\n#password-container[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  color: var(--purple-light);\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  content: \"\\f023\";\n  font-weight: 900;\n}\n\n#email-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #password-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 37px !important;\n}\n\n.password-eye[_ngcontent-%COMP%] {\n  right: 12px;\n  top: 12px;\n  color: var(--purple-light);\n}\n\n#forgot-password-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--purple-light);\n}\n\n#forgot-password-link[_ngcontent-%COMP%]:hover {\n  color: rgb(183, 171, 207);\n}\n\n#login-btn[_ngcontent-%COMP%] {\n  background-color: var(--purple-gray);\n  color: var(--gray-lightest);\n}\n\n#register-btn[_ngcontent-%COMP%] {\n  background-color: var(--purple-light);\n  color: var(--gray-lightest);\n}\n\n.pw-rules[_ngcontent-%COMP%] {\n  list-style: none;\n  background-color: var(--purple-darkest);\n  color:rgb(184, 69, 69);\n  font-size: 13px;\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  font-size: 13px;\n  color:var(--purple-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUEscUVBQXFFOztBQUNyRTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWxpZ2h0ZXN0KTtcbn1cblxuLyogcmVzb2x2ZSBibHVycnkgaW1hZ2UgcHJvYmxlbSAoaGFwcGVucyBpbiBDaHJvbWUsIG5vdCBpbiBGaXJlZm94KSAqL1xuaW1nIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xufVxuXG4jbG9naW4td3JhcHBlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL25pZ2h0LXNjZW5lcnkuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAxMDBweCAwIDE1MHB4IDA7XG59XG5cbiNsb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcbn1cblxuI3dlbGNvbWUtaGVhZGluZyxcbi53ZWxjb21lLWRlc2Mge1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbi53ZWxjb21lLWRlc2Mge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIEVtYWlsIGljb24gKi9cbiNlbWFpbC1jb250YWluZXI6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiAxMnB4O1xuICBjb250ZW50OiBcIlxcZjAwN1wiO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4vKiBQYXNzd29yZCBpY29uICovXG4jcGFzc3dvcmQtY29udGFpbmVyOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogMTJweDtcbiAgY29udGVudDogXCJcXGYwMjNcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2VtYWlsLWNvbnRhaW5lciBpbnB1dCxcbiNwYXNzd29yZC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDM3cHggIWltcG9ydGFudDtcbn1cblxuLnBhc3N3b3JkLWV5ZSB7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jZm9yZ290LXBhc3N3b3JkLWxpbmsge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuXG4jZm9yZ290LXBhc3N3b3JkLWxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDE4MywgMTcxLCAyMDcpO1xufVxuXG4jbG9naW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWdyYXkpO1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbiNyZWdpc3Rlci1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tZ3JheS1saWdodGVzdCk7XG59XG5cbi5wdy1ydWxlcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrZXN0KTtcbiAgY29sb3I6cmdiKDE4NCwgNjksIDY5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOnZhcigtLXB1cnBsZS1saWdodCk7XG59XG4iXX0= */", "#email-container[_ngcontent-%COMP%]:after, #password-container[_ngcontent-%COMP%]:after, #password-container[_ngcontent-%COMP%]:before {\n  color: transparent;\n}\n#password-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #email-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 16px !important;\n}\ninput.invalid[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCOzs7RUFHRSxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFzc3dvcmQgaWNvbiAqL1xuI2VtYWlsLWNvbnRhaW5lcjphZnRlcixcbiNwYXNzd29yZC1jb250YWluZXI6YWZ0ZXIsXG4jcGFzc3dvcmQtY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3Bhc3N3b3JkLWNvbnRhaW5lciBpbnB1dCxcbiNlbWFpbC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQuaW52YWxpZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2121:
/*!*********************************************!*\
  !*** ./src/app/user/user/user.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(ref => {
    // Ensure that Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise log the boot error
}).catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map