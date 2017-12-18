import { Component, OnInit } from '@angular/core';
import { SeatingChartService } from './seating-chart.service';
import { SelectedService } from './shared/selected.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  public seating = [[]];

  constructor(private seatingService: SeatingChartService, public selectedService: SelectedService) { }

  ngOnInit() {
    this.seatingService.initChart();
    this.seating = this.seatingService.seatingChart;
  }

  getClass(index) {
    if (this.seating[index + 1]) {
      return this.seating[index + 1][0]['class'] !== this.seating[index][0]['class'];
    } else {
      return false;
    }
  }

  getColumn(row, index) {
    if (row[index + 1]) {
      return row[index + 1]['seat'].charCodeAt(0) - 1 !== row[index]['seat'].charCodeAt(0);
    } else {
      return false;
    }
  }

}
