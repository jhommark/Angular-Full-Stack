import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    let params = state.url != '/dashboard' ? { queryParams: { returnUrl: state.url }} : {};
    this.router.navigate(['/auth/login'], params);
    return false;
  }

}
