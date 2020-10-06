import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeriesproductsContainer } from './backeriesproducts.container';

describe('BackeriesproductsComponent', () => {
  let component: BackeriesproductsContainer;
  let fixture: ComponentFixture<BackeriesproductsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackeriesproductsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeriesproductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
