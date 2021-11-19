import { TestBed } from '@angular/core/testing';

import { ReadProductsGuard } from './read-products.guard';

describe('ReadProductsGuard', () => {
  let guard: ReadProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReadProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
