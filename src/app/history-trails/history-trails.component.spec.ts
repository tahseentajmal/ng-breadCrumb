import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTrailsComponent } from './history-trails.component';

describe('HistoryTrailsComponent', () => {
  let component: HistoryTrailsComponent;
  let fixture: ComponentFixture<HistoryTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryTrailsComponent]
    });
    fixture = TestBed.createComponent(HistoryTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
