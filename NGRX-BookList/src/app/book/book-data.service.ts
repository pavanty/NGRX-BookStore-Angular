import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';

@Injectable()
export class BookDataService extends DefaultDataService<Book> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Book', http, httpUrlGenerator);
  }
  getById(id: any): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/booklists/${id}`);
  }
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:3000/booklists`);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(`http://localhost:3000/booklists`, book);
  }
}
