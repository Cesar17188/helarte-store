import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeriesproductsComponent } from './backeriesproducts.component';

describe('BackeriesproductsComponent', () => {
  let component: BackeriesproductsComponent;
  let fixture: ComponentFixture<BackeriesproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackeriesproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeriesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
