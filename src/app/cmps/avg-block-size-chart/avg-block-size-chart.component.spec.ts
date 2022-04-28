import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgBlockSizeChartComponent } from './avg-block-size-chart.component';

describe('AvgBlockSizeChartComponent', () => {
  let component: AvgBlockSizeChartComponent;
  let fixture: ComponentFixture<AvgBlockSizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgBlockSizeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgBlockSizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
