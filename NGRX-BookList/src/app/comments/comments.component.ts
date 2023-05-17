import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommentsapiService } from './../entiy-data-services/commentsapi.service';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { AngularToastService } from 'angular-toasts';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private authservice: AuthService,
    private commentservice: CommentsapiService,
    private toast: AngularToastService
  ) {}
  commentmain: FormGroup;
  loginusername: string;
  @Input() bookdetailid: number;
  filtercomments: any;
  commentall: any;
  userdatacheck: any;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  ngOnInit() {
    this.authservice.selectedloginname$.subscribe((name) => {
      this.loginusername = name;
    });
    this.commentmain = new FormGroup({
      bookdetails_id: new FormControl(this.bookdetailid),
      rating: new FormControl(null, Validators.required),
      name: new FormControl(this.loginusername),
      commentinfo: new FormControl(null, Validators.required),
    });
    this.getallcomments();
  }
  submitform() {
    const commentsinfo: Comment = this.commentmain.value;
    this.commentservice.add(commentsinfo);
    this.getallcomments();
  }
  getallcomments() {
    this.commentservice.getAll().subscribe((data) => {
      this.commentall = data;
      this.filtercomments = data;
      this.userdatacheck = data;
      this.filtercommentsbyvlaue();
    });
  }

  checkusers(commentname: any) {
    return commentname === this.loginusername;
  }

  filtercommentsbyvlaue() {
    this.filtercomments = this.commentall.filter((a: any) => {
      if (a.bookdetails_id == this.bookdetailid) {
        return a;
      }
    });
  }
  onclickdeletebyid(id: number) {
    this.commentservice.delete(id);
    this.toast.success('Success', 'Deleted Successfully');
    this.getallcomments();
  }
}
