import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const createdby = 'Pavan T Y';
    const Authorization_key = Math.random().toString() + 'capgeminipoc';
    const displayinheader = request.clone({
      setHeaders: {
        Authorization_key,
        createdby,
      },
    });
    return next.handle(displayinheader);
  }
}
