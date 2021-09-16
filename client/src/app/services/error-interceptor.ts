import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }

  // Intercept the http request and handle the error
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("in ErrorHandler - Interceptor");
    return next.handle(req)
      .pipe(catchError(err => this.handleError(err)));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('error ' + error.message);

      this.router.navigate(['**']);
    }
    // Handle the anauthorized error
    else if (error.status == 401) {
      console.log('error ' + error.message);

      this.router.navigate(['login']);
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log('error ' + error.message);
      console.error(
        `Backend error ${error.status}\n body: `, error.error);
      this.router.navigate(['**']);
    }
    // Return an observable with a user-facing error message.

    return throwError(
      'Something bad happened; please try again later.');
  }
}
