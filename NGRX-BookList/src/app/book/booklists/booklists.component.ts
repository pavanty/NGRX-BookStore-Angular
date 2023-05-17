import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookapiService } from 'src/app/book/bookapi.service';
import { BookmarksapiService } from 'src/app/entiy-data-services/bookmarksapi.service';
import { Book } from 'src/app/book/models/book.model';
import { BookMark } from 'src/app/models/bookmark.model';
import { AuthService } from 'src/app/AuthServices/auth.service';

@Component({
  selector: 'app-booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.scss'],
})
export class BooklistsComponent implements OnInit {
  searchname: string;
  filterbytitle: any;
  totallength: any;
  page: number = 1;
  booklists: any;
  booklists$: Observable<Book[]>;
  regtoken: number;
  loginusername: any;
  constructor(
    private service: BookapiService,
    private router: Router,
    private bookmarksservice: BookmarksapiService,
    private authservice: AuthService
  ) {}
  ngOnInit() {
    this.authservice.selectedloginname$.subscribe((name) => {
      this.loginusername = name;
    });

    this.booklists$ = this.service.entities$;
    this.filterbytitle = this.booklists$;
    this.authservice.selectedregid$.subscribe((data) => {
      this.regtoken = data;
    });
  }
  updateFilter() {
    this.booklists$.subscribe((booklists) => {
      this.filterbytitle = booklists.filter((book) =>
        book.title.toLowerCase().includes(this.searchname.toLowerCase())
      );
      this.page = 1;
    });
  }
  gotodetailspage(id: any) {
    this.router.navigate(['/Bookdetail', id]);
  }

  bookmarksbook(bookmark: BookMark) {
    const newbookmark = {
      ...bookmark,
      name: this.loginusername,
      id: Math.floor(Math.random() * 1000000000),
    };
    this.bookmarksservice.add(newbookmark).subscribe((data) => {});
  }
  gotobookmarklist() {
    this.router.navigate(['/Bookmarkslist']);
  }
}
