import { TestBed } from '@angular/core/testing';

import { HorstService } from './horst.service';

describe('HorstService', () => {
  let service: HorstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
