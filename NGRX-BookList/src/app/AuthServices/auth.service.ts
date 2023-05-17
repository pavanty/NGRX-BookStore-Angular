import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  private regid$ = new BehaviorSubject<any>(null!);
  selectedregid$ = this.regid$.asObservable();
  setregid(regid: any) {
    this.regid$.next(regid);
  }

  private loginname$ = new BehaviorSubject<any>(null!);
  selectedloginname$ = this.loginname$.asObservable();
  setloginname(loginname: any) {
    this.loginname$.next(loginname);
  }
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<boolean> {
    return this.http
      .get<any>(
        `${this.baseUrl}/users?username=${username}&password=${password}`
      )
      .pipe(
        map((users) => {
          if (users.length > 0) {
            localStorage.setItem('currentUser', JSON.stringify(users[0]));
            return true;
          } else {
            return false;
          }
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  }
}
