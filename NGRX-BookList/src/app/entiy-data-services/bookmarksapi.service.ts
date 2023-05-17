import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { BookMark } from '../models/bookmark.model';
@Injectable({
  providedIn: 'root',
})
export class BookmarksapiService extends EntityCollectionServiceBase<BookMark> {
  getById(idparamater: any): import('rxjs').Observable<BookMark> {
    throw new Error('Method not implemented.');
  }
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('BookMark', serviceElementsFactory);
  }
}
