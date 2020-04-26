import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksproductsComponent } from './snacksproducts.component';

describe('SnacksproductsComponent', () => {
  let component: SnacksproductsComponent;
  let fixture: ComponentFixture<SnacksproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
