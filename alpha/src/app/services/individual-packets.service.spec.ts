import { TestBed } from '@angular/core/testing';

import { IndividualPacketsService } from './individual-packets.service';

describe('IndividualPacketsService', () => {
  let service: IndividualPacketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualPacketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
