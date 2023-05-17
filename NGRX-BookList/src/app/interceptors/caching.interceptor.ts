import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private storedata = new Map<string, any>();
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const responsepresent = this.storedata.get(request.url);
    if (responsepresent) {
      return of(responsepresent);
    }
    const cache_expiration_time = 2000;
    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.storedata.set(request.url, response);
          setTimeout(
            () => this.storedata.delete(request.url),
            cache_expiration_time
          );
        }
      })
    );
  }
}
