import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAssignmentComponent } from './demo-assignment.component';

describe('DemoAssignmentComponent', () => {
  let component: DemoAssignmentComponent;
  let fixture: ComponentFixture<DemoAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
