import { Component, OnInit } from '@angular/core';
import { SeatingChartService } from './seating-chart.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  public seating = [[]];

  constructor(private seatingService: SeatingChartService) { }

  ngOnInit() {
    this.seatingService.initChart();
    this.seating = this.seatingService.seatingChart;
  }

}
