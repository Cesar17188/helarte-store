import { TestBed } from '@angular/core/testing';

import { BackeriesService } from './backeries.service';

describe('BackeriesService', () => {
  let service: BackeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
