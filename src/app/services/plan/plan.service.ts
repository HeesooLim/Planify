import { Plan } from './../../models/plan.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  userId: string = "60904c59720b3a6b29c3d932";
  year: string = '2021';
  month: string = '5';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  /* HttpClient begins its request only when the observable is subscribed */
  constructor(private http: HttpClient) { }

  getData() {
    console.log(`[get]http://localhost:3000/plan/${this.userId}`);

    /* response type: Plan[] */
    return this.http.get<Plan[]>(`http://localhost:3000/plan/${this.userId}/${this.year}/${this.month.padStart(2, '0')}`);
  }

  getDataByMonth(date: Date) {
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    /* response type: Plan[] */
    console.log(`http://localhost:3000/plan/${this.userId}/${date.getFullYear()}/${month}`);

    return this.http.get<Plan[]>(`http://localhost:3000/plan/${this.userId}/${date.getFullYear()}/${month}`);
  }

  getDataByDate(date: Date) {
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    /* response type: Plan[] */
    console.log(`http://localhost:3000/plan/${this.userId}/${date.getFullYear()}/${month}/${date.getDate()}`);

    return this.http.get<Plan[]>(`http://localhost:3000/plan/${this.userId}/${date.getFullYear()}/${month}/${date.getDate()}`);
  }

  getDataById(id: string) {
    return this.http.get<Plan>(`http://localhost:3000/plan/edit/${id}`);
  }

  updatePlan(plan: Plan) {
    /* put(baseUrl, data) */
    /* response type: Plan */
    return this.http.put<Plan>(`http://localhost:3000/plan/${plan._id}`, JSON.stringify(plan), this.options);
  }

  addPlan(data) {
    console.log(JSON.stringify(data));

    return this.http.post<Plan>('http://localhost:3000/plan', JSON.stringify(data), this.options);
  }

  deletePlan(id: string) {
    /* put(baseUrl, data) */
    /* response type: Plan */
    console.log(`http://localhost:3000/plan/${id}`);

    return this.http.delete<Plan>(`http://localhost:3000/plan/${id}`);
  }
}
