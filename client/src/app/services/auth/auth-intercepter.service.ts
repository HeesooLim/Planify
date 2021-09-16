import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterService implements HttpInterceptor {

  constructor() { }

  // Intercept the request and add the 'withCredentials' option.
  intercept(req, next) {
    if (req.headers.get('Authorization') == null) {
      let tokenizedReq = req.clone({
        withCredentials: true
      });
      //Code to add Authorization header
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
