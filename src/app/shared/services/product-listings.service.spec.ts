import { TestBed } from '@angular/core/testing';

import { ProductListingsService } from './product-listings.service';

describe('ProductListingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListingsService = TestBed.get(ProductListingsService);
    expect(service).toBeTruthy();
  });
});
