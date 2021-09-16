import { AuthIntercepterService } from './services/auth/auth-intercepter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGithub, faInstagram, faLinkedin, faSkype, faStrava, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faBusinessTime, faClock, faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { AppRoutingModule } from './app-routing.module';
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
import { MdbCheckboxModule, MdbCollapseModule, MdbFormsModule, MdbModalConfig, MdbModalModule, MdbModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbTooltipModule, MdbValidationModule } from 'mdb-angular-ui-kit';
import { AddPlanComponent } from './calendar/add-plan/add-plan.component';
import { AddSubPlanModalComponent } from './calendar/add-sub-plan-modal/add-sub-plan-modal.component';
import { EditPlanComponent } from './calendar/edit-plan/edit-plan.component';
import { EditSubPlanModalComponent } from './calendar/edit-sub-plan-modal/edit-sub-plan-modal.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptorService } from './services/error-interceptor';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { EmailVerificationComponent } from './user/email-verification/email-verification.component';
import { TodoComponent } from './todo/todo.component';

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
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    MdbModule,
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
    FlashMessagesModule.forRoot()
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
    MdbModalConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faTwitter, faInstagram, faStrava, faSkype, faBriefcase, faBusinessTime, faClock, faGraduationCap, faEnvelope);
  }
}
