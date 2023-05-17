import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthServices/auth.service';
import { AngularToastService } from 'angular-toasts';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  regtoken: number;
  constructor(
    private _toast: AngularToastService,
    private authService: AuthService,
    private router: Router
  ) {}
  logout() {
    this.router.navigate(['/login']);
    this._toast.success('Success', 'Logout Successfull');
    setTimeout(() => {
      this.authService.logout();
    }, 2000);
  }
  ngOnInit() {
    this.authService.selectedregid$.subscribe((data) => {
      this.regtoken = data;
    });
  }
}
