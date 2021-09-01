import { PlanDate } from 'src/app/models/plan-date.model';
import { UserService } from 'src/app/services/user/user.service';
import { PlanService } from './../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../services/Utils';
import { Plan } from '../models/plan.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  paramYear: number;
  paramMonth: number;
  paramDate: number;
  dateInputString: string;

  currSerial: number = 0;

  planPager: number[] = [0, 0, 0, 0];

  planDatesWithDateString: any[];

  constructor(private utils: Utils, private userService: UserService, private planService: PlanService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Check if the user is logged in
    this.userService.isAuthenticated();
    // Get the parameter from the URL
    const routeParams = this.route.snapshot.paramMap;

    // Get the date from the parameter
    this.paramYear = parseInt(routeParams.get('year'));
    this.paramMonth = parseInt(routeParams.get('month'));
    this.paramDate = parseInt(routeParams.get('date'));

    // Create a date object using the parameter values
    let date = new Date(this.paramYear, this.paramMonth - 1, this.paramDate);

    // Split the ISO string to get the date in the format (yyyy-MM-dd)
    this.dateInputString = date.toISOString().slice(0, 10);

    // Get the plans from the date for 4 days
    this.planService.getDataByDateAndDays(date, 4).subscribe(res => {
      let planDates = this.utils.getNumOfPlanDates(res.body, date, 4);
      this.planDatesWithDateString = [];

      // Get the plans in 3 days from the paramDate
      for (let i = 0; i < 4; i++) {
        let maxPage = Math.max(Math.ceil(planDates[i].plans.length / 3), 1);
        this.planDatesWithDateString.push({
          plans: planDates[i].plans,
          dateString: this.utils.getDateString(date, false),
          maxPage: maxPage  // Value to be used for the plan pager
        });

        // Change the date to the next date
        date.setDate(date.getDate() + 1);
      }
    });
  }

  /**
   * Change the date to see plans in the todo column.
   *
   * @param {boolean} changeByInput True if the date is changed by the date input, false if the date is changed by the arrow buttons
   * @param {number} [daysToAdd=0] Number of days to add (0 by default).
   * @return {*}
   * @memberof TodoComponent
   */
  changeDate(changeByInput: boolean, daysToAdd: number = 0) {
    // If the arrow button was clicked
    if (!changeByInput) {
      // Create a date object
      let date = new Date(this.paramYear, this.paramMonth, this.paramDate + daysToAdd);
      // Redirect to the page with the new parameter values
      return this.utils.redirectTo(`todo/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`);
    }
    else {
      let dateInput = <HTMLInputElement>document.querySelector('#change-date-input');
      if (dateInput) {
        // Split the input value by -
        let inputValues = dateInput.value.split('-');
        // Redirect to the page with the new parameter values
        return this.utils.redirectTo(`todo/${inputValues[0]}/${inputValues[1]}/${inputValues[2]}`);
      }
    }

  }

  /**
   * Change the page of the plan in the column.
   *
   * @param {number} index index of the planDatesWithDateString (column).
   * @param {boolean} isNext True if the page number should be increased.
   * @memberof TodoComponent
   */
  changePlanPage(index: number, isNext: boolean) {
    // If next page and current page is less than the max page, add 1 to current page
    if (isNext && this.planPager[index] < this.planDatesWithDateString[index].maxPage - 1) {
      this.planPager[index] += 1;
    }
    // If not next page and current page is greater than 0, subtract 1 from the current page
    else if (!isNext && this.planPager[index] > 0) {
      console.log(this.planPager[index]);
      this.planPager[index] -= 1;
    }
  }

}
