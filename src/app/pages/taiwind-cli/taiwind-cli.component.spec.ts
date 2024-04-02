import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwindCliComponent } from './taiwind-cli.component';

describe('TaiwindCliComponent', () => {
  let component: TaiwindCliComponent;
  let fixture: ComponentFixture<TaiwindCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaiwindCliComponent]
    });
    fixture = TestBed.createComponent(TaiwindCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
