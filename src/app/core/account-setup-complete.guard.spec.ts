import { TestBed, async, inject } from '@angular/core/testing';

import { AccountSetupCompleteGuard } from './account-setup-complete.guard';

describe('AccountSetupCompleteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountSetupCompleteGuard]
    });
  });

  it('should ...', inject([AccountSetupCompleteGuard], (guard: AccountSetupCompleteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
