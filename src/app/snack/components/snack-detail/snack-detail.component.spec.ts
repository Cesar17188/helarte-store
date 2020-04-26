import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackDetailComponent } from './snack-detail.component';

describe('SnackDetailComponent', () => {
  let component: SnackDetailComponent;
  let fixture: ComponentFixture<SnackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
