import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointMediaQueriesComponent } from './breakpoint-media-queries.component';

describe('BreakpointMediaQueriesComponent', () => {
  let component: BreakpointMediaQueriesComponent;
  let fixture: ComponentFixture<BreakpointMediaQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakpointMediaQueriesComponent]
    });
    fixture = TestBed.createComponent(BreakpointMediaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
