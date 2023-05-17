import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/book/bookapi.service';
import { Book } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent implements OnInit {
  idparamater: any;
  bookdetail: any;
  stringobj: any;
  bookdetails: any;
  filterdetails: any;
  book: Book;
  constructor(
    private service: BookapiService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idparamater = Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.service.entities$.subscribe((books) => {
      this.bookdetails = books.find((book) => book.id === this.idparamater);
    });
  }

  gobackpage() {
    this.router.navigate(['/booklist']);
  }
}
