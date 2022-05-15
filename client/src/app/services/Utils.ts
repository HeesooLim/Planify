import { SubPlan } from './../models/plan.model';
import { PlanDate } from "../models/plan-date.model";
import { Plan } from "../models/plan.model";
// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  public static readonly fullDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public static readonly days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public static subPlan: SubPlan = null;

  constructor(private router: Router) { }

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
  getDateString(date: Date, isLong: boolean = true) {
    let dayName;
    let monthName;

    if (isLong) { // If isLong is true, set the dayName and monthName to the long string
      dayName = date.toLocaleString("default", { weekday: "long" });
      monthName = date.toLocaleString('default', { month: 'long' });
    }
    else {        // Otherwise set the dayName and monthName to the short string
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
  getPlanDatesInMonth(data: Plan[], year: number, month: number) {
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
  getNumOfPlanDates(data: Plan[], date: Date, numOfDays: number) {
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

      planDates[i] = new PlanDate(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), plans);
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
  getPlanDate(data: Plan[], date: Date) {
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
  calculateProgress(plan: Plan): number {
    let subPlans = plan.subPlans;   // Get subplans
    let progress = 0;               // Progress is 0 initially

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
  public static setSubPlan(subPlan: SubPlan) {
    this.subPlan = subPlan;
  }

  /**
   * Get the static Subplan value to use in the modal.
   *
   * @static
   * @return {SubPlan} Return the static SubPlan value.
   * @memberof Utils
   */
  public static getSubPlan() {
    // If null, return an empty subplan
    if (!this.subPlan) {
      return new SubPlan("", "", 0, false);
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
  changeDetailBox(isOpen: boolean, prevCell: HTMLElement, cell: HTMLElement) {
    // Get elements
    let calendarWrapper = document.getElementById('calendar-wrapper');
    let detailBox = document.querySelector('#detail-box');
    let navbar = <HTMLElement>document.querySelector('nav.navbar');
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
  hideScroll(isHidden: boolean) {
    let body = document.querySelector('body');
    let html = document.querySelector('html');

    if (isHidden) {   // Hide the scrollbar
      body.classList.add('scroll-disabled');
      html.classList.add('scroll-disabled');
    }
    else {  // Enable the scrollbar
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
  changeInputStatus(inputEl: HTMLInputElement, errorEl: HTMLElement, isValid: boolean) {
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
  strIncludesStr(str1: string, str2: string, substrLen: number): boolean {
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
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
