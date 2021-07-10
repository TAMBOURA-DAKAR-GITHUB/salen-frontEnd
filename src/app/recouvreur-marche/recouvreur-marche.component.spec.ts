import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvreurMarcheComponent } from './recouvreur-marche.component';

describe('RecouvreurMarcheComponent', () => {
  let component: RecouvreurMarcheComponent;
  let fixture: ComponentFixture<RecouvreurMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecouvreurMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvreurMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
