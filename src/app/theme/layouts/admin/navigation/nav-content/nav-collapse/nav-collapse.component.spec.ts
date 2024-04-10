import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapseComponent } from './nav-collapse.component';

describe('NavCollapseComponent', () => {
  let component: NavCollapseComponent;
  let fixture: ComponentFixture<NavCollapseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCollapseComponent]
    });
    fixture = TestBed.createComponent(NavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
