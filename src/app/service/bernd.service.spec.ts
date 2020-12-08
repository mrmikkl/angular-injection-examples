import { TestBed } from '@angular/core/testing';

import { BerndService } from './bernd.service';

describe('BerndService', () => {
  let service: BerndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
