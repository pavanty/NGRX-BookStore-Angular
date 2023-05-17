import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookapiService extends EntityCollectionServiceBase<Book> {
  getById(idparamater: any): import('rxjs').Observable<Book> {
    throw new Error('Method not implemented.');
  }
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Book', serviceElementsFactory);
  }
}
