import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as d3 from 'd3';

import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have svg element', (() => {
    const element = d3.select('#barChart').select('svg').node();
    expect(element).toBeDefined();
  }));

  it('should have bar selection', (() => {
    const element = d3.select('#barChart').selectAll('g').select('.bar').node();
    expect(element).toBeDefined();
  }));

  it('should have 8 bars Sections', (() => {
    const element = d3.select('#barChart').selectAll('.bar').nodes();
    expect(element.length).toBe(8);
  }));

  it('should have axis--x and axis--y', (() => {
    const xAxiselement = d3.select('#barChart').selectAll('.axis--x').nodes();
    const yAxiselement = d3.select('#barChart').selectAll('.axis--y').nodes();
    expect(xAxiselement.length).toBe(1);
    expect(yAxiselement.length).toBe(1);
  }));
});


