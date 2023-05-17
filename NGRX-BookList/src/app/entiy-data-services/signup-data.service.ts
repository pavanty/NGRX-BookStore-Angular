import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup.model';
@Injectable()
export class SignupDataService extends DefaultDataService<Signup> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Signup', http, httpUrlGenerator);
  }
  add(signup: Signup): Observable<Signup> {
    return this.http.post<Signup>(`http://localhost:3000/users`, signup);
  }
}
