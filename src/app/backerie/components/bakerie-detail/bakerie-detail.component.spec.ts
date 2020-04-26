import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerieDetailComponent } from './bakerie-detail.component';

describe('BakerieDetailComponent', () => {
  let component: BakerieDetailComponent;
  let fixture: ComponentFixture<BakerieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
