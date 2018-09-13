import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AccountService } from '../../core/account.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.css']
})
export class AccountSetupComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  complete() {
    this.accountService.toggleComplete();
    this.router.navigate(['accountsummary']);
  }

}
