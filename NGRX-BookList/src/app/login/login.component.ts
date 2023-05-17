import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../AuthServices/auth.service';
import { AngularToastService } from 'angular-toasts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  regid: number;

  ngOnInit(): void {
    this.loginpost = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  get username() {
    return this.loginpost.get('username');
  }
  get password() {
    return this.loginpost.get('password');
  }
  error = '';
  logindata: any;
  loginpost: FormGroup;
  constructor(
    private _toast: AngularToastService,
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit(): void {
    const username = this.loginpost.get('username').value;
    const password = this.loginpost.get('password').value;
    this.authService.login(username, password).subscribe(
      (result) => {
        if (result) {
          this.logindata = localStorage.getItem('currentUser');
          const userData = JSON.parse(this.logindata);
          this.regid = userData.token;
          this.senddata();
          this.sendname(userData.username);
          this._toast.success('Success', 'Welcome ' + userData.username);
          setTimeout(() => {
            this.router.navigate(['/booklist']);
          }, 2000);
        } else {
          this._toast.error('Error', 'invalid username and password');
          this.error = 'Invalid username or password';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  senddata() {
    this.authService.setregid(this.regid);
  }
  sendname(username: any) {
    this.authService.setloginname(username);
  }
}
