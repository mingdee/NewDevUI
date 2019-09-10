import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiStatusPage } from './wifi-status.page';

describe('WifiStatusPage', () => {
  let component: WifiStatusPage;
  let fixture: ComponentFixture<WifiStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
