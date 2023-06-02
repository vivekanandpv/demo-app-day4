import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { barGuard } from './bar.guard';

describe('barGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => barGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
