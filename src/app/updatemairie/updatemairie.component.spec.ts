import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemairieComponent } from './updatemairie.component';

describe('UpdatemairieComponent', () => {
  let component: UpdatemairieComponent;
  let fixture: ComponentFixture<UpdatemairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
