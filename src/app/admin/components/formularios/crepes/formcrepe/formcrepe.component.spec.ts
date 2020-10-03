import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcrepeComponent } from './formcrepe.component';

describe('FormcrepeComponent', () => {
  let component: FormcrepeComponent;
  let fixture: ComponentFixture<FormcrepeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcrepeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcrepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
