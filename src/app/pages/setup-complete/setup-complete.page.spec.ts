import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCompletePage } from './setup-complete.page';

describe('SetupCompletePage', () => {
  let component: SetupCompletePage;
  let fixture: ComponentFixture<SetupCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupCompletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
