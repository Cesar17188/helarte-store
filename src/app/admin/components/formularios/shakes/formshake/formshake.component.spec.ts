import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormshakeComponent } from './formshake.component';

describe('FormshakeComponent', () => {
  let component: FormshakeComponent;
  let fixture: ComponentFixture<FormshakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormshakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormshakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
