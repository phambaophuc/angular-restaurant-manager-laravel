import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAnalyticsComponent } from './dash-analytics.component';

describe('DashAnalyticsComponent', () => {
  let component: DashAnalyticsComponent;
  let fixture: ComponentFixture<DashAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAnalyticsComponent]
    });
    fixture = TestBed.createComponent(DashAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
