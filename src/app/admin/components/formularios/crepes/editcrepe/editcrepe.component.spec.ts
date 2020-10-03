import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcrepeComponent } from './editcrepe.component';

describe('EditcrepeComponent', () => {
  let component: EditcrepeComponent;
  let fixture: ComponentFixture<EditcrepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcrepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcrepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
