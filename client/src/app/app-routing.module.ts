import { TodoComponent } from './todo/todo.component';
import { EmailVerificationComponent } from './user/email-verification/email-verification.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user/user.component';
import { EditPlanComponent } from './calendar/edit-plan/edit-plan.component';
import { AddPlanComponent } from './calendar/add-plan/add-plan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'calendar',
    children: [
      { path: 'date/:year/:month', component: CalendarComponent },
      { path: 'addPlan/:year/:month/:date', component: AddPlanComponent },
      { path: 'editPlan/:planId', component: EditPlanComponent }
    ]
  },
  { path: 'todo/:year/:month/:date', component: TodoComponent },
  { path: 'user/:userId', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify/:email', component: EmailVerificationComponent },
  { path: 'verify/:email/:uuid', component: EmailVerificationComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
