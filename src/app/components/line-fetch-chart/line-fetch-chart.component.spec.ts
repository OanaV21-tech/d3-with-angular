import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineFetchChartComponent } from './line-fetch-chart.component';

describe('LineFetchChartComponent', () => {
  let component: LineFetchChartComponent;
  let fixture: ComponentFixture<LineFetchChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineFetchChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineFetchChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
