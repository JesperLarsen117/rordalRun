import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSignUpComponent } from './run-sign-up.component';

describe('RunSignUpComponent', () => {
  let component: RunSignUpComponent;
  let fixture: ComponentFixture<RunSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
