import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoForComponent } from './demo-for.component';

describe('DemoForComponent', () => {
  let component: DemoForComponent;
  let fixture: ComponentFixture<DemoForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
