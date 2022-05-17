import { AuthIntercepterService } from './services/auth/auth-intercepter.service';
import { AppRoutingModule } from './app-routing.module';
import { faGithub, faInstagram, faLinkedin, faSkype, faStrava, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBriefcase, faBusinessTime, faClock, faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Utils } from './services/Utils';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthlyCalendarComponent } from './calendar/monthly-calendar/monthly-calendar.component';
import { VarDirective } from './services/ng-var.directive';
import { DetailBoxComponent } from './calendar/detail-box/detail-box.component';
// import {MdbModule} from 'mdb-angular-ui-kit';
// import {MdbModalConfig} from 'mdb-angular-ui-kit/forms';
import { AddPlanComponent } from './calendar/add-plan/add-plan.component';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalConfig, MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AddSubPlanModalComponent } from './calendar/add-sub-plan-modal/add-sub-plan-modal.component';
import { EditPlanComponent } from './calendar/edit-plan/edit-plan.component';
import { EditSubPlanModalComponent } from './calendar/edit-sub-plan-modal/edit-sub-plan-modal.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptorService } from './services/error-interceptor';
import { EmailVerificationComponent } from './user/email-verification/email-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    MonthlyCalendarComponent,
    VarDirective,
    DetailBoxComponent,
    AddPlanComponent,
    AddSubPlanModalComponent,
    EditPlanComponent,
    EditSubPlanModalComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    EmailVerificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    // MdbModule,
    MdbFormsModule,
    MdbRippleModule,
    MdbCheckboxModule,
    MdbModalModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbValidationModule,
    MdbCollapseModule,
    MdbPopoverModule,
    MdbTooltipModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepterService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,           // Multi-provider token that represents the array of registered HttpInterceptor objects
      useClass: ErrorInterceptorService,    // Out intercepter class
      multi: true                           // Provide multiple dependencies for a single token
    },
    Utils,
    // MdbModalConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
