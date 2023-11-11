import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVodComponent } from './featured-vod.component';

describe('FeaturedVodComponent', () => {
  let component: FeaturedVodComponent;
  let fixture: ComponentFixture<FeaturedVodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedVodComponent]
    });
    fixture = TestBed.createComponent(FeaturedVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
