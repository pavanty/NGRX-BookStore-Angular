import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularToastService } from 'angular-toasts';
import { Subscription } from 'rxjs';
import { BookapiService } from '../bookapi.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss'],
})
export class BookformComponent implements OnInit {
  bookpost: FormGroup;
  successmessage: any;
  submitBookSubscription: Subscription;
  constructor(
    private service: BookapiService,
    private router: Router,
    private _toast: AngularToastService
  ) {}
  ngOnInit() {
    this.bookpost = new FormGroup({
      title: new FormControl(null, Validators.required),
      authors: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image_url: new FormControl(null, Validators.pattern('^.*.(?:png|jpg)$')),
      cost: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
    });
  }
  submitform() {
    const book: Book = this.bookpost.value;
    this.service.add(book);
    this.successmessage = 'Details Saved Successfully';
    this.bookpost.reset();
    setTimeout(() => {
      this._toast.success('Success', 'Added new Books');

      this.router.navigate(['/booklist']);
    }, 2000);
  }
  get title() {
    return this.bookpost.get('title');
  }
  get authors() {
    return this.bookpost.get('authors');
  }
  get rating() {
    return this.bookpost.get('rating');
  }
  get image_url() {
    return this.bookpost.get('image_url');
  }
  get description() {
    return this.bookpost.get('description');
  }
  get cost() {
    return this.bookpost.get('cost');
  }
}
