import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AccountService } from '../core/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private subscription: Subscription;
  public user;

  constructor(
      public accountService: AccountService) { }

  ngOnInit() {
    this.subscription = this.accountService.user.subscribe(
      user => this.user = user
    );
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
  
}
