import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildTwoComponent } from './grand-child-two.component';

describe('GrandChildTwoComponent', () => {
  let component: GrandChildTwoComponent;
  let fixture: ComponentFixture<GrandChildTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandChildTwoComponent]
    });
    fixture = TestBed.createComponent(GrandChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
