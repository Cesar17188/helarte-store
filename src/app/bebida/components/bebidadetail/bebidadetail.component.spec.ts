import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidadetailComponent } from './bebidadetail.component';

describe('BebidadetailComponent', () => {
  let component: BebidadetailComponent;
  let fixture: ComponentFixture<BebidadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
