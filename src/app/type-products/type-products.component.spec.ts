import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProductsComponent } from './type-products.component';

describe('TypeProductsComponent', () => {
  let component: TypeProductsComponent;
  let fixture: ComponentFixture<TypeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
