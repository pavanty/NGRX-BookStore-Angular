import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Signup } from '../models/signup.model';
@Injectable({
  providedIn: 'root',
})
export class SignupapiService extends EntityCollectionServiceBase<Signup> {
  getById(idparamater: any): import('rxjs').Observable<Signup> {
    throw new Error('Method not implemented.');
  }
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Signup', serviceElementsFactory);
  }
}
