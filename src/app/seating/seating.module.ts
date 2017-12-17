import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatingComponent } from './seating.component';
import { SeatingChartService } from './seating-chart.service';

@NgModule({
  imports: [
    CommonModule,
    SeatingComponent
  ],
  declarations: [
    SeatingComponent
  ],
  providers: [
    SeatingChartService
  ],
  exports: [
    SeatingComponent,
    SeatingChartService
  ]
})
export class SeatingModule { }
