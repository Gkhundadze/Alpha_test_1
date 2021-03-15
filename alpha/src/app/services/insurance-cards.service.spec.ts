import { TestBed } from '@angular/core/testing';

import { InsuranceCardsService } from './insurance-cards.service';

describe('InsuranceCardsService', () => {
  let service: InsuranceCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
