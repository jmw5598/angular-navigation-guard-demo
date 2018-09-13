import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const MOCK_USER = {
  firstName: "John",
  lastName: "Doe",
  account: {
    isComplete: false
  }
}

@Injectable()
export class AccountService {

  private userData = MOCK_USER;
  private userSource: BehaviorSubject<Object> = new BehaviorSubject<Object>(this.userData);
  public user = this.userSource.asObservable();

  constructor() { }

  toggleComplete() {
    this.userData.account.isComplete = !this.userData.account.isComplete;
    this.userSource.next(this.userData);
  }

}
