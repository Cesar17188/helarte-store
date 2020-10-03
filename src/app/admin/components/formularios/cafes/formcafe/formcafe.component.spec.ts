import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcafeComponent } from './formcafe.component';

describe('FormcafeComponent', () => {
  let component: FormcafeComponent;
  let fixture: ComponentFixture<FormcafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
