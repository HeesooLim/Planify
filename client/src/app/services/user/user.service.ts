import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isUserLoggedIn: BehaviorSubject<any> = new BehaviorSubject<any>({});

  // Http option that will be used for the request
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,              // Set true to send the cookie
    observe: 'response' as 'response'   // Observes the response object
  };

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Check if the user is already logged in or not.
   *
   * @return {Promise}  Return the boolean(True if user is logged in) type of Promise.
   * @memberof UserService
   */
  isAuthenticated(): Promise<boolean> {
    return this.http.post<any>('http://localhost:3000/user/authenticated', this.httpOptions).toPromise()
    .then((a) => {
      console.log(a);
      if(Boolean(a.authenticated)) {
        // Set the value of the isUserLoggedIn
        this.isUserLoggedIn.next({loggedIn: a.authenticated, user: a.user});
        return <boolean>a.authenticated;
      }
    });
  }

  /**
   * Get the user currently logged in.
   *
   * @return {*} Return the Observable of the HttpResponse
   * @memberof UserService
   */
  getData() {
    return this.http.get<User>('http://localhost:3000/user', this.httpOptions);
  }

  /**
   * Add a new user to the database by sending a post request.
   *
   * @param {*} data Data of the Registration form.
   * @return {User} Data of the registered user.
   * @memberof UserService
   */
  addUser(data: any) {
    console.log(JSON.stringify(data));

    return this.http.post<User>('http://localhost:3000/user/register', JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  /**
   * Get a user by the email.
   *
   * @param {*} email The email of the user to find.
   * @return {User} Return a user that has the given email.
   * @memberof UserService
   */
  getUserByEmail(email: string) {
    console.log(JSON.stringify(email));

    return this.http.get<User>(`http://localhost:3000/user/${email}`);
  }

  /**
   * Login and get the user logged in.
   *
   * @param {*} data The data of the login form.
   * @return {Observable<any>}  Return the observable that contains the value of "loggedIn" and "user"(first name)
   * @memberof UserService
   */
  tryLogin(data): Observable<any> {
    this.http.post<any>('http://localhost:3000/user/login', JSON.stringify(data), this.httpOptions)
      .toPromise()
      .then((a) => {
        console.log('post done!');
        
        this.isUserLoggedIn.next({loggedIn: true, user: a.body.firstName});
        this.router.navigate(['']);
      });
    return;
  }

  /**
   * Logout and get the user just logged out.
   *
   * @return {Observable<any>}  Return the observable that contains the value of "loggedIn" and "user"(first name)
   * @memberof UserService
   */
  tryLogout() {
    this.http.post<any>('http://localhost:3000/user/logout', this.httpOptions)
      .toPromise()
      .then((a) => {
        this.isUserLoggedIn.next({loggedIn: false, user: a.firstName});
        this.router.navigate(['login']);
      });
    return;
  }
}
