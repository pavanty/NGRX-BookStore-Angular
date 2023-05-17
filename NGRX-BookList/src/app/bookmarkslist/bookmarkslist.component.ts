import { Component, OnInit } from '@angular/core';
import { BookmarksapiService } from '../entiy-data-services/bookmarksapi.service';
import { AngularToastService } from 'angular-toasts';
import { Book } from '../book/models/book.model';
import { AuthService } from '../AuthServices/auth.service';
@Component({
  selector: 'app-bookmarkslist',
  templateUrl: './bookmarkslist.component.html',
  styleUrls: ['./bookmarkslist.component.scss'],
})
export class BookmarkslistComponent implements OnInit {
  bookmarklists: Book[];
  filterbytitle: any;
  deletealllist: any;
  totallength: any;
  loginusername: any;
  page: number = 1;
  constructor(
    private bookmarkservice: BookmarksapiService,
    private toast: AngularToastService,
    private authservice: AuthService
  ) {}
  ngOnInit() {
    this.authservice.selectedloginname$.subscribe((name) => {
      this.loginusername = name;
    });

    this.bookmarkservice.getAll().subscribe((data) => {
      this.bookmarklists = data;
      this.filterbytitle = this.bookmarklists;
      this.filterbookmarksbyname();
    });
  }
  filterbookmarksbyname() {
    this.filterbytitle = this.bookmarklists.filter((a: any) => {
      if (a.name == this.loginusername) {
        return a;
      }
    });
  }
  onclickdeletebyid(id) {
    this.bookmarkservice.delete(id).subscribe((response) => {
      this.toast.success('Success', 'Deleted');
    });
    this.ngOnInit();
  }
}
