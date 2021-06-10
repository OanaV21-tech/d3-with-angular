import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { D3VisualizationComponent } from './components/d3-visualization/d3-visualization.component';
import { LineFetchChartComponent } from './components/line-fetch-chart/line-fetch-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    D3VisualizationComponent,
    LineFetchChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
