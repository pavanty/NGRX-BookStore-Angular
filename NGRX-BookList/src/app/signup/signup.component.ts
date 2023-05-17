import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../AuthServices/auth.service';
import { SignupapiService } from '../entiy-data-services/signupapi.service';
import { Signup } from '../models/signup.model';
import { AngularToastService } from 'angular-toasts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private _toast: AngularToastService,
    private authService: AuthService,
    private router: Router,
    private signupservice: SignupapiService
  ) {}
  randomNum =
    Math.floor(Math.random() * 9000000000000000000) + 1000000000000000000;
  logindata: any;
  signupost: FormGroup;
  ngOnInit(): void {
    this.signupost = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      token: new FormControl(this.randomNum),
    });
  }
  onSubmit() {
    const signup: Signup = this.signupost.value;
    this.signupservice.add(signup);
    this._toast.success('Success', 'Successfully registered');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
  get username() {
    return this.signupost.get('username');
  }
  get password() {
    return this.signupost.get('password');
  }
}
