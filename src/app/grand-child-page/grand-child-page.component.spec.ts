import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildPageComponent } from './grand-child-page.component';

describe('GrandChildPageComponent', () => {
  let component: GrandChildPageComponent;
  let fixture: ComponentFixture<GrandChildPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandChildPageComponent]
    });
    fixture = TestBed.createComponent(GrandChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
