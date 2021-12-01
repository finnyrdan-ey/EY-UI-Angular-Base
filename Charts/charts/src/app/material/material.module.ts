import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NgChartsComponent } from './ng-charts/ng-charts.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
const MaterialComponentModule:any =[
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
]
@NgModule({
  declarations: [NgChartsComponent, HighChartComponent, D3ChartComponent],
  imports: [
    CommonModule,MaterialComponentModule
  ],
  exports: [
    MaterialComponentModule
  ]
})
export class MaterialModule { }
