import { Utils } from 'src/app/services/Utils';
import { PlanDate } from './../models/plan-date.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // planDate and dateString to pass to detail-box component
  planDate: PlanDate = null;
  dateString: string;

  constructor(private utils: Utils) { }

  ngOnInit(): void { }

  /**
   * Update detail-box component when it's clicked, passing PlanDate object.
   *
   * @param {PlanDate} planDate PlanDate object from monthly-calendar component.
   * @memberof CalendarComponent
   */
  getPlanDate(planDate: PlanDate) {
    // Set the planDate value
    this.planDate = planDate;

    // Create a date using the planDate object
    let date = new Date(this.planDate.year, this.planDate.month, this.planDate.date);

    // Set the date string using the utils class' method
    this.dateString = this.utils.getDateString(date, true);

    this.ngOnInit();
  }

}
