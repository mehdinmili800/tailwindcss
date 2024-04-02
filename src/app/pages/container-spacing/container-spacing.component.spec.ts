import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSpacingComponent } from './container-spacing.component';

describe('ContainerSpacingComponent', () => {
  let component: ContainerSpacingComponent;
  let fixture: ComponentFixture<ContainerSpacingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerSpacingComponent]
    });
    fixture = TestBed.createComponent(ContainerSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
