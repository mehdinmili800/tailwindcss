import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundShadowComponent } from './background-shadow.component';

describe('BackgroundShadowComponent', () => {
  let component: BackgroundShadowComponent;
  let fixture: ComponentFixture<BackgroundShadowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundShadowComponent]
    });
    fixture = TestBed.createComponent(BackgroundShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
