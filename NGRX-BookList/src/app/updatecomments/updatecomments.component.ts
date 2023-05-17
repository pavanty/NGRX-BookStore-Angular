import { CommentsDataService } from './../entiy-data-services/comments-data.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommentsapiService } from '../entiy-data-services/commentsapi.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AngularToastService } from 'angular-toasts';
@Component({
  selector: 'app-updatecomments',
  templateUrl: './updatecomments.component.html',
  styleUrls: ['./updatecomments.component.scss'],
})
export class UpdatecommentsComponent implements OnInit {
  commentupdate: FormGroup;
  loginusername: any;
  commentid: any;
  commentdata: any;
  filteronecomment: any;
  getdatadetails: any;

  constructor(
    private commentservice: CommentsapiService,
    private activatedroute: ActivatedRoute,
    private commentdatservice: CommentsDataService,
    private location: Location,
    private toast: AngularToastService
  ) {}

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.commentid = parseInt(params.get('id'));
    });

    this.commentservice.getAll().subscribe((data) => {
      this.commentdata = data;
    });
    this.getdatabyid();
  }

  getdatabyid() {
    this.commentdatservice.getdatbyid(this.commentid).subscribe((data) => {
      this.getdatadetails = data;
    });
  }

  submitform() {
    this.commentdatservice
      .updatebyid(this.commentid, this.getdatadetails)
      .subscribe((data) => {
        console.log(data);
        this.toast.success('Success', 'Updated Successfully');
        this.location.back();
      });
  }
}
