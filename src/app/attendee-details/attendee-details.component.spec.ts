import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeDetailsComponent } from './attendee-details.component';

describe('AttendeeDetailsComponent', () => {
  let component: AttendeeDetailsComponent;
  let fixture: ComponentFixture<AttendeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
