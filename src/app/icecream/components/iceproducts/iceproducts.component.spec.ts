import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceproductsComponent } from './iceproducts.component';

describe('IceproductsComponent', () => {
  let component: IceproductsComponent;
  let fixture: ComponentFixture<IceproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
