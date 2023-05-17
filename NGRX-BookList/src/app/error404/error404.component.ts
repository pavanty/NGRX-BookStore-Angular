import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBug } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component implements OnInit {
  constructor(private router: Router) {}
  faBug = faBug;
  ngOnInit(): void {}
  gotologinpage() {
    this.router.navigate(['/login'], { skipLocationChange: true });
  }
}
