import { Book } from './../book/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { BookMark } from '../models/bookmark.model';

@Injectable()
export class BookmarksDataService extends DefaultDataService<BookMark> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('BookMark', http, httpUrlGenerator);
  }
  add(bookmark: BookMark): Observable<BookMark> {
    return this.http.post<BookMark>(
      `http://localhost:3000/bookmarks`,
      bookmark
    );
  }
  getAll(): Observable<BookMark[]> {
    return this.http.get<BookMark[]>(`http://localhost:3000/bookmarks`);
  }
  delete(id: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:3000/bookmarks/` + id);
  }
}
