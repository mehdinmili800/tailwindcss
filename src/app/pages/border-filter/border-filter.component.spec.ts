import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderFilterComponent } from './border-filter.component';

describe('BorderFilterComponent', () => {
  let component: BorderFilterComponent;
  let fixture: ComponentFixture<BorderFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderFilterComponent]
    });
    fixture = TestBed.createComponent(BorderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
