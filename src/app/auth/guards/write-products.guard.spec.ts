import { TestBed } from '@angular/core/testing';

import { WriteProductsGuard } from './write-products-guard.service';

describe('WriteProductsGuard', () => {
  let guard: WriteProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WriteProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
