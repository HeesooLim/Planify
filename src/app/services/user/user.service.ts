import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  addUser(data) {
    console.log(JSON.stringify(data));

    return this.http.post<User>('http://localhost:3000/register', JSON.stringify(data), this.options);
  }

  // getUserData(username: string, password: string) {
  //   return this.http.post('/api/user', {
  //     username: username,
  //     password: password
  //   })
  //   .subscribe(data => {
  //     console.log(data, 'has been handled');

  //   })
  // }
}
