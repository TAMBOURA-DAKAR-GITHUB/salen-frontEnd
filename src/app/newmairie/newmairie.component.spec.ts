import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmairieComponent } from './newmairie.component';

describe('NewmairieComponent', () => {
  let component: NewmairieComponent;
  let fixture: ComponentFixture<NewmairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
