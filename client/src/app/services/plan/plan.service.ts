import { Plan } from './../../models/plan.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  year: string = '2021';
  month: string = '5';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response'
  };

  constructor(private http: HttpClient) { }

  /**
   * Get all plans in the given month.
   *
   * @return {*}  {Observable<Plan[]>} Return the Observable of Plan array.
   * @memberof PlanService
   */
  getData(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`http://localhost:3000/plan/${this.year}/${this.month.padStart(2, '0')}`);
  }

  /**
   * Get all plans belong to the user in the given month.
   *
   * @param {Date} date Date that contains the month to search.
   * @return {*}  {Observable<HttpResponse<Plan[]>>} Return the Observable of full HttpResponse of the Plan array.
   * @memberof PlanService
   */
  getDataByMonth(date: Date): Observable<HttpResponse<Plan[]>> {
    let month = date.getMonth() + 1;
    console.log(`http://localhost:3000/plan/${date.getFullYear()}/${month}`);

    return this.http.get<Plan[]>(`http://localhost:3000/plan/${date.getFullYear()}/${month}`, this.httpOptions);
  }

  /**
   * Get the plans belong to the user in the given date.
   *
   * @param {Date} date Date that contains the date to search.
   * @return {*} {Observable<HttpResponse<Plan[]>>} Return the Observable of full HttpResponse of the Plan array.
   * @memberof PlanService
   */
  getDataByDate(date: Date): Observable<HttpResponse<Plan[]>> {
    let month = date.getMonth() + 1;
    console.log(`http://localhost:3000/plan/${date.getFullYear()}/${month}/${date.getDate()}`);

    return this.http.get<Plan[]>(`http://localhost:3000/plan/${date.getFullYear()}/${month}/${date.getDate()}`, this.httpOptions);
  }

  /**
   * Get a plan by the planId.
   *
   * @param {string} id Plan ID to get.
   * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the Plan.
   * @memberof PlanService
   */
  getDataById(id: string): Observable<HttpResponse<Plan>> {
    return this.http.get<Plan>(`http://localhost:3000/plan/edit/${id}`, this.httpOptions);
  }

  /**
   * Get plans between two dates.
   *
   * @param {Date} date Starting date to display.
   * @param {number} days number of days to display from the starting date
   * @return {*}  {Observable<HttpResponse<Plan>>}
   * @memberof PlanService
   */
  getDataByDateAndDays(date: Date, days: number): Observable<HttpResponse<Plan[]>> {
    //router.get("/:year/:month/:date/:day", auth.required, planController.getDataByDateandDays);
    let month = date.getMonth() + 1;

    console.log(`http://localhost:3000/plan/${date.getFullYear()}/${month}/${date.getDate()}/${days}`);

    return this.http.get<Plan[]>(`http://localhost:3000/plan/${date.getFullYear()}/${month}/${date.getDate()}/${days}`, this.httpOptions);
  }

  /**
   * Update a plan sending the PUT request.
   *
   * @param {Plan} plan Plan object to update.
   * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the Plan.
   * @memberof PlanService
   */
  updatePlan(plan): Observable<HttpResponse<Plan>> {
    /* put(baseUrl, data) */
    /* response type: Plan */
    console.log('trying to update the plan!' + JSON.stringify(plan));
    
    return this.http.put<Plan>(`http://localhost:3000/plan/${plan._id}`, JSON.stringify(plan), this.httpOptions);
  }

  /**
   * Add a plan to the database sending the POST request.
   *
   * @param {*} data Plan object to add.
   * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the added plan.
   * @memberof PlanService
   */
  addPlan(plan): Observable<HttpResponse<Plan>> {
    return this.http.post<Plan>('http://localhost:3000/plan', JSON.stringify(plan), this.httpOptions);
  }

  /**
   * Add a plan to the database sending the POST request.
   *
   * @param {*} id ID of the plan to delete.
   * @return {*} {Observable<HttpResponse<Plan>>} Return the Observable of full HttpResponse of the deleted plan.
   * @memberof PlanService
   */
  deletePlan(id: string) {
    return this.http.delete<Plan>(`http://localhost:3000/plan/${id}`, this.httpOptions);
  }
}
