import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AccountService } from './account.service';

@Injectable()
export class AccountSetupCompleteGuard implements CanActivate {

  private user;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(
      user => this.user = user
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.user && this.user.account.isComplete)
      return true;

    this.router.navigate(['accountsetup']);
    return false;
  }

}
