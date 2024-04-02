import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterActivityComponent } from './inter-activity.component';

describe('InterActivityComponent', () => {
  let component: InterActivityComponent;
  let fixture: ComponentFixture<InterActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterActivityComponent]
    });
    fixture = TestBed.createComponent(InterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
