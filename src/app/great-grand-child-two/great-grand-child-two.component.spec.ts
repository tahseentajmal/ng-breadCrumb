import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGrandChildTwoComponent } from './great-grand-child-two.component';

describe('GreatGrandChildTwoComponent', () => {
  let component: GreatGrandChildTwoComponent;
  let fixture: ComponentFixture<GreatGrandChildTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatGrandChildTwoComponent]
    });
    fixture = TestBed.createComponent(GreatGrandChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
