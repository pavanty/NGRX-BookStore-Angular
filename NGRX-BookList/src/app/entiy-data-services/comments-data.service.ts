import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsDataService extends DefaultDataService<Comment> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Comment', http, httpUrlGenerator);
  }
  add(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:3000/comments`, comment);
  }
  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:3000/comments`);
  }
  delete(id: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:3000/comments/` + id);
  }
  updatebyid(id: number, update: Comment): Observable<Comment> {
    return this.http.put<Comment>(
      `http://localhost:3000/comments/` + id,
      update
    );
  }
  getdatbyid(id: number) {
    return this.http.get<Comment>(`http://localhost:3000/comments/` + id);
  }
}
