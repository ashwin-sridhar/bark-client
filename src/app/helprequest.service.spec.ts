import { TestBed, inject } from '@angular/core/testing';

import { HelprequestService } from './helprequest.service';

describe('HelprequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelprequestService]
    });
  });

  it('should be created', inject([HelprequestService], (service: HelprequestService) => {
    expect(service).toBeTruthy();
  }));
});
