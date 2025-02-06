import { TestBed } from '@angular/core/testing';

import { AppstorageserviceService } from './appstorageservice.service';

describe('AppstorageserviceService', () => {
  let service: AppstorageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppstorageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
