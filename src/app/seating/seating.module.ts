import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SeatingComponent } from './seating.component';
import { SeatingChartService } from './seating-chart.service';
import { SeatingDataService } from './seating-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
