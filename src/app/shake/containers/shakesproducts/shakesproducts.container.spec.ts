import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesproductsContainer } from './shakesproducts.container';

describe('ShakesproductsComponent', () => {
  let component: ShakesproductsContainer;
  let fixture: ComponentFixture<ShakesproductsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesproductsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
