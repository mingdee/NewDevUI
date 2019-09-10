import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiInputPage } from './wifi-input.page';

describe('WifiInputPage', () => {
  let component: WifiInputPage;
  let fixture: ComponentFixture<WifiInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
