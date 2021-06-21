import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { D3VisualizationComponent } from './components/d3-visualization/d3-visualization.component';

const routes: Routes = [
  { path: '', component: BarChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'd3-visualization', component: D3VisualizationComponent }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }