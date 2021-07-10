import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandMarcheComponent } from './marchand-marche.component';

describe('MarchandMarcheComponent', () => {
  let component: MarchandMarcheComponent;
  let fixture: ComponentFixture<MarchandMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchandMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
