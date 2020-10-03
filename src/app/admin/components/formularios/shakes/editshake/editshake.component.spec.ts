import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshakeComponent } from './editshake.component';

describe('EditshakeComponent', () => {
  let component: EditshakeComponent;
  let fixture: ComponentFixture<EditshakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
