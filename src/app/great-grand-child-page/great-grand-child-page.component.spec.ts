import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGrandChildPageComponent } from './great-grand-child-page.component';

describe('GreatGrandChildPageComponent', () => {
  let component: GreatGrandChildPageComponent;
  let fixture: ComponentFixture<GreatGrandChildPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatGrandChildPageComponent]
    });
    fixture = TestBed.createComponent(GreatGrandChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
