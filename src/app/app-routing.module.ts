import { EditPlanComponent } from './calendar/edit-plan/edit-plan.component';
import { AddPlanComponent } from './calendar/add-plan/add-plan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { BuildPlanComponent } from './build-plan/build-plan.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'buildPlan', component: BuildPlanComponent },
  { path: 'calendar',
    children: [
      { path: '', component: CalendarComponent },
      { path: 'addPlan/:date', component: AddPlanComponent },
      { path: 'editPlan/:planId', component: EditPlanComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
