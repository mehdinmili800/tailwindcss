import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionZIndexComponent } from './position-z-index.component';

describe('PositionZIndexComponent', () => {
  let component: PositionZIndexComponent;
  let fixture: ComponentFixture<PositionZIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionZIndexComponent]
    });
    fixture = TestBed.createComponent(PositionZIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
