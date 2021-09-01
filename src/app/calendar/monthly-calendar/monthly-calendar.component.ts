import { UserService } from 'src/app/services/user/user.service';
import { PlanService } from './../../services/plan/plan.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';
import { PlanDate } from 'src/app/models/plan-date.model';
import { Utils } from 'src/app/services/Utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.css']
})

export class MonthlyCalendarComponent implements OnInit {
  dateOffset: number;
  today: Date;
  subPlans: Plan[] = [];
  planDates: PlanDate[] = [];
  numOfWeeks: number;
  numOfDays: number;
  selectedDate: number;

  isOpened: boolean;
  calendarWrapper: HTMLElement;

  monthString: string;

  @Output() planEmitter = new EventEmitter<PlanDate>();
  @Output() changeMonthEmitter = new EventEmitter<Date>();
  @Input() paramYear: number;
  @Input() paramMonth: number;

  constructor(private planService: PlanService, private userService: UserService, private utils: Utils, private router: Router) { }

  ngOnInit(): void {
    // Check if the user is logged in
    this.userService.isAuthenticated();

    this.today = new Date(this.paramYear, this.paramMonth - 1, 1);

    // Set the month string
    this.monthString = this.today.toLocaleString('default', { month: 'long' });

    let firstDayName = new Date(this.today.getFullYear(), this.today.getMonth(), 1).toLocaleString("default", { weekday: "long" });

    this.calendarWrapper = document.getElementById('calendar-wrapper');

    // Find the offset of the date using the month's first day name
    this.dateOffset = Utils.fullDays.indexOf(firstDayName);

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
  openDetail(date: number, isValid: boolean = true) {
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
  changeMonth(isNext: boolean) {
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
  openEditPage(plan: Plan) {
    this.closeDetail();
    window.location.href = `calendar/editPlan/${plan._id}`;
  }
}
