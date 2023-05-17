import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookapiService } from './bookapi.service';
@Injectable()
export class BooksResolver implements Resolve<boolean> {
  constructor(private service: BookapiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.service.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.service.getAll();
        }
      }),
      first()
    );
  }
}
