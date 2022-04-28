import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimespanInputComponent } from './timespan-input.component';

describe('TimespanInputComponent', () => {
  let component: TimespanInputComponent;
  let fixture: ComponentFixture<TimespanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimespanInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimespanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
