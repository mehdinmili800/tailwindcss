import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionsComponent } from './fonctions.component';

describe('FonctionsComponent', () => {
  let component: FonctionsComponent;
  let fixture: ComponentFixture<FonctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonctionsComponent]
    });
    fixture = TestBed.createComponent(FonctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
