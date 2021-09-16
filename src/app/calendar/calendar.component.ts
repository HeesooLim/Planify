import { Utils } from 'src/app/services/Utils';
import { PlanDate } from './../models/plan-date.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // planDate and dateString to pass to detail-box component
  planDate: PlanDate = null;
  dateString: string;
  shortDateString: string;

  paramYear: number;
  paramMonth: number;
  months: any[] = [];

  constructor(private utils: Utils, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

    let changeMonthBtnText = <HTMLElement>document.querySelector('#change-month-text');

    // If the user clicks the element other than the change month button or the text, hide the month list and display the buttno text
    document.addEventListener('click', (e) => {
      let target = <HTMLElement>e.target;
      if (target.id !== 'change-date-btn' && target.innerText !== changeMonthBtnText.innerText) {
        let changeMonthButton = <HTMLElement>document.querySelector('#change-date-btn');
        changeMonthButton.classList.remove('selected');
      }
    })
  }

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
    this.shortDateString = this.utils.getDateString(date, false);

    this.ngOnInit();
  }

  getChangedMonth(date: Date) {
    this.router.navigate([`calendar/date/${date.getFullYear()}/${date.getMonth()}`]);
  }

  toggleChageMonthBtn() {
    let changeMonthButton = <HTMLElement>document.querySelector('#change-date-btn');
    changeMonthButton.classList.toggle('selected');
  }

}
