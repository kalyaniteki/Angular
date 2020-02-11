import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssComponent } from './register-ass.component';

describe('RegisterAssComponent', () => {
  let component: RegisterAssComponent;
  let fixture: ComponentFixture<RegisterAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
