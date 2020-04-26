import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeriesComponent } from './backeries.component';

describe('BackeriesComponent', () => {
  let component: BackeriesComponent;
  let fixture: ComponentFixture<BackeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
