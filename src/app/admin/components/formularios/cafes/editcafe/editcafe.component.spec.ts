import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcafeComponent } from './editcafe.component';

describe('EditcafeComponent', () => {
  let component: EditcafeComponent;
  let fixture: ComponentFixture<EditcafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
