import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesproductsComponent } from './cafesproducts.component';

describe('CafesproductsComponent', () => {
  let component: CafesproductsComponent;
  let fixture: ComponentFixture<CafesproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafesproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
