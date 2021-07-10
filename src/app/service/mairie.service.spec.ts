import { TestBed } from '@angular/core/testing';

import { MairieService } from './mairie.service';

describe('MairieService', () => {
  let service: MairieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MairieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
