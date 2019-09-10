import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCompletePage } from './name-complete.page';

describe('NameCompletePage', () => {
  let component: NameCompletePage;
  let fixture: ComponentFixture<NameCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCompletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
