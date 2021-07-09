import { SubPlan } from './../models/plan.model';
import { PlanDate } from "../models/plan-date.model";
import { Plan } from "../models/plan.model";

export class Utils {
  public static readonly fullDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public static readonly days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public static subPlan: SubPlan = null;

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
  getPlanDates(data: Plan[], year: number, month: number) {
    let plans = [];
    let planDates = [];

    // Passing 0 as the last parameter will return the last of day in the last month, so 1 is added to the chosen month
    let numOfDays = new Date(year, month + 1, 0).getDate();

    // For loop for the Plans
    for (const d of data) {
      let dueDate = new Date(d.dueDate);

      // Create a Plan object using the passed data
      let plan = new Plan(d._id, d.userId, d.title, d.description, d.dueDate, d.progress, d.priority);

      if (d.subPlans.length > 0) {
        // Add subplans to the plan
        for (const sp of d.subPlans) {
          plan.subPlans.push(new SubPlan(sp.title, sp.description, sp.priority, sp.isDone));
        }
      }
      // Add the plan to the array of plans
      plans.push(plan);
    }

    // Generate empty PlanDate objects
    for (let i = 0; i < numOfDays; i++) {
      planDates.push(new PlanDate(year, month, i + 1));
    }

    // If the PlanDate's date is the same as the Plan's due date, add the plan to the PlanDate
    planDates.map(pd => {
      plans.map(p => {
        if (pd.date == new Date(p.dueDate).getDate() + 1) {
          pd.addPlan(p);
        }
      })
    });

    // return all PlanDates in the month
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
    // Get all the PlanDates in the month
    let planDates = this.getPlanDates(data, date.getFullYear(), date.getMonth());

    // Return one PlanDate using the index
    return planDates[date.getDate() - 1];
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
}
