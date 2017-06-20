import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardRole implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
   if (this.auth.isAdmin) {
     return true;
   }

   // redirect to base url if not isAdmin
   this.router.navigate(['/']);
  }

}
