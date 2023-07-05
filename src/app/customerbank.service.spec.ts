import { TestBed } from '@angular/core/testing';

import { CustomerbankService } from './customerbank.service';

describe('CustomerbankService', () => {
  let service: CustomerbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
