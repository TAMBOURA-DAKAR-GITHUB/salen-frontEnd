import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceUtilisateurComponent } from './place-utilisateur.component';

describe('PlaceUtilisateurComponent', () => {
  let component: PlaceUtilisateurComponent;
  let fixture: ComponentFixture<PlaceUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
