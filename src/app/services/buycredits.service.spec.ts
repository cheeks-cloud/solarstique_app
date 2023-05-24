import { TestBed } from '@angular/core/testing';

import { BuycreditsService } from './buycredits.service';

describe('BuycreditsService', () => {
  let service: BuycreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuycreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
