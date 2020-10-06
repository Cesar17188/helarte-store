import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesproductsContainer } from './cafesproducts.containers';

describe('CafesproductsComponent', () => {
  let component: CafesproductsContainer;
  let fixture: ComponentFixture<CafesproductsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafesproductsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
