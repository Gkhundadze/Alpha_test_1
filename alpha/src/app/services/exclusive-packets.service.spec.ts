import { TestBed } from '@angular/core/testing';

import { ExclusivePacketsService } from './exclusive-packets.service';

describe('ExclusivePacketsService', () => {
  let service: ExclusivePacketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclusivePacketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
