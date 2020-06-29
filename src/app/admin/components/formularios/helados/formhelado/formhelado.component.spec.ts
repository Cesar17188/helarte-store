import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormheladoComponent } from './formhelado.component';

describe('FormheladoComponent', () => {
  let component: FormheladoComponent;
  let fixture: ComponentFixture<FormheladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormheladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
