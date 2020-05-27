import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesproductsComponent } from './shakesproducts.component';

describe('ShakesproductsComponent', () => {
  let component: ShakesproductsComponent;
  let fixture: ComponentFixture<ShakesproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
