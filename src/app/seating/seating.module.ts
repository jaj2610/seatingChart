import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeatingComponent } from './seating.component';
import { SeatingChartService } from './seating-chart.service';
import { SeatingDataService } from './seating-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SeatingComponent
  ],
  providers: [
    SeatingChartService,
    SeatingDataService
  ],
  exports: [
    SeatingComponent
  ]
})
export class SeatingModule { }
