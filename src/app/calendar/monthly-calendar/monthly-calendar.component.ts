import { PlanService } from './../../services/plan/plan.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';
import { PlanDate } from 'src/app/models/plan-date.model';
import { Utils } from 'src/app/services/Utils';

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.css']
})

export class MonthlyCalendarComponent implements OnInit {
  dateOffset: number;
  today: Date = new Date();
  plans: Plan[] = [];
  subPlans: Plan[] = [];
  planDates: PlanDate[] = [];
  targetMonth: string;
  selectedDate: number;

  monthString: string;

  @Output() planEmitter = new EventEmitter<PlanDate>();

  constructor(private planService: PlanService, private utils: Utils) { }

  ngOnInit(): void {
    // Set the month string
    this.monthString = this.today.toLocaleString('default', { month: 'long' });

    let firstDayName = new Date(this.today.getFullYear(), this.today.getMonth(), 1).toLocaleString("default", { weekday: "long" })

    // Find the offset of the date using the month's first day name
    this.dateOffset = Utils.fullDays.indexOf(firstDayName);

    // Get all PlanDate objects in the month of today
    this.planService.getDataByMonth(this.today)
      .subscribe(data => {
        this.planDates = this.utils.getPlanDates(data, this.today.getFullYear(), this.today.getMonth());
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
      let calendarWrapper = document.getElementById('calendar-wrapper');
      let isOpened = calendarWrapper.classList.contains('detail-opened');
      let prevCell = document.getElementById('cell-' + this.selectedDate);
      let cell = document.getElementById('cell-' + date);
      let navbar = <HTMLElement>document.querySelector('nav.navbar');
      let footer = document.querySelector('footer');

      // If the detail-box is already opened and selected the same date, close the detail-box
      if (isOpened && this.selectedDate === date) {
        this.selectedDate = date;
        this.closeDetail();
      }
      else {
        this.selectedDate = date;
        // Emit the selected PlanDate data (it will be used in the detail-box component)
        this.planEmitter.emit(this.planDates[this.selectedDate - 1]);
        calendarWrapper.classList.add('detail-opened');
        footer.classList.add('detail-opened');
        navbar.classList.add('detail-opened');

        if (prevCell) { // If the previously selected cell exists, remove the selected class
          prevCell.classList.remove('selected');
        }
        cell.classList.add('selected');
      }
    }
  }

  /**
   * Close the detail-box.
   *
   * @memberof MonthlyCalendarComponent
   */
  closeDetail() {
    let calendarWrapper = document.getElementById('calendar-wrapper');
    let isOpened = calendarWrapper.classList.contains('detail-opened');
    let cell = document.getElementById('cell-' + this.selectedDate);
    let navbar = <HTMLElement>document.querySelector('nav.navbar');
    let footer = document.querySelector('footer');

    // If the detail-box was already opened, close it.
    if (isOpened) {
      calendarWrapper.classList.remove('detail-opened');
      footer.classList.remove('detail-opened');
      navbar.classList.remove('detail-opened');
      if (cell) {
        cell.classList.remove('selected');
      }
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

    // Create the Date object using the updated value
    this.today = new Date(this.today.getFullYear(), this.today.getMonth() + monthToAdd, this.today.getDate());

    // Refresh the view
    this.ngOnInit();
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
