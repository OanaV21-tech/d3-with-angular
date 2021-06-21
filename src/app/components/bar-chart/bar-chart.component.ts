import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { StatsBarChart } from 'src/assets/data/data';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BarChartComponent implements OnInit {
  currentRate = 8;
  title = 'Bar Chart - Employee Statistic of Diff Company';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  
  data = [
    {company: 'Apple', frequency: 90000},
    {company: 'IBM', frequency: 70000},
    {company: 'HP', frequency: 15000},
    {company: 'Facebook', frequency: 80000},
    {company: 'TCS', frequency: 15000},
    {company: 'Google', frequency: 85000},
    {company: 'Wipro', frequency: 2000},
    {company: 'EMC', frequency: 8000}
];

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit(): void {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
    this.updateChart();
    // this.updateBarData();
  }

  initSvg() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(StatsBarChart.map((d) => d.company));
    this.y.domain([0, d3Array.max(StatsBarChart, (d) => d.frequency)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).tickFormat(function(d){
        return "$" + d;
    }).ticks(10))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr("stroke", "black")
      .text('Frequency');
  }

  drawBars() {
    this.g.selectAll('.bar')
      .data(StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .on("mouseover", this.onMouseOver()) //Add listener for the mouseover event
      .on("mouseout", this.onMouseOut())   //Add listener for the mouseout event
      .attr('x', (d: any) => this.x(d.company))
      .attr('y', (d: any) => this.y(d.frequency))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d: any) => this.height - this.y(d.frequency))
  }

  onMouseOver() {
    
    this.g.selectAll('.tick').attr('class', 'highlight');
    this.g.selectAll('.highlight')
      .data(this.data)
      .transition()
      .duration(400)
      .style("fill", "orange")
      .attr('width', this.x.bandwidth() + 5)
      .attr("y", (d: any) =>{ return this.y(d.frequency) - 10; })
      .attr("height", (d: any) => { return this.height - this.y(d.frequency) + 10; });

    this.g.append("text")
     .data(this.data)
     .attr('class', 'val') // add class to text label
     .attr('x', (d: any) => {
         return this.x(d.company);
     })
     .attr('y', (d: any) => {
         return this.y(d.frequency) - 15;
     })
     .text((d: any) => {
         return [ '$' + d.frequency];  // Value of the text
     });
}

  onMouseOut() {
    this.g.selectAll('.tick').attr('class', 'highlight');
    this.g.selectAll('.highlight')
      .data(this.data)
      .transition()
      .duration(400)
      .style("fill", "red")
      .attr('width', this.x.bandwidth())
      .attr('y', (d: any) => { return this.y(d.frequency); })
      .attr('height', (d: any) => { return this.height - this.y(d.frequency); });

      this.g.selectAll('.tick')
      .remove()
  }

  updateChart() {
    const paths = this.g.selectAll('.bar').data(StatsBarChart);
    this.g.select('#barChart').on("click", () => {
      paths.attr('class', 'bar')
      .transition()
      .attr('y', () => {
          return  this.y.domain(this.data.map((d) => d.frequency));
      })
    })
  }

}
