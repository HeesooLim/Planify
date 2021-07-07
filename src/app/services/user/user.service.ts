import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<User[]>('http://localhost:3000/user');
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
