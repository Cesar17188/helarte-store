import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditheladoComponent } from './edithelado.component';

describe('EditheladoComponent', () => {
  let component: EditheladoComponent;
  let fixture: ComponentFixture<EditheladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditheladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
