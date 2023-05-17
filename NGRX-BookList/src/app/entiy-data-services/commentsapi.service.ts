import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Comment } from '../models/comment.model';
@Injectable({
  providedIn: 'root',
})
export class CommentsapiService extends EntityCollectionServiceBase<Comment> {
  getById(idparamater: any): import('rxjs').Observable<Comment> {
    throw new Error('Method not implemented.');
  }
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Comment', serviceElementsFactory);
  }
}
