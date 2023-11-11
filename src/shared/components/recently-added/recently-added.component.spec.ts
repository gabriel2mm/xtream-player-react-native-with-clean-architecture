import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedComponent } from './recently-added.component';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyAddedComponent]
    });
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
