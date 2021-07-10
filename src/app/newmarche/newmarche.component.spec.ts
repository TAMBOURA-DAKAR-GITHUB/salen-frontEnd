import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmarcheComponent } from './newmarche.component';

describe('NewmarcheComponent', () => {
  let component: NewmarcheComponent;
  let fixture: ComponentFixture<NewmarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
