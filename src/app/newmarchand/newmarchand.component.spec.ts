import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmarchandComponent } from './newmarchand.component';

describe('NewmarchandComponent', () => {
  let component: NewmarchandComponent;
  let fixture: ComponentFixture<NewmarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
