import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountSetupComponent } from './account/account-setup/account-setup.component';
import { AccountSummaryComponent } from './account/account-summary/account-summary.component';

import { AccountService } from './core/account.service';
import { AccountSetupCompleteGuard } from './core/account-setup-complete.guard';

const appRoutes: Routes = [
  {
    path: 'accountedit',
    canActivate: [AccountSetupCompleteGuard],
    component: AccountEditComponent
  },
  {
    path: 'accountsetup',
    component: AccountSetupComponent
  },
  {
    path: 'accountsummary',
    canActivate: [AccountSetupCompleteGuard],
    component: AccountSummaryComponent
  },
  {
    path: '',
    redirectTo: 'accountsummary',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'accountsummary',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountEditComponent,
    AccountSetupComponent,
    AccountSummaryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [AccountService, AccountSetupCompleteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
