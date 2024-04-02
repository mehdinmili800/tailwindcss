import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsAnimationComponent } from './transitions-animation.component';

describe('TransitionsAnimationComponent', () => {
  let component: TransitionsAnimationComponent;
  let fixture: ComponentFixture<TransitionsAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransitionsAnimationComponent]
    });
    fixture = TestBed.createComponent(TransitionsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
