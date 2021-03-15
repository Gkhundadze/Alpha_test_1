import { TestBed } from '@angular/core/testing';

import { InsuranceMainSliderService } from './insurance-main-slider.service';

describe('InsuranceMainSliderService', () => {
  let service: InsuranceMainSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceMainSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
