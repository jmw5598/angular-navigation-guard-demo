import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AccountService } from '../../core/account.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  incomplete() {
    this.router.navigate(['accountsetup']);
    this.accountService.toggleComplete();

  }

}
