import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UTS } from '../shared/utils/Constants';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (UTS.getTokenFromLocalStorage() != null) {
      let token = UTS.getTokenFromLocalStorage();
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', token),
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req.clone());
    }
  }
}
