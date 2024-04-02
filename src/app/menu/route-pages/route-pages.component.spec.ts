import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePagesComponent } from './route-pages.component';

describe('RoutePagesComponent', () => {
  let component: RoutePagesComponent;
  let fixture: ComponentFixture<RoutePagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutePagesComponent]
    });
    fixture = TestBed.createComponent(RoutePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
