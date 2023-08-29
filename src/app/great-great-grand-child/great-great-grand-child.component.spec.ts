import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGreatGrandChildComponent } from './great-great-grand-child.component';

describe('GreatGreatGrandChildComponent', () => {
  let component: GreatGreatGrandChildComponent;
  let fixture: ComponentFixture<GreatGreatGrandChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatGreatGrandChildComponent]
    });
    fixture = TestBed.createComponent(GreatGreatGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
