import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { D3ChartComponent } from "./material/d3-chart/d3-chart.component";
import { HighChartComponent } from "./material/high-chart/high-chart.component";
import { NgChartsComponent } from "./material/ng-charts/ng-charts.component";

const routes: Routes = [
    { path: 'ngChart', component: NgChartsComponent },
    { path: 'highChart', component: HighChartComponent },
    { path: 'd3Chart', component: D3ChartComponent },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
