import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputPage } from './name-input.page';

describe('NameInputPage', () => {
  let component: NameInputPage;
  let fixture: ComponentFixture<NameInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
