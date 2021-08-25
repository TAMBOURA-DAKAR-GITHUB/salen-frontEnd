import { TestBed } from '@angular/core/testing';

import { NewmairieGuard } from './newmairie.guard';

describe('NewmairieGuard', () => {
  let guard: NewmairieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewmairieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
