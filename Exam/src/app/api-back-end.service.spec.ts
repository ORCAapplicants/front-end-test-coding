import { TestBed, inject } from '@angular/core/testing';

import { ApiBackEndService } from './api-back-end.service';

describe('ApiBackEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBackEndService]
    });
  });

  it('should be created', inject([ApiBackEndService], (service: ApiBackEndService) => {
    expect(service).toBeTruthy();
  }));
});
