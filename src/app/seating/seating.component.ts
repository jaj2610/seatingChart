import { Component, OnInit } from '@angular/core';
import { SeatingChartService } from './seating-chart.service';

@Component({
  selector: 'j-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  constructor(seatingService: SeatingChartService) { }

  ngOnInit() {
  }

}
