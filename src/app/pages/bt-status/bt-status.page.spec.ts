import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtStatusPage } from './bt-status.page';

describe('BtStatusPage', () => {
  let component: BtStatusPage;
  let fixture: ComponentFixture<BtStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
