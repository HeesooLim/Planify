import { Plan } from "./plan.model";

export class PlanDate {
  year: number;
  month: number;
  date: number;
  dateName: string;
  plans: Plan[];
  planCount: number = 0;

  constructor(year: number, month: number, date: number, plans: Plan[] = []) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.plans = plans;

    if (plans.length > 0) {
      this.planCount = plans.length;
    }
  }

  addPlan(plan: Plan) {
    this.planCount++;
    // this.planCount += plan.subPlans.length;
    this.plans.push(plan);
  }
}
