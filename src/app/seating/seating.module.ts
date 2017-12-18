import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeatingComponent } from './seating.component';
import { SeatComponent } from './seat/seat.component';

import { SeatingChartService } from './seating-chart.service';
import { SeatingDataService } from './seating-data.service';
import { SelectedService } from './shared/selected.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SeatingComponent,
    SeatComponent
  ],
  providers: [
    SeatingChartService,
    SeatingDataService,
    SelectedService
  ],
  exports: [
    SeatingComponent
  ]
})
export class SeatingModule { }
