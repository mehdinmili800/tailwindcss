import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoClassesPseudoElementComponent } from './pseudo-classes-pseudo-element.component';

describe('PseudoClassesPseudoElementComponent', () => {
  let component: PseudoClassesPseudoElementComponent;
  let fixture: ComponentFixture<PseudoClassesPseudoElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoClassesPseudoElementComponent]
    });
    fixture = TestBed.createComponent(PseudoClassesPseudoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
