import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLayerDirectivesComponent } from './apply-layer-directives.component';

describe('ApplyLayerDirectivesComponent', () => {
  let component: ApplyLayerDirectivesComponent;
  let fixture: ComponentFixture<ApplyLayerDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLayerDirectivesComponent]
    });
    fixture = TestBed.createComponent(ApplyLayerDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
