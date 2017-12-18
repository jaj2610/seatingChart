import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { SeatingDataService } from './seating-data.service';

@Injectable()
export class SeatingChartService {

  public seatingData = [];
  public seatingChart = [[]];

  constructor(public seatingDataService: SeatingDataService) {
  }

  public initChart() {
    this.seatingDataService.getSeatingData().subscribe(data => { this.seatingData = data; this.sortRows(); }, error => console.log(error));
  }

  private sortRows() {
    // create array of rows containing all seats in each row
    this.seatingData.forEach(element => {
      this.seatingChart[element.row - 1] = this.seatingChart[element.row - 1] || [];
      this.seatingChart[element.row - 1].push(element);
    });

    this.sortColumns();
  }

  private sortColumns() {
    // sort columns (by seat) within rows
    this.seatingChart.forEach(row => {
      row.sort(function(a, b) {
        return a.seat > b.seat ? 1 : -1;
      });
    });
  }
}
