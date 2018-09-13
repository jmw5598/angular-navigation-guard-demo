import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AccountService } from './core/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public user;

  constructor(
    public accountService: AccountService) {}

  isAccountSetupComplete() {
    return true;
  }

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
