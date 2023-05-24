import { TestBed } from '@angular/core/testing';

import { SellcreditsService } from './sellcredits.service';

describe('SellcreditsService', () => {
  let service: SellcreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellcreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
