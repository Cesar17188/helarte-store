import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasproductsComponent } from './bebidasproducts.component';

describe('BebidasproductsComponent', () => {
  let component: BebidasproductsComponent;
  let fixture: ComponentFixture<BebidasproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
