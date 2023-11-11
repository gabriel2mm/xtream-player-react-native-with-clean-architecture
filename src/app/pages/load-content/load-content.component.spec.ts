import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadContentComponent } from './load-content.component';

describe('LoadContentComponent', () => {
  let component: LoadContentComponent;
  let fixture: ComponentFixture<LoadContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadContentComponent]
    });
    fixture = TestBed.createComponent(LoadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
