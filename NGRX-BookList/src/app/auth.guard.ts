import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthServices/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authservice: AuthService) {}
  regid: any;
  canActivate() {
    let regiddata = this.authservice.selectedregid$.subscribe(
      (data) => (this.regid = data)
    );
    if (this.regid) {
      return true;
    } else {
      this.router.navigate(['error404'], { skipLocationChange: true });
      return false;
    }
  }
}
